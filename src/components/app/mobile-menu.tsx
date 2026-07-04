"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BadgeEuro,
  HeartHandshake,
  HandHeart,
  LayoutDashboard,
  ListChecks,
  LogIn,
  LogOut,
  Menu,
  MessageCircle,
  Plus,
  UserRoundPlus,
  X,
} from "lucide-react";

import { signOutAction } from "@/app/auth-actions";
import { Button } from "@/components/ui/button";

const publicLinks = [
  { href: "/inserate", label: "Inserate", icon: ListChecks },
  { href: "/ueber-uns", label: "Über uns", icon: HeartHandshake },
  { href: "/preise", label: "Preis", icon: BadgeEuro },
];

const signedInLinks = [
  { href: "/uebersicht", label: "Übersicht", icon: LayoutDashboard },
  { href: "/inserieren", label: "Inserieren", icon: Plus },
  { href: "/inserate", label: "Inserate", icon: ListChecks },
  { href: "/tierbetreuer", label: "Tierbetreuer", icon: HandHeart },
  { href: "/anfragen", label: "Anfragen", icon: MessageCircle },
];

type MobileMenuProps = {
  isSignedIn: boolean;
  unreadCount: number;
};

export function MobileMenu({ isSignedIn, unreadCount }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute right-4 top-3 z-50 lg:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="bg-[#262C36] text-white shadow-lg hover:bg-[#343C49] hover:text-white"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {open ? (
        <div className="fixed inset-x-0 top-16 z-50 border-b border-[#262C36]/10 bg-white px-4 py-4 shadow-xl shadow-[#262C36]/10">
          <nav className="mx-auto grid w-full max-w-6xl gap-2" aria-label="Mobile Navigation">
            {isSignedIn ? (
              <>
                {signedInLinks.map((item) => {
                  const Icon = item.icon;
                  const itemUnreadCount = item.href === "/anfragen" ? unreadCount : 0;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-12 items-center gap-3 rounded-md px-3 text-sm font-black text-[#262C36] hover:bg-[#F5FBF8]"
                    >
                      <Icon className="size-5 text-[#D97863]" aria-hidden="true" />
                      <span className="flex-1">{item.label}</span>
                      {itemUnreadCount > 0 ? (
                        <span className="rounded-full bg-[#F0917B] px-2 py-0.5 text-xs font-black text-[#262C36]">
                          {itemUnreadCount}
                        </span>
                      ) : null}
                    </Link>
                  );
                })}
                <div className="my-2 h-px bg-[#262C36]/10" />
                <form action={signOutAction}>
                  <button className="flex min-h-12 w-full items-center gap-3 rounded-md px-3 text-left text-sm font-black text-[#262C36] hover:bg-[#F5FBF8]">
                    <LogOut className="size-5 text-[#D97863]" aria-hidden="true" />
                    Abmelden
                  </button>
                </form>
              </>
            ) : (
              <>
                {publicLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-12 items-center gap-3 rounded-md px-3 text-sm font-black text-[#262C36] hover:bg-[#F5FBF8]"
                    >
                      <Icon className="size-5 text-[#D97863]" aria-hidden="true" />
                      {item.label}
                    </Link>
                  );
                })}

                <div className="my-2 h-px bg-[#262C36]/10" />
                <Link
                  href="/einloggen"
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center gap-3 rounded-md px-3 text-sm font-black text-[#262C36] hover:bg-[#F5FBF8]"
                >
                  <LogIn className="size-5 text-[#D97863]" aria-hidden="true" />
                  Login
                </Link>
                <Link
                  href="/registrieren"
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center gap-3 rounded-md bg-[#F0917B] px-3 text-sm font-black text-[#262C36] hover:bg-[#F5A18E]"
                >
                  <UserRoundPlus className="size-5" aria-hidden="true" />
                  Registrieren
                </Link>
              </>
            )}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
