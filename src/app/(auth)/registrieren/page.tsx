import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ShieldCheck } from "lucide-react";

import { signUpAction } from "@/app/auth-actions";
import { AuthMessage } from "@/components/auth/auth-message";
import { ConfigNotice } from "@/components/app/config-notice";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/ui/submit-button";
import { isSupabaseConfigured } from "@/lib/config";

type RegisterPageProps = {
  searchParams: Promise<{ error?: string; next?: string }>;
};

const benefits = ["Kostenlos starten", "Keine Zahlungsdaten", "Für Halter und Betreuer"];

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const params = await searchParams;

  return (
    <main className="flex flex-1 items-center bg-[#F5FBF8] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[420px_0.95fr] lg:items-center">
        <section className="space-y-4">
          {!isSupabaseConfigured ? <ConfigNotice /> : null}
          <Card className="overflow-hidden rounded-lg border-[#262C36]/10 bg-white shadow-xl shadow-[#262C36]/10">
            <CardHeader className="p-5 sm:p-6">
              <div className="mb-3 flex size-11 items-center justify-center rounded-md bg-[#F0917B]/15 text-[#D97863]">
                <ShieldCheck className="size-5" />
              </div>
              <CardTitle className="text-2xl leading-tight text-[#262C36]">
                Registrieren
              </CardTitle>
              <CardDescription className="text-sm leading-6 text-[#262C36]/65">
                Kostenlos in der Early-Access-Phase.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-5 pt-0 sm:p-6 sm:pt-0">
              <form action={signUpAction} className="space-y-4">
                <input type="hidden" name="next" value={params.next ?? "/uebersicht"} />
                <AuthMessage error={params.error} />

                <div className="space-y-2">
                  <Label htmlFor="fullName">Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    placeholder="Vor- und Nachname"
                    required
                  />
                </div>

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
                  <Label htmlFor="password">Passwort</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    minLength={8}
                    placeholder="Mindestens 8 Zeichen"
                    required
                  />
                </div>

                <SubmitButton className="h-12 w-full text-base">
                  Kostenlos registrieren
                  <ArrowRight className="size-5" />
                </SubmitButton>
              </form>

              <div className="mt-5 grid gap-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex min-h-10 items-center gap-2 rounded-md bg-[#F5FBF8] px-3 text-sm font-bold text-[#262C36]/76"
                  >
                    <span className="size-2 rounded-full bg-[#2F7A68]" />
                    {benefit}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col items-center justify-center gap-2 text-sm text-[#262C36]/62 sm:flex-row">
                Bereits registriert?
                <Button asChild variant="ghost" size="sm">
                  <Link href="/einloggen">Einloggen</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="relative min-h-[24rem] overflow-hidden rounded-lg bg-[#202833] text-white shadow-xl shadow-[#262C36]/12 lg:min-h-[38rem]">
          <Image
            src="/images/generated/register-dog-desk.jpg"
            alt="Hund neben Laptop und Leine"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#111820]/28" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/16 px-3 py-1.5 text-xs font-black uppercase tracking-normal ring-1 ring-white/18 backdrop-blur">
              <BadgeCheck className="size-4 text-[#F5C86B]" />
              Buddza Early Access
            </div>
            <h1 className="mt-3 max-w-lg text-3xl font-black leading-tight tracking-normal sm:text-4xl">
              Konto erstellen und direkt loslegen.
            </h1>
          </div>
        </section>
      </div>
    </main>
  );
}
