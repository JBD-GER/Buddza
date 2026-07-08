import Image from "next/image";
import Link from "next/link";
import { LogOut, UserRound } from "lucide-react";
import { signOutAction } from "@/app/auth-actions";
import { MobileMenu } from "@/components/app/mobile-menu";
import { Button } from "@/components/ui/button";
import { getUnreadMessageCount } from "@/lib/anfragen";
import { getUser } from "@/lib/supabase/server";

const publicLinks = [
  { href: "/inserate", label: "Inserate" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/preise", label: "Preis" },
];

const signedInLinks = [
  { href: "/uebersicht", label: "Übersicht" },
  { href: "/inserieren", label: "Inserieren" },
  { href: "/inserate", label: "Inserate" },
  { href: "/tierbetreuer", label: "Tierbetreuer" },
  { href: "/anfragen", label: "Anfragen" },
  { href: "/ratgeber", label: "Ratgeber" },
];

export async function AppHeader() {
  const user = await getUser();
  const unreadCount = user ? await getUnreadMessageCount(user.id) : 0;

  return (
    <header className="sticky top-0 z-40 border-b border-[#262C36]/10 bg-white/92 backdrop-blur">
      <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="relative block h-10 w-36 overflow-hidden sm:w-40" aria-label="Buddza Startseite">
          <Image
            src="/images/Buddza_Logo.png"
            alt="Buddza"
            fill
            priority
            sizes="160px"
            className="object-contain object-left"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {(user ? signedInLinks : publicLinks).map((item) => {
            const itemUnreadCount = item.href === "/anfragen" ? unreadCount : 0;

            return (
              <Button key={item.href} asChild variant="ghost">
                <Link href={item.href}>
                  {item.label}
                  {itemUnreadCount > 0 ? (
                    <span className="ml-1 rounded-full bg-[#F0917B] px-1.5 py-0.5 text-[11px] font-black leading-none text-[#262C36]">
                      {itemUnreadCount}
                    </span>
                  ) : null}
                </Link>
              </Button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              <Button asChild variant="ghost" size="icon" className="hidden lg:inline-flex" aria-label="Übersicht">
                <Link href="/uebersicht">
                  <UserRound />
                </Link>
              </Button>
              <form action={signOutAction} className="hidden lg:block">
                <Button variant="ghost" size="icon" aria-label="Abmelden">
                  <LogOut />
                </Button>
              </form>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm" className="hidden lg:inline-flex">
                <Link href="/einloggen">Login</Link>
              </Button>
              <Button asChild size="sm" className="hidden lg:inline-flex">
                <Link href="/registrieren">Registrieren</Link>
              </Button>
            </>
          )}
          <MobileMenu isSignedIn={Boolean(user)} unreadCount={unreadCount} />
        </div>
      </div>
    </header>
  );
}
