import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "80mb",
    },
  },
  async redirects() {
    return [
      { source: "/dashboard", destination: "/uebersicht", permanent: true },
      { source: "/listings/new/request", destination: "/inserieren/gesuch", permanent: true },
      { source: "/listings/new", destination: "/inserieren", permanent: true },
      { source: "/listings/:id", destination: "/inserate/:id", permanent: true },
      { source: "/listings", destination: "/inserate", permanent: true },
      { source: "/sitters/new", destination: "/tierbetreuer/neu", permanent: true },
      { source: "/sitters", destination: "/tierbetreuer", permanent: true },
      { source: "/chats/:chatId", destination: "/anfragen/:chatId", permanent: true },
      { source: "/chats", destination: "/anfragen", permanent: true },
      { source: "/login", destination: "/einloggen", permanent: true },
      { source: "/register", destination: "/registrieren", permanent: true },
      { source: "/forgot-password", destination: "/passwort-vergessen", permanent: true },
      { source: "/update-password", destination: "/passwort-aktualisieren", permanent: true },
      { source: "/about", destination: "/ueber-uns", permanent: true },
      { source: "/pricing", destination: "/preise", permanent: true },
      { source: "/auth/callback", destination: "/authentifizierung/rueckruf", permanent: false },
    ];
  },
};

export default nextConfig;
