import { z } from "zod";
import { postalCodeSchema } from "@/lib/validators/inserat";

export const sitterProfileSchema = z.object({
  headline: z.string().trim().min(5, "Mindestens 5 Zeichen.").max(90, "Maximal 90 Zeichen."),
  description: z
    .string()
    .trim()
    .min(40, "Beschreibe kurz Erfahrung, Ablauf und Grenzen deiner Betreuung.")
    .max(1600, "Maximal 1600 Zeichen."),
  postalCode: postalCodeSchema,
  radiusKm: z.coerce.number().int().min(1).max(250),
  hourlyRate: z.coerce.number().min(0).max(500),
  categoryIds: z.array(z.string().uuid()).min(1, "Wähle mindestens eine Kategorie.").max(3, "Maximal 3 Kategorien."),
  availability: z
    .array(z.enum(["1", "2", "3", "4", "5", "6", "7"]))
    .min(1, "Wähle mindestens einen Tag."),
});
