import type { CareFrequency, CareLocation, DurationUnit } from "@/lib/types";

export const careLocationLabels: Record<CareLocation, string> = {
  owner_home: "Beim Tierhalter",
  sitter_home: "Beim Betreuer",
  outdoor: "Draußen",
  flexible: "Flexibel",
};

export const careFrequencyLabels: Record<CareFrequency, string> = {
  once: "Einmalig",
  daily: "Täglich",
  weekly: "Wöchentlich",
  weekends: "Am Wochenende",
  flexible: "Flexibel",
};

export const durationUnitLabels: Record<DurationUnit, string> = {
  hours: "Stunden",
  days: "Tage",
};
