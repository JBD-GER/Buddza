import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LogIn, ShieldCheck } from "lucide-react";

import { signInAction } from "@/app/auth-actions";
import { ConfigNotice } from "@/components/app/config-notice";
import { AuthMessage } from "@/components/auth/auth-message";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/ui/submit-button";
import { isSupabaseConfigured } from "@/lib/config";

type LoginPageProps = {
  searchParams: Promise<{ error?: string; message?: string; next?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;

  return (
    <main className="flex flex-1 items-center bg-[#FAF7F2] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[420px_0.95fr] lg:items-center">
        <section className="space-y-4">
          {!isSupabaseConfigured ? <ConfigNotice /> : null}
          <Card className="overflow-hidden rounded-lg border-[#262C36]/10 bg-white shadow-xl shadow-[#262C36]/10">
            <CardHeader className="p-5 sm:p-6">
              <div className="mb-3 flex size-11 items-center justify-center rounded-md bg-[#F0917B]/15 text-[#D97863]">
                <LogIn className="size-5" />
              </div>
              <CardTitle className="text-2xl leading-tight text-[#262C36]">
                Willkommen zurück
              </CardTitle>
              <CardDescription className="text-sm leading-6 text-[#262C36]/65">
                Melde dich an und verwalte Inserate oder Anfragen.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-5 pt-0 sm:p-6 sm:pt-0">
              <form action={signInAction} className="space-y-4">
                <input type="hidden" name="next" value={params.next ?? "/uebersicht"} />
                <AuthMessage error={params.error} message={params.message} />
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@beispiel.de"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <Label htmlFor="password">Passwort</Label>
                    <Link href="/passwort-vergessen" className="text-sm font-semibold text-[#D97863] hover:text-[#B95D4D]">
                      Vergessen?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Dein Passwort"
                    required
                  />
                </div>
                <SubmitButton className="h-12 w-full text-base">
                  Einloggen
                  <ArrowRight className="size-5" />
                </SubmitButton>
              </form>

              <div className="mt-5 rounded-md bg-[#F5FBF8] p-3 text-sm leading-6 text-[#262C36]/70">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#2F7A68]" />
                  Deine Inserate, Nachrichten und Kontakte bleiben nach dem Einloggen an einem Ort.
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 text-sm text-[#262C36]/62">
                Noch kein Konto?
                <Button asChild variant="ghost" size="sm">
                  <Link href="/registrieren">Registrieren</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="relative min-h-[24rem] overflow-hidden rounded-lg bg-[#202833] text-white shadow-xl shadow-[#262C36]/12 lg:min-h-[38rem]">
          <Image
            src="/images/generated/login-dog-hallway.jpg"
            alt="Hund wartet freundlich in einem Flur"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#111820]/24" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="max-w-md text-3xl font-black leading-tight tracking-normal sm:text-4xl">
              Schön, dass du wieder da bist.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
