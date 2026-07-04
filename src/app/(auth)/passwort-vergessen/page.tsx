import Link from "next/link";
import { AuthMessage } from "@/components/auth/auth-message";
import { ConfigNotice } from "@/components/app/config-notice";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/ui/submit-button";
import { resetPasswordAction } from "@/app/auth-actions";
import { isSupabaseConfigured } from "@/lib/config";

type ForgotPasswordPageProps = {
  searchParams: Promise<{ error?: string; message?: string }>;
};

export default async function ForgotPasswordPage({ searchParams }: ForgotPasswordPageProps) {
  const params = await searchParams;

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-10">
      <div className="w-full max-w-md space-y-4">
        {!isSupabaseConfigured ? <ConfigNotice /> : null}
        <Card>
          <CardHeader>
            <CardTitle>Passwort zurücksetzen</CardTitle>
            <CardDescription>Du erhältst einen sicheren Link per E-Mail.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={resetPasswordAction} className="space-y-4">
              <AuthMessage error={params.error} message={params.message} />
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required />
              </div>
              <SubmitButton className="w-full">Reset-Link senden</SubmitButton>
            </form>
            <Link href="/einloggen" className="mt-5 block text-center text-sm font-semibold text-[#F0917B] hover:text-[#d97863]">
              Zurück zum Einloggen
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
