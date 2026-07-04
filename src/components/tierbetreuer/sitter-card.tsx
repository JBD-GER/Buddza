/* eslint-disable @next/next/no-img-element */
import { CalendarDays, MapPin, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatAvailability, formatHourlyRate } from "@/lib/tierbetreuer";
import type { SitterProfile } from "@/lib/types";

export function SitterCard({ sitter }: { sitter: SitterProfile }) {
  return (
    <Card className="grid h-full overflow-hidden border-[#262C36]/10 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        {sitter.profile_image_url ? (
          <img src={sitter.profile_image_url} alt="" className="size-full object-cover" />
        ) : (
          <div className="flex size-full items-center justify-center bg-[#F0917B]/15 text-sm font-bold text-[#262C36]">
            Buddza
          </div>
        )}
        <Badge className="absolute left-3 top-3">{formatHourlyRate(sitter.hourly_rate_cents)} / h</Badge>
      </div>

      <div className="grid gap-4 p-4">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-[#2F7A68]">
            {sitter.profile?.full_name || "Tierbetreuer"}
          </p>
          <h3 className="mt-1 line-clamp-2 text-lg font-black leading-tight text-[#262C36]">
            {sitter.headline}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#262C36]/68">{sitter.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {sitter.categories.map((category) => (
            <Badge key={category.id} variant="secondary">
              {category.name}
            </Badge>
          ))}
        </div>

        <div className="grid gap-2 text-sm text-[#262C36]/68">
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-[#D97863]" />
            {sitter.postal_code} {sitter.city ? `- ${sitter.city}` : ""}
            {sitter.distance_km !== null && sitter.distance_km !== undefined ? `, ${sitter.distance_km} km` : ""}
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4 text-[#D97863]" />
            {formatAvailability(sitter.availability)}
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-[#D97863]" />
            Bis {sitter.radius_km} km Umkreis
          </span>
        </div>
      </div>
    </Card>
  );
}
