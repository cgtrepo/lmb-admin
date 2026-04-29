import { Country } from "../(types)/home-data-type";

export const quickActionsData = [
  {
    image: "/search-category-icone.svg",
    label: "Catégorie",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo",
    link: "/dashboard/category",
  },
  {
    image: "/product-variant-icone.svg",
    label: "Produit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo",
    link: "/dashboard/products",
  },
  {
    image: "/badge-promotion-outline-icone.svg",
    label: "Promotion",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo",
    link: "/dashboard/promotions",
  },
  {
    image: "/serrure-icone.svg",
    label: "Sécurité",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo",
    link: "/dashboard/security",
  },
  {
    image: "/online-learning-icone.svg",
    label: "Tutoriel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo",
    link: "/dashboard/tutorial",
  },
];

export const countries: Country[] = [
  { code: "US", name: "Eng (US)", flag: "https://flagcdn.com/w40/us.png" },
  { code: "FR", name: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "BJ", name: "Français (BJ)", flag: "https://flagcdn.com/w40/bj.png" },
];
