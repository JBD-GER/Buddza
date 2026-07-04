/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CalendarClock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { careFrequencyLabels, careLocationLabels, durationUnitLabels } from "@/lib/labels";
import type { Listing } from "@/lib/types";

const listingStatusLabels: Record<Listing["status"], string> = {
  active: "Aktiv",
  paused: "Pausiert",
  closed: "Gelöscht",
};

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link href={`/inserate/${listing.id}`} className="group block h-full">
      <Card className="grid h-full overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
          {listing.main_image_url ? (
            <img
              src={listing.main_image_url}
              alt=""
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex size-full items-center justify-center bg-[#F0917B]/15 text-sm font-semibold text-[#262C36]">
              Buddza
            </div>
          )}
          {listing.status !== "active" ? (
            <div className="absolute inset-0 bg-[#262C36]/38" />
          ) : null}
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <Badge>{listing.category_name ?? "Tier"}</Badge>
            {listing.status !== "active" ? (
              <Badge variant="amber">{listingStatusLabels[listing.status]}</Badge>
            ) : null}
          </div>
        </div>
        <div className="space-y-3 p-4">
          <div>
            <h3 className="line-clamp-2 text-base font-bold leading-snug text-[#262C36]">
              {listing.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-600">{listing.description}</p>
          </div>
          <div className="grid gap-2 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-[#F0917B]" />
              {listing.postal_code} {listing.city ? `- ${listing.city}` : ""}
              {listing.distance_km !== null && listing.distance_km !== undefined
                ? `, ${listing.distance_km} km`
                : ""}
            </span>
            <span className="flex items-center gap-2">
              <CalendarClock className="size-4 text-[#F0917B]" />
              {careFrequencyLabels[listing.frequency]} · {listing.duration_value}{" "}
              {durationUnitLabels[listing.duration_unit]} · {careLocationLabels[listing.care_location]}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
