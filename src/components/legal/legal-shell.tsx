import type { ReactNode } from "react";

type LegalShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalShell({ eyebrow, title, description, children }: LegalShellProps) {
  return (
    <main className="flex-1 bg-[#FAF7F2] text-[#262C36]">
      <section className="border-b border-[#262C36]/10 bg-white">
        <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
          <p className="text-sm font-black uppercase tracking-normal text-[#D97863]">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-normal sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#262C36]/70">{description}</p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="space-y-8 rounded-lg border border-[#262C36]/10 bg-white p-5 shadow-sm sm:p-7">
          {children}
        </div>
      </section>
    </main>
  );
}
