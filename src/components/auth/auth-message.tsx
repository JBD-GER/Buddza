type AuthMessageProps = {
  error?: string;
  message?: string;
};

export function AuthMessage({ error, message }: AuthMessageProps) {
  if (!error && !message) return null;

  return (
    <div
      className={
        error
          ? "rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800"
          : "rounded-md border border-[#F0917B]/25 bg-[#F0917B]/10 px-3 py-2 text-sm text-[#262C36]"
      }
    >
      {error ?? message}
    </div>
  );
}
