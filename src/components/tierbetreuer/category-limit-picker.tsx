"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { PetCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

type CategoryLimitPickerProps = {
  categories: PetCategory[];
  defaultSelectedIds?: string[];
};

export function CategoryLimitPicker({ categories, defaultSelectedIds = [] }: CategoryLimitPickerProps) {
  const [selected, setSelected] = useState<string[]>(defaultSelectedIds.slice(0, 3));

  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const isSelected = selected.includes(category.id);
        const isDisabled = !isSelected && selected.length >= 3;

        return (
          <label
            key={category.id}
            className={cn(
              "flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-md border border-[#262C36]/12 bg-white px-3 text-sm font-bold text-[#262C36] transition-colors",
              isSelected && "border-[#2F7A68] bg-[#F5FBF8] text-[#235F51]",
              isDisabled && "cursor-not-allowed opacity-45",
            )}
          >
            <span className="truncate">{category.name}</span>
            <span
              className={cn(
                "flex size-5 shrink-0 items-center justify-center rounded-md border border-[#262C36]/18",
                isSelected && "border-[#2F7A68] bg-[#2F7A68] text-white",
              )}
            >
              {isSelected ? <Check className="size-3.5" /> : null}
            </span>
            <input
              type="checkbox"
              name="categoryIds"
              value={category.id}
              checked={isSelected}
              disabled={isDisabled}
              onChange={(event) => {
                setSelected((current) => {
                  if (event.target.checked) return [...current, category.id].slice(0, 3);
                  return current.filter((id) => id !== category.id);
                });
              }}
              className="sr-only"
            />
          </label>
        );
      })}
    </div>
  );
}
