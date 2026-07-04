"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { ImagePlus, Video, X } from "lucide-react";
import { cn } from "@/lib/utils";

type MediaDropzoneProps = {
  name: string;
  label: string;
  accept: string;
  required?: boolean;
  kind: "image" | "video";
  maxSizeMb?: number;
};

function formatFileSize(bytes: number) {
  const megabytes = bytes / 1024 / 1024;
  return `${megabytes >= 10 ? megabytes.toFixed(0) : megabytes.toFixed(1)} MB`;
}

export function MediaDropzone({ name, label, accept, required, kind, maxSizeMb }: MediaDropzoneProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const previewUrl = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);
  const maxSizeBytes = maxSizeMb ? maxSizeMb * 1024 * 1024 : null;

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const Icon = kind === "image" ? ImagePlus : Video;

  function clearInput() {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function validateFile(nextFile: File | null) {
    if (!nextFile) {
      setFile(null);
      setError(null);
      return false;
    }

    if (maxSizeBytes && nextFile.size > maxSizeBytes) {
      clearInput();
      setFile(null);
      setError(`Maximal ${maxSizeMb} MB. Bitte wähle eine kleinere Datei.`);
      return false;
    }

    setFile(nextFile);
    setError(null);
    return true;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    validateFile(event.target.files?.[0] ?? null);
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setIsDragging(false);

    const nextFile = event.dataTransfer.files?.[0] ?? null;
    if (!nextFile || !validateFile(nextFile) || !inputRef.current) return;

    const transfer = new DataTransfer();
    transfer.items.add(nextFile);
    inputRef.current.files = transfer.files;
  }

  return (
    <label
      onDragEnter={() => setIsDragging(true)}
      onDragOver={(event) => event.preventDefault()}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={cn(
        "group relative flex min-h-40 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border border-dashed border-[#262C36]/18 bg-white p-4 text-center shadow-sm transition-colors hover:border-[#F0917B] hover:bg-[#F0917B]/8",
        isDragging && "border-[#F0917B] bg-[#F0917B]/8",
        error && "border-[#D97863] bg-[#FFF1ED]",
      )}
    >
      <input
        ref={inputRef}
        name={name}
        type="file"
        accept={accept}
        required={required}
        className="sr-only"
        onChange={handleChange}
      />

      {previewUrl && file ? (
        <>
          {kind === "image" ? (
            <img src={previewUrl} alt="" className="absolute inset-0 size-full object-cover" />
          ) : (
            <video src={previewUrl} className="absolute inset-0 size-full object-cover" muted playsInline />
          )}
          <span className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-md bg-white/95 px-3 py-2 text-left text-xs font-semibold text-slate-800 shadow-sm">
            <span className="truncate">
              {file.name} · {formatFileSize(file.size)}
            </span>
            <X className="size-4 shrink-0 text-slate-500" />
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-md bg-[#F0917B]/15 text-[#F0917B]">
            <Icon className="size-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-[#262C36]">{label}</p>
            <p className={cn("mt-1 text-xs", error ? "font-bold text-[#D97863]" : "text-slate-500")}>
              {error ?? `Datei hineinziehen oder antippen${maxSizeMb ? ` · max. ${maxSizeMb} MB` : ""}`}
            </p>
          </div>
        </div>
      )}
    </label>
  );
}
