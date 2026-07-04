import { AlertTriangle } from "lucide-react";

export function ConfigNotice() {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 size-5 shrink-0" />
        <div>
          <p className="font-semibold">Supabase ist noch nicht verbunden.</p>
          <p className="mt-1 text-amber-900">
            Trage `NEXT_PUBLIC_SUPABASE_URL` und `NEXT_PUBLIC_SUPABASE_ANON_KEY`
            in `.env.local` ein und führe `supabase/schema.sql` aus. Bis dahin
            zeigt Buddza Demo-Daten und deaktiviert Schreibaktionen.
          </p>
        </div>
      </div>
    </div>
  );
}
