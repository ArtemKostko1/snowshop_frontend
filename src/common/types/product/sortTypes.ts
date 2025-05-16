export type SortType =
  | "default"
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc"
  | "brand-asc"
  | "brand-desc";

export const sortOptions: { value: SortType; label: string }[] = [
  { value: "default", label: "По умолчанию" },
  { value: "name-asc", label: "Имя (А - Я)" },
  { value: "name-desc", label: "Имя (Я - А)" },
  { value: "price-asc", label: "Цена (возрастанию)" },
  { value: "price-desc", label: "Цена (убыванию)" },
  { value: "brand-asc", label: "Бренд (А - Я)" },
  { value: "brand-desc", label: "Бренд (Я - А)" },
];
