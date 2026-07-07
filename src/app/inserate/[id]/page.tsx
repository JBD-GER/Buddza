/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import { CalendarClock, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { GoogleAdSenseUnit } from "@/components/ads/google-adsense";
import { AuthMessage } from "@/components/auth/auth-message";
import { ListingOwnerActions } from "@/components/inserate/listing-owner-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { startChatAction } from "@/app/inserate/actions";
import { getGoogleAdSenseSlot } from "@/lib/google-adsense";
import { careFrequencyLabels, careLocationLabels, durationUnitLabels } from "@/lib/labels";
import { getListingById } from "@/lib/inserate";
import { absoluteUrl, createNoIndexMetadata, createSeoMetadata, jsonLdScript, siteName, toAbsoluteUrl } from "@/lib/seo";
import { getUser } from "@/lib/supabase/server";

type ListingDetailPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
};

const listingStatusLabels = {
  active: "Aktiv",
  paused: "Pausiert",
  closed: "Gelöscht",
};

const getCachedListingById = cache(getListingById);

function truncateSeoDescription(text: string, maxLength = 150) {
  const normalized = text.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) return normalized;

  return `${normalized.slice(0, maxLength - 1).trim()}…`;
}

function getLocationLabel(listing: Awaited<ReturnType<typeof getListingById>>) {
  if (!listing) return "Deutschland";

  return listing.city ? `${listing.postal_code} ${listing.city}` : listing.postal_code;
}

export async function generateMetadata({ params }: ListingDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const listing = await getCachedListingById(id);

  if (!listing) {
    return createNoIndexMetadata("Inserat nicht gefunden");
  }

  if (listing.status !== "active") {
    return createNoIndexMetadata(listing.title);
  }

  const location = getLocationLabel(listing);
  const category = listing.category_name || "Tierbetreuung";

  return createSeoMetadata({
    title: listing.title,
    description: `${category} in ${location}: ${truncateSeoDescription(listing.description)}`,
    path: `/inserate/${listing.id}`,
    image: listing.main_image_url ?? undefined,
    imageAlt: `${listing.title} auf ${siteName}`,
    keywords: [category, "Betreuungsgesuch", "Tierbetreuung", location, siteName],
  });
}

export default async function ListingDetailPage({ params, searchParams }: ListingDetailPageProps) {
  const [{ id }, query, user] = await Promise.all([
    params,
    searchParams,
    getUser(),
  ]);
  const listing = await getCachedListingById(id);

  if (!listing) {
    notFound();
  }

  const isOwner = user?.id === listing.owner_id;
  const location = getLocationLabel(listing);
  const detailAdSlot = getGoogleAdSenseSlot("listingDetail");
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: listing.title,
      url: absoluteUrl(`/inserate/${listing.id}`),
      description: listing.description,
      image: toAbsoluteUrl(listing.main_image_url),
      datePublished: listing.created_at,
      isPartOf: {
        "@type": "WebSite",
        name: siteName,
        url: absoluteUrl("/"),
      },
      about: {
        "@type": "Service",
        name: listing.category_name || "Tierbetreuung",
        serviceType: "Tierbetreuung",
        areaServed: location,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inserate",
          item: absoluteUrl("/inserate"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: listing.title,
          item: absoluteUrl(`/inserate/${listing.id}`),
        },
      ],
    },
  ];

  if (!isOwner && listing.status !== "active") {
    notFound();
  }

  return (
    <main className="mx-auto grid w-full max-w-6xl flex-1 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(structuredData)} />
      <div className="space-y-4">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="aspect-[4/3] bg-slate-200">
            {listing.main_image_url ? (
              <img src={listing.main_image_url} alt="" className="size-full object-cover" />
            ) : (
              <div className="flex size-full items-center justify-center bg-[#F0917B]/15 font-bold text-[#262C36]">
                Buddza
              </div>
            )}
          </div>
          {listing.video_url ? (
            <div className="border-t border-slate-200 p-3">
              <video src={listing.video_url} controls className="w-full rounded-md bg-[#262C36]" />
            </div>
          ) : null}
        </div>
      </div>

      <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
        <Card>
          <CardContent className="space-y-5 p-5">
            <AuthMessage error={query.error} />
            <div className="flex flex-wrap gap-2">
              <Badge>{listing.category_name ?? "Tier"}</Badge>
              <Badge variant="secondary">{listingStatusLabels[listing.status]}</Badge>
            </div>
            <div>
              <h1 className="text-3xl font-black leading-tight tracking-normal text-[#262C36]">
                {listing.title}
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-600">{listing.description}</p>
            </div>

            <Separator />

            <div className="grid gap-3 text-sm text-slate-700">
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-[#F0917B]" />
                {listing.postal_code} {listing.city ? listing.city : ""}
              </span>
              <span className="flex items-center gap-2">
                <CalendarClock className="size-4 text-[#F0917B]" />
                {careFrequencyLabels[listing.frequency]} · {listing.duration_value}{" "}
                {durationUnitLabels[listing.duration_unit]} · {careLocationLabels[listing.care_location]}
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-[#F0917B]" />
                Keine Strasse sichtbar, nur PLZ-Region
              </span>
            </div>

            {isOwner ? (
              <div className="space-y-3">
                <Button asChild className="w-full" variant="secondary">
                  <Link href="/uebersicht">In der Übersicht ansehen</Link>
                </Button>
                <ListingOwnerActions listing={listing} />
              </div>
            ) : user ? (
              <form action={startChatAction}>
                <input type="hidden" name="listingId" value={listing.id} />
                <Button className="w-full">
                  <MessageCircle />
                  Anfrage starten
                </Button>
              </form>
            ) : (
              <Button asChild className="w-full">
                <Link href={`/einloggen?next=/inserate/${listing.id}`}>
                  <MessageCircle />
                  Für Anfrage einloggen
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
        {detailAdSlot ? (
          <GoogleAdSenseUnit
            client={detailAdSlot.client}
            slot={detailAdSlot.slot}
            variant="sidebar"
          />
        ) : null}
      </aside>
    </main>
  );
}
