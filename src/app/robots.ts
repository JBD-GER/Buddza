import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/uebersicht", "/anfragen", "/inserieren/gesuch"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
