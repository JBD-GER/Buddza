import Link from "next/link";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptyListings() {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white px-5 py-10 text-center">
      <SearchX className="mx-auto size-9 text-slate-400" />
      <h3 className="mt-4 text-lg font-bold text-[#262C36]">Keine passenden Inserate</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
        Erweitere den Radius oder erstelle das erste Inserat in deiner Region.
      </p>
      <Button asChild className="mt-5">
        <Link href="/inserieren">Inserat erstellen</Link>
      </Button>
    </div>
  );
}
