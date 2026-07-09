"use client";

import type { ButtonHTMLAttributes } from "react";
import { OPEN_CONSENT_SETTINGS_EVENT_NAME } from "@/lib/consent";
import { cn } from "@/lib/utils";

type CookieSettingsButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

declare global {
  interface Window {
    buddzaOpenCookieSettings?: () => void;
  }
}

export function CookieSettingsButton({
  className,
  children = "Cookie-Einstellungen",
  type = "button",
  onClick,
  ...props
}: CookieSettingsButtonProps) {
  return (
    <button
      type={type}
      className={cn("text-left font-black text-[#F0917B] underline-offset-4 hover:underline", className)}
      onClick={(event) => {
        onClick?.(event);
        if (window.buddzaOpenCookieSettings) {
          window.buddzaOpenCookieSettings();
        } else {
          window.dispatchEvent(new Event(OPEN_CONSENT_SETTINGS_EVENT_NAME));
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
