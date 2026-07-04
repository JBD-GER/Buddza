import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import type { PetCategory } from "@/lib/types";

type SearchPanelProps = {
  categories: PetCategory[];
  defaults: {
    postalCode?: string;
    radius?: string;
    category?: string;
  };
  action?: string;
};

export function SearchPanel({ categories, defaults, action = "/inserate" }: SearchPanelProps) {
  return (
    <form action={action} className="grid gap-3 rounded-lg border border-[#262C36]/10 bg-white p-3 shadow-sm md:grid-cols-[1fr_150px_180px_auto] md:items-end">
      <div className="space-y-1.5">
        <Label htmlFor="postalCode">PLZ</Label>
        <Input
          id="postalCode"
          name="postalCode"
          inputMode="numeric"
          pattern="[0-9]{5}"
          placeholder="z. B. 10115"
          defaultValue={defaults.postalCode}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="radius">Radius</Label>
        <Select id="radius" name="radius" defaultValue={defaults.radius ?? "50"}>
          <option value="5">5 km</option>
          <option value="10">10 km</option>
          <option value="25">25 km</option>
          <option value="50">50 km</option>
          <option value="100">100 km</option>
          <option value="250">250 km</option>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="category">Tierart</Label>
        <Select id="category" name="category" defaultValue={defaults.category ?? ""}>
          <option value="">Alle Tierarten</option>
          {categories.map((category) => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </Select>
      </div>
      <Button className="h-11">
        <Search />
        Suchen
      </Button>
    </form>
  );
}
