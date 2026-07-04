"use client";

/* eslint-disable @next/next/no-img-element */

import { FormEvent, useEffect, useMemo, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { FileText, ImagePlus, Loader2, Paperclip, Send, Video, X } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";
import type { Message } from "@/lib/types";
import { cn, formatDateTime, sanitizeFileName } from "@/lib/utils";

type ChatRoomProps = {
  chatId: string;
  currentUserId: string;
  initialMessages: Message[];
};

const MAX_CHAT_MEDIA_BYTES = 50 * 1024 * 1024;
const DOCUMENT_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
];
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "video/mp4", "video/webm", ...DOCUMENT_TYPES];

function getMediaType(file: File): "image" | "video" | "document" {
  if (file.type.startsWith("image/")) return "image";
  if (file.type.startsWith("video/")) return "video";
  return "document";
}

export function ChatRoom({ chatId, currentUserId, initialMessages }: ChatRoomProps) {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const [messages, setMessages] = useState(initialMessages);
  const [body, setBody] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isPending, startTransition] = useTransition();
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  useEffect(() => {
    const client = supabase;
    if (!client) return;

    let isMounted = true;

    void client.rpc("mark_chat_read", { p_chat_id: chatId }).then(({ error }) => {
      if (!error && isMounted) {
        router.refresh();
      }
    });

    return () => {
      isMounted = false;
    };
  }, [chatId, router, supabase]);

  useEffect(() => {
    const client = supabase;
    if (!client) return;

    const channel = client
      .channel(`chat:${chatId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `chat_id=eq.${chatId}`,
        },
        async (payload) => {
          const nextMessage = payload.new as Message;

          if (nextMessage.media_path) {
            const { data } = await client.storage
              .from("chat-media")
              .createSignedUrl(nextMessage.media_path, 60 * 30);
            nextMessage.media_url = data?.signedUrl ?? null;
          }

          if (nextMessage.sender_id !== currentUserId) {
            const { error } = await client.rpc("mark_chat_read", { p_chat_id: chatId });
            if (!error) {
              router.refresh();
            }
          }

          setMessages((current) => {
            if (current.some((message) => message.id === nextMessage.id)) return current;
            return [...current, nextMessage];
          });
        },
      )
      .subscribe();

    return () => {
      client.removeChannel(channel);
    };
  }, [chatId, currentUserId, router, supabase]);

  function clearFile() {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function validateAttachment(nextFile: File | null) {
    if (!nextFile) {
      clearFile();
      return;
    }

    if (!ALLOWED_TYPES.includes(nextFile.type) || nextFile.size > MAX_CHAT_MEDIA_BYTES) {
      clearFile();
      toast.error("Anhänge müssen JPG, PNG, WebP, MP4, WebM, PDF, DOC, DOCX oder TXT sein und unter 50 MB bleiben.");
      return;
    }

    setFile(nextFile);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!supabase || isPending) return;

    const text = body.trim();
    if (!text && !file) return;

    startTransition(async () => {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          throw new Error("Bitte melde dich erneut an.");
        }

        let mediaPath: string | null = null;
        let mediaType: "image" | "video" | "document" | null = null;

        if (file) {
          mediaType = getMediaType(file);
          mediaPath = `${chatId}/${user.id}/${crypto.randomUUID()}-${sanitizeFileName(file.name)}`;

          const { error: uploadError } = await supabase.storage
            .from("chat-media")
            .upload(mediaPath, file, {
              cacheControl: "3600",
              upsert: false,
              contentType: file.type,
            });

          if (uploadError) throw new Error(uploadError.message);
        }

        const { data: insertedMessage, error } = await supabase
          .from("messages")
          .insert({
            chat_id: chatId,
            sender_id: user.id,
            body: text || null,
            media_path: mediaPath,
            media_type: mediaType,
          })
          .select("id, chat_id, sender_id, body, media_path, media_type, read_at, created_at")
          .single();

        if (error) throw new Error(error.message);

        if (insertedMessage) {
          const nextMessage = insertedMessage as Message;

          if (nextMessage.media_path) {
            const { data } = await supabase.storage
              .from("chat-media")
              .createSignedUrl(nextMessage.media_path, 60 * 30);
            nextMessage.media_url = data?.signedUrl ?? null;
          }

          setMessages((current) => {
            if (current.some((message) => message.id === nextMessage.id)) return current;
            return [...current, nextMessage];
          });
        }

        setBody("");
        clearFile();
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Nachricht konnte nicht gesendet werden.");
      }
    });
  }

  return (
    <div className="flex h-[calc(100vh-9rem)] min-h-[560px] flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex-1 space-y-3 overflow-y-auto px-3 py-4 sm:px-5">
        {messages.map((message) => {
          const isOwn = message.sender_id === currentUserId;

          return (
            <div key={message.id} className={cn("flex gap-2", isOwn && "justify-end")}>
              {!isOwn ? (
                <Avatar className="mt-1 size-8">
                  <AvatarImage src={message.sender?.avatar_url ?? undefined} alt="" />
                  <AvatarFallback name={message.sender?.full_name} />
                </Avatar>
              ) : null}
              <div
                className={cn(
                  "max-w-[82%] rounded-lg px-3 py-2 text-sm shadow-sm",
                  isOwn ? "bg-[#F0917B] text-[#262C36]" : "bg-[#262C36]/6 text-[#262C36]",
                )}
              >
                {message.media_url && message.media_type === "image" ? (
                  <img src={message.media_url} alt="" className="mb-2 max-h-72 rounded-md object-cover" />
                ) : null}
                {message.media_url && message.media_type === "video" ? (
                  <video src={message.media_url} controls className="mb-2 max-h-72 rounded-md bg-[#262C36]" />
                ) : null}
                {message.media_url && message.media_type === "document" ? (
                  <a
                    href={message.media_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mb-2 flex items-center gap-2 rounded-md bg-white/70 px-3 py-2 font-bold text-[#262C36] underline-offset-4 hover:underline"
                  >
                    <FileText className="size-4" />
                    Dokument ansehen
                  </a>
                ) : null}
                {message.body ? <p className="whitespace-pre-wrap leading-6">{message.body}</p> : null}
                <p className={cn("mt-1 text-[11px]", isOwn ? "text-[#262C36]/65" : "text-slate-500")}>
                  {formatDateTime(message.created_at)}
                </p>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className="border-t border-slate-200 p-3">
        {file ? (
          <div className="mb-2 flex items-center justify-between gap-3 rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-700">
            <span className="flex min-w-0 items-center gap-2">
              {getMediaType(file) === "image" ? <ImagePlus className="size-4" /> : null}
              {getMediaType(file) === "video" ? <Video className="size-4" /> : null}
              {getMediaType(file) === "document" ? <FileText className="size-4" /> : null}
              <span className="truncate">{file.name}</span>
            </span>
            <button type="button" onClick={clearFile} aria-label="Datei entfernen">
              <X className="size-4" />
            </button>
          </div>
        ) : null}
        <div className="flex items-center gap-2">
          <label className="inline-flex size-10 cursor-pointer items-center justify-center rounded-md text-slate-600 hover:bg-slate-100" aria-label="Medium anhängen">
            <Paperclip className="size-5" />
            <input
              ref={fileInputRef}
              type="file"
              className="sr-only"
              accept="image/jpeg,image/png,image/webp,video/mp4,video/webm,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
              onChange={(event) => validateAttachment(event.target.files?.[0] ?? null)}
            />
          </label>
          <Input
            value={body}
            onChange={(event) => setBody(event.target.value)}
            placeholder="Nachricht schreiben"
            disabled={!supabase}
          />
          <Button size="icon" disabled={!supabase || isPending || (!body.trim() && !file)} aria-label="Senden">
            {isPending ? <Loader2 className="animate-spin" /> : <Send />}
          </Button>
        </div>
      </form>
    </div>
  );
}
