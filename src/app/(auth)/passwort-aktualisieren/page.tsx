import { AuthMessage } from "@/components/auth/auth-message";
import { ConfigNotice } from "@/components/app/config-notice";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/ui/submit-button";
import { updatePasswordAction } from "@/app/auth-actions";
import { isSupabaseConfigured } from "@/lib/config";

type UpdatePasswordPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function UpdatePasswordPage({ searchParams }: UpdatePasswordPageProps) {
  const params = await searchParams;

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-10">
      <div className="w-full max-w-md space-y-4">
        {!isSupabaseConfigured ? <ConfigNotice /> : null}
        <Card>
          <CardHeader>
            <CardTitle>Neues Passwort</CardTitle>
            <CardDescription>Wähle ein starkes Passwort für dein Buddza-Konto.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={updatePasswordAction} className="space-y-4">
              <AuthMessage error={params.error} />
              <div className="space-y-2">
                <Label htmlFor="password">Neues Passwort</Label>
                <Input id="password" name="password" type="password" autoComplete="new-password" minLength={8} required />
              </div>
              <SubmitButton className="w-full">Passwort speichern</SubmitButton>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
