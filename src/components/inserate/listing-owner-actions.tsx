"use client";

import { Pause, Play, Trash2 } from "lucide-react";
import {
  activateListingAction,
  deleteListingAction,
  pauseListingAction,
} from "@/app/inserate/actions";
import { Button } from "@/components/ui/button";
import type { Listing } from "@/lib/types";

type ListingOwnerActionsProps = {
  listing: Pick<Listing, "id" | "status" | "title">;
};

export function ListingOwnerActions({ listing }: ListingOwnerActionsProps) {
  const isActive = listing.status === "active";

  if (listing.status === "closed") {
    return (
      <div className="rounded-lg border border-[#262C36]/10 bg-[#F5FBF8] p-3 text-sm font-semibold leading-6 text-[#262C36]/70">
        Dieses Inserat wurde gelöscht. Es ist öffentlich nicht mehr sichtbar; bestehende Chats bleiben erhalten.
      </div>
    );
  }

  return (
    <div className="grid gap-2 rounded-lg border border-[#262C36]/10 bg-white p-3 sm:grid-cols-2">
      <form action={isActive ? pauseListingAction : activateListingAction}>
        <input type="hidden" name="listingId" value={listing.id} />
        <Button type="submit" variant="secondary" size="sm" className="w-full">
          {isActive ? <Pause /> : <Play />}
          {isActive ? "Pausieren" : "Aktivieren"}
        </Button>
      </form>

      <form
        action={deleteListingAction}
        onSubmit={(event) => {
          if (!window.confirm(`Inserat "${listing.title}" wirklich komplett löschen?`)) {
            event.preventDefault();
          }
        }}
      >
        <input type="hidden" name="listingId" value={listing.id} />
        <Button type="submit" variant="destructive" size="sm" className="w-full">
          <Trash2 />
          Löschen
        </Button>
      </form>
    </div>
  );
}
