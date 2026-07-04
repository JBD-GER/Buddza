"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import maplibregl, {
  type GeoJSONSource,
  type MapLayerMouseEvent,
  type Map as MapLibreMap,
  type StyleSpecification,
} from "maplibre-gl";
import type { FeatureCollection, Point } from "geojson";
import type { MapPoint } from "@/lib/types";

type ListingMapProps = {
  points: MapPoint[];
};

const germanyBounds: [[number, number], [number, number]] = [
  [5.7, 47.1],
  [15.2, 55.2],
];

const mapStyle: StyleSpecification = {
  version: 8,
  glyphs: "https://fonts.openmaptiles.org/{fontstack}/{range}.pbf",
  sources: {
    osm: {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "© OpenStreetMap contributors",
    },
  },
  layers: [
    {
      id: "osm",
      type: "raster",
      source: "osm",
      paint: {
        "raster-saturation": -0.45,
        "raster-contrast": -0.08,
        "raster-brightness-min": 0.12,
        "raster-brightness-max": 0.96,
      },
    },
  ],
};

type MapListingPreview = {
  id: string;
  title: string;
  category: string;
};

type GroupedMapPoint = {
  id: string;
  postalCode: string;
  city: string;
  latitude: number;
  longitude: number;
  count: number;
  listings: MapListingPreview[];
};

function groupPointsByPostalCode(points: MapPoint[]): GroupedMapPoint[] {
  const groups = new Map<string, GroupedMapPoint>();

  for (const point of points) {
    if (!Number.isFinite(point.longitude) || !Number.isFinite(point.latitude)) continue;

    const existing = groups.get(point.postal_code);
    const preview = {
      id: point.id,
      title: point.title,
      category: point.category_name,
    };

    if (existing) {
      existing.count += 1;
      existing.listings.push(preview);
      continue;
    }

    groups.set(point.postal_code, {
      id: point.postal_code,
      postalCode: point.postal_code,
      city: point.city,
      latitude: point.latitude,
      longitude: point.longitude,
      count: 1,
      listings: [preview],
    });
  }

  return [...groups.values()].sort((a, b) => b.count - a.count || a.postalCode.localeCompare(b.postalCode));
}

function getCategorySummary(group: GroupedMapPoint) {
  const categories = [...new Set(group.listings.map((listing) => listing.category).filter(Boolean))];
  if (!categories.length) return "Inserate";
  if (categories.length === 1) return categories[0];
  return `${categories.slice(0, 2).join(", ")}${categories.length > 2 ? " +" : ""}`;
}

function toGeoJson(groups: GroupedMapPoint[]): FeatureCollection<Point> {
  return {
    type: "FeatureCollection",
    features: groups.map((group) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [group.longitude, group.latitude],
      },
      properties: {
        id: group.id,
        city: group.city,
        postalCode: group.postalCode,
        count: group.count,
        category: getCategorySummary(group),
        listings: JSON.stringify(group.listings.slice(0, 5)),
      },
    })),
  };
}

