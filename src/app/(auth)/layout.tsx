import { createNoIndexMetadata } from "@/lib/seo";

export const metadata = createNoIndexMetadata("Buddza Konto");

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
