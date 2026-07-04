export type MarketingAnimalIcon =
  | "dog"
  | "cat"
  | "rabbit"
  | "bird"
  | "fish"
  | "bubbles"
  | "turtle"
  | "waves"
  | "bug"
  | "shell"
  | "paw"
  | "footprints"
  | "warehouse"
  | "tractor"
  | "gem"
  | "trees"
  | "houseHeart"
  | "tentTree"
  | "circleHelp";

export type MarketingAnimalCategory = {
  slug: string;
  name: string;
  icon: MarketingAnimalIcon;
};

export const marketingAnimalCategories: MarketingAnimalCategory[] = [
  { slug: "hund", name: "Hund", icon: "dog" },
  { slug: "katze", name: "Katze", icon: "cat" },
  { slug: "kleintier", name: "Kleintier", icon: "rabbit" },
  { slug: "vogel", name: "Vogel", icon: "bird" },
  { slug: "fisch", name: "Fisch", icon: "fish" },
  { slug: "aquarium", name: "Aquarium", icon: "bubbles" },
  { slug: "reptil", name: "Reptil", icon: "turtle" },
  { slug: "amphibie", name: "Amphibie", icon: "waves" },
  { slug: "insekt", name: "Insekt", icon: "bug" },
  { slug: "wirbelloses", name: "Wirbelloses", icon: "shell" },
  { slug: "pferd", name: "Pferd", icon: "paw" },
  { slug: "pony", name: "Pony", icon: "footprints" },
  { slug: "hoftier", name: "Hoftier", icon: "warehouse" },
  { slug: "nutztier", name: "Nutztier", icon: "tractor" },
  { slug: "exotisches-tier", name: "Exotisches Tier", icon: "gem" },
  { slug: "wildtier", name: "Wildtier", icon: "trees" },
  { slug: "auffangstation", name: "Auffangstation", icon: "houseHeart" },
  { slug: "zoo-oder-parktier", name: "Zoo- oder Parktier", icon: "tentTree" },
  { slug: "sonstiges-tier", name: "Sonstiges Tier", icon: "circleHelp" },
];

export const marketingCareSignals = [
  "100% kostenlos in der ersten Phase",
  "Nur PLZ-Region statt genauer Adresse",
  "Kurz- und langfristige Betreuung",
];
