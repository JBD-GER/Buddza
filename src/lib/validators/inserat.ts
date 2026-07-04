import { z } from "zod";

export const postalCodeSchema = z.string().regex(/^[0-9]{5}$/, "Bitte gib eine gültige PLZ ein.");

export const listingSchema = z.object({
  title: z.string().trim().min(4, "Mindestens 4 Zeichen.").max(90, "Maximal 90 Zeichen."),
  description: z
    .string()
    .trim()
    .min(20, "Die Beschreibung braucht mindestens 20 Zeichen.")
    .max(1200, "Maximal 1200 Zeichen."),
  categoryId: z.string().uuid("Bitte wähle eine Kategorie."),
  postalCode: postalCodeSchema,
  careLocation: z.enum(["owner_home", "sitter_home", "outdoor", "flexible"]),
  frequency: z.enum(["once", "daily", "weekly", "weekends", "flexible"]),
  durationValue: z.coerce.number().int().min(1).max(90),
  durationUnit: z.enum(["hours", "days"]),
  startsAt: z.string().optional(),
});
