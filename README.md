# Buddza

Produktionsnahes MVP fuer ein Tierbetreuungs-Portal mit Next.js App Router, Tailwind CSS, Shadcn-style UI, Supabase Auth, PostgreSQL, Storage und Realtime Chat.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

In `.env.local` setzen:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Ohne Supabase-Credentials rendert die App Demo-Daten und blockiert Schreibaktionen sauber.

## Supabase

1. Neues Supabase-Projekt erstellen.
2. `supabase/schema.sql` im SQL Editor ausfuehren.
3. Auth Redirect URLs setzen:
   - `http://localhost:3000/authentifizierung/rueckruf`
   - `https://deine-domain.vercel.app/authentifizierung/rueckruf`
4. Fuer echte Umkreissuche eine vollstaendige deutsche PLZ-Centroid-Datei in `public.postal_codes` importieren.

### Auth-E-Mail-Vorlagen

Die Supabase Auth-Vorlagen liegen in `supabase/email-templates/`:

- Registrierung bestaetigen: Betreff aus `confirm-signup.subject.txt`, HTML aus `confirm-signup.html`
- Passwort zuruecksetzen: Betreff aus `reset-password.subject.txt`, HTML aus `reset-password.html`

Auf Vercel muss `NEXT_PUBLIC_SITE_URL` auf die oeffentliche Domain zeigen, zum Beispiel
`https://deine-domain.vercel.app`.

Das Schema enthaelt:

- `profiles`, `pet_categories`, `postal_codes`, `listings`, `chats`, `messages`
- PostGIS `geography`-Index fuer PLZ-Radius-Suche
- `search_listings_by_radius(...)` RPC
- `start_chat_for_listing(...)` RPC
- RLS-Policies fuer Profile, Inserate, Chats und Nachrichten
- Storage Buckets `listing-media` und `chat-media` mit passenden Policies
- Realtime-Publication fuer `messages`

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

## Deployment

Auf Vercel deployen und dieselben `NEXT_PUBLIC_*` Variablen im Projekt setzen. Die App nutzt nur Supabase Client/Auth/Storage/Realtime und benoetigt keine weiteren Server-Services.
