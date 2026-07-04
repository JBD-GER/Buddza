export type CategoryPage = {
  slug: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  intro: string;
};

export const categoryPages: CategoryPage[] = [
  {
    slug: "hundebetreuung",
    categorySlug: "hund",
    categoryName: "Hund",
    title: "Hundebetreuung",
    intro:
      "Hundebetreuung passt, wenn Gassi-Runden, Fütterung, Besuchsdienst oder Betreuung im Alltag klar abgesprochen werden sollen.",
  },
  {
    slug: "katzenbetreuung",
    categorySlug: "katze",
    categoryName: "Katze",
    title: "Katzenbetreuung",
    intro:
      "Katzenbetreuung hilft bei Fütterung, Wasser, Reinigung, kurzen Besuchen und ruhiger Gesellschaft in vertrauter Umgebung.",
  },
  {
    slug: "kleintierbetreuung",
    categorySlug: "kleintier",
    categoryName: "Kleintier",
    title: "Kleintierbetreuung",
    intro:
      "Kleintierbetreuung ist sinnvoll für Kaninchen, Meerschweinchen und andere kleine Tiere, wenn Routinen zuverlässig eingehalten werden sollen.",
  },
  {
    slug: "vogelbetreuung",
    categorySlug: "vogel",
    categoryName: "Vogel",
    title: "Vogelbetreuung",
    intro:
      "Vogelbetreuung braucht ruhige Abläufe, sauberes Wasser, Fütterung und einen sorgfältigen Blick auf Käfig, Voliere und Verhalten.",
  },
  {
    slug: "fischbetreuung",
    categorySlug: "fisch",
    categoryName: "Fisch",
    title: "Fischbetreuung",
    intro:
      "Fischbetreuung dreht sich um Fütterung, Kontrolle und klare Hinweise, damit Becken und Tiere während Abwesenheiten stabil bleiben.",
  },
  {
    slug: "aquariumbetreuung",
    categorySlug: "aquarium",
    categoryName: "Aquarium",
    title: "Aquariumbetreuung",
    intro:
      "Aquariumbetreuung verbindet Tierbetreuung mit Blick auf Technik, Fütterung, Wasserwerte und sichtbare Veränderungen im Becken.",
  },
  {
    slug: "reptilienbetreuung",
    categorySlug: "reptil",
    categoryName: "Reptil",
    title: "Reptilienbetreuung",
    intro:
      "Reptilienbetreuung braucht genaue Absprachen zu Temperatur, Licht, Futter, Terrarium und Sicherheitsregeln.",
  },
  {
    slug: "amphibienbetreuung",
    categorySlug: "amphibie",
    categoryName: "Amphibie",
    title: "Amphibienbetreuung",
    intro:
      "Amphibienbetreuung ist besonders genau: Feuchtigkeit, Temperatur, Fütterung und Terrarium sollten klar dokumentiert sein.",
  },
  {
    slug: "insektenbetreuung",
    categorySlug: "insekt",
    categoryName: "Insekt",
    title: "Insektenbetreuung",
    intro:
      "Insektenbetreuung passt für Terrarien, Fütterung und Kontrolle, wenn kleine Details wichtig sind und regelmäßig geprüft werden müssen.",
  },
  {
    slug: "betreuung-fuer-wirbellose",
    categorySlug: "wirbelloses",
    categoryName: "Wirbelloses",
    title: "Betreuung für Wirbellose",
    intro:
      "Betreuung für Wirbellose braucht präzise Hinweise zu Futter, Klima, Substrat und sicherem Umgang mit dem jeweiligen Tier.",
  },
  {
    slug: "reitbeteiligung-pferdebetreuung",
    categorySlug: "pferd",
    categoryName: "Pferd",
    title: "Reitbeteiligung und Pferdebetreuung",
    intro:
      "Für Pferde geht es oft um Reitbeteiligung, Stallhilfe, Füttern, Bewegen oder zuverlässige Unterstützung rund um Versorgung und Alltag.",
  },
  {
    slug: "ponybetreuung",
    categorySlug: "pony",
    categoryName: "Pony",
    title: "Ponybetreuung",
    intro:
      "Ponybetreuung kann Versorgung, Bewegung, Stallroutine und Unterstützung für Halter umfassen, wenn Verlässlichkeit zählt.",
  },
  {
    slug: "hoftierbetreuung",
    categorySlug: "hoftier",
    categoryName: "Hoftier",
    title: "Hoftierbetreuung",
    intro:
      "Hoftierbetreuung hilft bei Fütterung, Kontrolle und täglichen Abläufen, wenn mehrere Tiere und feste Routinen zusammenkommen.",
  },
  {
    slug: "nutztierbetreuung",
    categorySlug: "nutztier",
    categoryName: "Nutztier",
    title: "Nutztierbetreuung",
    intro:
      "Nutztierbetreuung braucht klare Aufgaben, feste Zeiten und Menschen, die Verantwortung für Versorgung und Kontrolle übernehmen.",
  },
  {
    slug: "betreuung-exotische-tiere",
    categorySlug: "exotisches-tier",
    categoryName: "Exotisches Tier",
    title: "Betreuung für exotische Tiere",
    intro:
      "Exotische Tiere brauchen oft spezielle Haltungsbedingungen. Gute Betreuung beginnt hier mit sehr genauen Angaben.",
  },
  {
    slug: "wildtierbetreuung",
    categorySlug: "wildtier",
    categoryName: "Wildtier",
    title: "Wildtierbetreuung",
    intro:
      "Wildtierbetreuung ist sensibel und sollte nur mit passenden Kenntnissen, rechtlichem Rahmen und klaren Zuständigkeiten erfolgen.",
  },
  {
    slug: "auffangstation-tierbetreuung",
    categorySlug: "auffangstation",
    categoryName: "Auffangstation",
    title: "Tierbetreuung für Auffangstationen",
    intro:
      "Auffangstationen brauchen oft Hilfe bei Versorgung, Reinigung, Transport, Dokumentation oder regelmäßigen Routinen.",
  },
  {
    slug: "zoo-parktierbetreuung",
    categorySlug: "zoo-oder-parktier",
    categoryName: "Zoo- oder Parktier",
    title: "Zoo- und Parktierbetreuung",
    intro:
      "Zoo- und Parktierbetreuung bedeutet strukturierte Unterstützung für Einrichtungen, Teams und Tiere mit festen Abläufen.",
  },
  {
    slug: "tierbetreuung-sonstige-tiere",
    categorySlug: "sonstiges-tier",
    categoryName: "Sonstiges Tier",
    title: "Tierbetreuung für sonstige Tiere",
    intro:
      "Wenn keine Kategorie perfekt passt, hilft eine klare Beschreibung von Tier, Haltung, Aufgabe und gewünschtem Ablauf.",
  },
];

export function getCategoryPage(slug: string) {
  return categoryPages.find((page) => page.slug === slug) ?? null;
}
