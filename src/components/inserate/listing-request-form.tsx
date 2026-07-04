"use client";

import Link from "next/link";
import { useActionState, useMemo, useState } from "react";
import { Camera, Clock3, Info, PawPrint } from "lucide-react";
import { createListingAction } from "@/app/inserate/actions";
import { AuthMessage } from "@/components/auth/auth-message";
import { MediaDropzone } from "@/components/inserate/media-dropzone";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { SubmitButton } from "@/components/ui/submit-button";
import { Textarea } from "@/components/ui/textarea";
import {
  initialListingFormState,
  LISTING_DESCRIPTION_MAX_LENGTH,
  LISTING_DESCRIPTION_MIN_LENGTH,
  LISTING_TITLE_MAX_LENGTH,
  LISTING_TITLE_MIN_LENGTH,
} from "@/lib/listing-form-state";
import { cn } from "@/lib/utils";
import type { PetCategory } from "@/lib/types";

type ListingRequestFormProps = {
  categories: PetCategory[];
  initialError?: string;
};

export function ListingRequestForm({ categories, initialError }: ListingRequestFormProps) {
  const [state, formAction] = useActionState(createListingAction, {
    ...initialListingFormState,
    error: initialError,
  });
  const [descriptionLength, setDescriptionLength] = useState(state.values.description.trim().length);

  const missingDescriptionCharacters = Math.max(0, LISTING_DESCRIPTION_MIN_LENGTH - descriptionLength);
  const descriptionHelper = useMemo(() => {
    if (missingDescriptionCharacters > 0) {
      return `Noch ${missingDescriptionCharacters} Zeichen bis zur Mindestlänge.`;
    }

    return "Mindestlänge erreicht.";
  }, [missingDescriptionCharacters]);

  return (
    <Card className="overflow-hidden border-[#262C36]/10">
      <CardContent className="p-5 sm:p-6">
        <form action={formAction} className="space-y-8">
          <AuthMessage error={state.error} />

          <section className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#F0917B]/16 text-[#D97863]">
                <PawPrint className="size-5" />
              </span>
              <div>
                <h2 className="text-xl font-black text-[#262C36]">1. Tier und Bedarf</h2>
                <p className="mt-1 text-sm leading-6 text-[#262C36]/62">
                  Starte mit einem klaren Titel und beschreibe Besonderheiten, Routine und was dir wichtig ist.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-[#F0917B]/20 bg-[#FFF1ED] p-4 text-sm leading-6 text-[#262C36]/72">
              <div className="flex gap-2">
                <Info className="mt-0.5 size-4 shrink-0 text-[#D97863]" />
                Gute Titel nennen Tier, Aufgabe und Zeitraum, zum Beispiel: “Mittagsrunde für Bruno”.
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="title">Titel</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="z. B. Mittagsrunde für Bruno"
                  minLength={LISTING_TITLE_MIN_LENGTH}
                  maxLength={LISTING_TITLE_MAX_LENGTH}
                  defaultValue={state.values.title}
                  required
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <div className="flex items-end justify-between gap-3">
                  <Label htmlFor="description">Beschreibung</Label>
                  <span
                    className={cn(
                      "text-xs font-bold",
                      missingDescriptionCharacters > 0 ? "text-[#D97863]" : "text-[#2F7A68]",
                    )}
                  >
                    {descriptionLength}/{LISTING_DESCRIPTION_MIN_LENGTH} Zeichen
                  </span>
                </div>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Beschreibe Tier, Bedarf, Zeitraum, Gewohnheiten und Besonderheiten."
                  className="min-h-36"
                  minLength={LISTING_DESCRIPTION_MIN_LENGTH}
                  maxLength={LISTING_DESCRIPTION_MAX_LENGTH}
                  defaultValue={state.values.description}
                  onChange={(event) => setDescriptionLength(event.target.value.trim().length)}
                  required
                />
                <p
                  className={cn(
                    "text-xs font-semibold",
                    missingDescriptionCharacters > 0 ? "text-[#D97863]" : "text-[#2F7A68]",
                  )}
                >
                  {descriptionHelper}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="categoryId">Tierart</Label>
                <Select id="categoryId" name="categoryId" required defaultValue={state.values.categoryId}>
                  <option value="">Auswählen</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="postalCode">PLZ</Label>
                <Input
                  id="postalCode"
                  name="postalCode"
                  inputMode="numeric"
                  pattern="[0-9]{5}"
                  placeholder="10115"
                  defaultValue={state.values.postalCode}
                  required
                />
              </div>
            </div>
          </section>

          <section className="space-y-4 border-t border-[#262C36]/10 pt-7">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#2F7A68]/14 text-[#2F7A68]">
                <Clock3 className="size-5" />
              </span>
              <div>
                <h2 className="text-xl font-black text-[#262C36]">2. Ort und Ablauf</h2>
                <p className="mt-1 text-sm leading-6 text-[#262C36]/62">
                  Diese Angaben machen dein Gesuch filterbar und verhindern unnötige Rückfragen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="careLocation">Betreuungsort</Label>
                <Select id="careLocation" name="careLocation" required defaultValue={state.values.careLocation}>
                  <option value="owner_home">Beim Tierhalter</option>
                  <option value="sitter_home">Beim Betreuer</option>
                  <option value="outdoor">Draußen</option>
                  <option value="flexible">Flexibel</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="frequency">Häufigkeit</Label>
                <Select id="frequency" name="frequency" required defaultValue={state.values.frequency}>
                  <option value="once">Einmalig</option>
                  <option value="daily">Täglich</option>
                  <option value="weekly">Wöchentlich</option>
                  <option value="weekends">Am Wochenende</option>
                  <option value="flexible">Flexibel</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="durationValue">Dauer</Label>
                <Input
                  id="durationValue"
                  name="durationValue"
                  type="number"
                  min="1"
                  max="90"
                  defaultValue={state.values.durationValue}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="durationUnit">Einheit</Label>
                <Select id="durationUnit" name="durationUnit" required defaultValue={state.values.durationUnit}>
                  <option value="hours">Stunden</option>
                  <option value="days">Tage</option>
                </Select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="startsAt">Startdatum</Label>
                <Input id="startsAt" name="startsAt" type="date" defaultValue={state.values.startsAt} />
              </div>
            </div>
          </section>

          <section className="space-y-4 border-t border-[#262C36]/10 pt-7">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#8FCAD7]/24 text-[#225966]">
                <Camera className="size-5" />
              </span>
              <div>
                <h2 className="text-xl font-black text-[#262C36]">3. Bilder und Veröffentlichung</h2>
                <p className="mt-1 text-sm leading-6 text-[#262C36]/62">
                  Ein echtes Bild hilft Betreuern, dein Tier und die Situation besser einzuschätzen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <MediaDropzone
                name="mainImage"
                label="Hauptbild hochladen"
                accept="image/jpeg,image/png,image/webp"
                kind="image"
                maxSizeMb={10}
                required
              />
              <MediaDropzone name="video" label="Optionales Video" accept="video/mp4,video/webm" kind="video" maxSizeMb={50} />
            </div>

            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
              <Button asChild variant="secondary">
                <Link href="/inserieren">Zurück</Link>
              </Button>
              <SubmitButton>Gesuch veröffentlichen</SubmitButton>
            </div>
          </section>
        </form>
      </CardContent>
    </Card>
  );
}
