import Link from "next/link";
import {
  Bird,
  Bubbles,
  Bug,
  Cat,
  CircleHelp,
  Dog,
  Fish,
  Footprints,
  Gem,
  HouseHeart,
  PawPrint,
  Rabbit,
  Shell,
  TentTree,
  Tractor,
  Trees,
  Turtle,
  Warehouse,
  Waves,
  type LucideIcon,
} from "lucide-react";

import {
  marketingAnimalCategories,
  type MarketingAnimalCategory,
} from "@/lib/marketing";
import { cn } from "@/lib/utils";

const animalIcons: Record<MarketingAnimalCategory["icon"], LucideIcon> = {
  dog: Dog,
  cat: Cat,
  rabbit: Rabbit,
  bird: Bird,
  fish: Fish,
  bubbles: Bubbles,
  turtle: Turtle,
  waves: Waves,
  bug: Bug,
  shell: Shell,
  paw: PawPrint,
  footprints: Footprints,
  warehouse: Warehouse,
  tractor: Tractor,
  gem: Gem,
  trees: Trees,
  houseHeart: HouseHeart,
  tentTree: TentTree,
  circleHelp: CircleHelp,
};

type AnimalCareCategoriesProps = {
  className?: string;
  categories?: MarketingAnimalCategory[];
};

export function AnimalCareCategories({
  className,
  categories = marketingAnimalCategories,
}: AnimalCareCategoriesProps) {
  return (
    <section
      id="kategorien"
      aria-labelledby="animal-care-categories-title"
      className={cn("bg-[#F5FBF8] py-9 text-[#262C36] sm:py-12", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#2F7A68]">
              Kategorien
            </p>
            <h2
              id="animal-care-categories-title"
              className="mt-1 text-2xl font-black leading-tight tracking-normal text-[#262C36] sm:text-3xl"
            >
              Tierarten
            </h2>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = animalIcons[category.icon];

            return (
              <Link
                key={category.slug}
                href={`/inserate?category=${category.slug}`}
                className="group flex min-h-16 items-center gap-2 rounded-md border border-[#262C36]/10 bg-white p-2 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#F0917B]/45 hover:bg-[#FFF1ED]"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#F0917B]/12 text-[#D97863] transition duration-200 group-hover:bg-[#F0917B] group-hover:text-white">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <h3 className="text-xs font-black leading-tight tracking-normal text-[#262C36] sm:text-sm">
                  {category.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