export function ListingMap({ points }: ListingMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const [mapError, setMapError] = useState(false);
  const groupedPoints = useMemo(() => groupPointsByPostalCode(points), [points]);
  const geoJson = useMemo(() => toGeoJson(groupedPoints), [groupedPoints]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current || mapError) return;

    let map: MapLibreMap;

    try {
      map = new maplibregl.Map({
        container: containerRef.current,
        style: mapStyle,
        center: [10.4515, 51.1657],
        zoom: 4.7,
        minZoom: 4.2,
        maxZoom: 12,
        attributionControl: false,
        cooperativeGestures: true,
      });
    } catch (error) {
      console.warn("Map could not be initialized", error);
      const fallbackTimer = window.setTimeout(() => setMapError(true), 0);
      return () => window.clearTimeout(fallbackTimer);
    }

    mapRef.current = map;
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "bottom-right");
    map.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-left");

    map.once("load", () => {
      map.fitBounds(germanyBounds, {
        padding: { top: 38, bottom: 38, left: 26, right: 26 },
        duration: 0,
      });

      map.addSource("listing-points", {
        type: "geojson",
        data: geoJson,
      });

      map.addLayer({
        id: "listing-pulse",
        type: "circle",
        source: "listing-points",
        paint: {
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["get", "count"],
            1,
            14,
            5,
            24,
            20,
            36,
          ],
          "circle-color": "#F0917B",
          "circle-opacity": 0.16,
          "circle-stroke-color": "#F0917B",
          "circle-stroke-opacity": 0.26,
          "circle-stroke-width": 1,
        },
      });

      map.addLayer({
        id: "listing-dots",
        type: "circle",
        source: "listing-points",
        paint: {
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["get", "count"],
            1,
            7,
            5,
            13,
            20,
            18,
          ],
          "circle-color": "#F0917B",
          "circle-stroke-color": "#ffffff",
          "circle-stroke-width": 2,
        },
      });

      map.addLayer({
        id: "listing-count-labels",
        type: "symbol",
        source: "listing-points",
        filter: [">", ["get", "count"], 1],
        layout: {
          "text-field": ["to-string", ["get", "count"]],
          "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 4, 11, 9, 13],
          "text-allow-overlap": true,
        },
        paint: {
          "text-color": "#262C36",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1,
        },
      });

      const clickableLayers = ["listing-dots", "listing-count-labels"];

      clickableLayers.forEach((layerId) => {
        map.on("mouseenter", layerId, () => {
          map.getCanvas().style.cursor = "pointer";
        });

        map.on("mouseleave", layerId, () => {
          map.getCanvas().style.cursor = "";
        });
      });

      function openPopup(event: MapLayerMouseEvent) {
        const feature = event.features?.[0];
        const coordinates = (feature?.geometry as Point | undefined)?.coordinates;
        if (!feature?.properties || !coordinates) return;

        const count = Number(feature.properties.count ?? 0);
        const postalCode = String(feature.properties.postalCode ?? "");

        const wrapper = document.createElement("div");
        wrapper.className = "w-56 p-3 text-center";

        const meta = document.createElement("p");
        meta.className = "text-xs font-bold uppercase tracking-normal text-[#F0917B]";
        meta.textContent = postalCode;

        const title = document.createElement("p");
        title.className = "mt-1 text-xl font-black leading-snug text-[#262C36]";
        title.textContent = count === 1 ? "1 Inserat in dieser PLZ" : `${count} Inserate in dieser PLZ`;

        const city = document.createElement("p");
        city.className = "mt-1 text-xs text-[#262C36]/60";
        city.textContent = String(feature.properties.city ?? "");

        const footerLink = document.createElement("a");
        footerLink.className =
          "mt-3 inline-flex h-9 items-center justify-center rounded-md bg-[#F0917B] px-4 text-xs font-bold text-[#262C36] hover:bg-[#D97863]";
        footerLink.href = `/inserate?postalCode=${encodeURIComponent(postalCode)}&radius=5`;
        footerLink.textContent = "Inserate ansehen";

        wrapper.append(meta, title, city, footerLink);

        new maplibregl.Popup({ closeButton: false, offset: 16 })
          .setLngLat([coordinates[0], coordinates[1]])
          .setDOMContent(wrapper)
          .addTo(map);
      }

      clickableLayers.forEach((layerId) => {
        map.on("click", layerId, openPopup);
      });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [geoJson, mapError]);

  useEffect(() => {
    const source = mapRef.current?.getSource("listing-points") as GeoJSONSource | undefined;
    source?.setData(geoJson);
  }, [geoJson]);

  if (mapError) {
    return (
      <div className="relative overflow-hidden rounded-lg border border-[#262C36]/10 bg-white shadow-2xl shadow-[#262C36]/10">
        <div className="relative min-h-[470px] sm:min-h-[560px] lg:min-h-[640px]">
          <Image
            src="/images/germany-map-hero.png"
            alt="Deutschlandkarte"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[#F5FBF8]/84" aria-hidden="true" />
          <div className="relative grid min-h-[470px] content-center gap-4 p-5 sm:min-h-[560px] sm:p-7 lg:min-h-[640px]">
            <div>
              <p className="text-xs font-bold uppercase tracking-normal text-[#D97863]">
                Kartenansicht nicht verfügbar
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-normal text-[#262C36]">
                {points.length} aktive Inserate
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-[#262C36]/68">
                Dein Browser kann die interaktive Karte gerade nicht laden. Die Inserate
                bleiben trotzdem erreichbar.
              </p>
            </div>

            <div className="grid gap-2">
              {groupedPoints.slice(0, 4).map((group) => (
                <Link
                  key={group.id}
                  href={
                    group.count === 1
                      ? `/inserate/${group.listings[0]?.id}`
                      : `/inserate?postalCode=${group.postalCode}&radius=5`
                  }
                  className="rounded-md border border-[#262C36]/10 bg-white px-3 py-2 text-sm font-bold text-[#262C36] shadow-sm hover:border-[#F0917B]/45"
                >
                  {group.count === 1 ? group.listings[0]?.title : `${group.count} Inserate`}
                  <span className="mt-1 block text-xs text-[#262C36]/58">
                    {group.postalCode} {group.city}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-lg border border-[#262C36]/10 bg-white shadow-2xl shadow-[#262C36]/10">
      <div className="absolute left-4 top-4 z-10 rounded-md border border-[#262C36]/10 bg-white/92 px-3 py-2 shadow-sm backdrop-blur">
        <p className="text-xs font-bold uppercase tracking-normal text-[#262C36]/60">Live-Karte</p>
        <p className="text-sm font-black text-[#262C36]">
          {points.length} aktive Inserate · {groupedPoints.length} PLZ
        </p>
      </div>
      <div ref={containerRef} className="h-[470px] w-full sm:h-[560px] lg:h-[640px]" />
    </div>
  );
}
