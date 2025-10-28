import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utilidad para combinar clases de Tailwind y clases condicionales
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
