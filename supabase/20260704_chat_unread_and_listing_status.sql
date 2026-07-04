-- Read receipts for one-to-one chats and owner-side listing lifecycle actions.

alter type public.message_media_type add value if not exists 'document';

create index if not exists messages_unread_by_chat_idx
on public.messages(chat_id, sender_id, read_at)
where read_at is null;

create or replace function public.mark_chat_read(p_chat_id uuid)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  current_user_id uuid := auth.uid();
  updated_count integer := 0;
begin
  if current_user_id is null then
    raise exception 'Not authenticated';
  end if;

  if not exists (
    select 1
    from public.chats
    where chats.id = p_chat_id
      and current_user_id in (chats.owner_id, chats.sitter_id)
  ) then
    raise exception 'Chat not found';
  end if;

  update public.messages
  set read_at = now()
  where chat_id = p_chat_id
    and sender_id <> current_user_id
    and read_at is null;

  get diagnostics updated_count = row_count;
  return updated_count;
end;
$$;

grant execute on function public.mark_chat_read(uuid) to authenticated;
