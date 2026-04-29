import {
  DashboardMenuType,
  DashboardUserType,
  Product,
  User,
} from "../(types)/dashboard-type";

export const menu: DashboardMenuType[] = [
  {
    icon: "/dashboard-home-icone.svg",
    href: "/",
    path: "/dashboard/home",
  },
  {
    icon: "/search-category-icone.svg",
    href: "/dashboard/category",
    path: "/dashboard/category",
  },
  {
    icon: "/product-variant-icone.svg",
    href: "/dashboard/products",
    path: "/dashboard/products",
  },
  {
    icon: "/badge-promotion-outline-icone.svg",
    href: "/dashboard/promotions",
    path: "/dashboard/promotions",
  },
  {
    icon: "/serrure-icone.svg",
    href: "/dashboard/security",
    path: "/dashboard/security",
  },
  {
    icon: "/online-learning-icone.svg",
    href: "/dashboard/tutorial",
    path: "/dashboard/tutorial",
  },
];

export const userConnected: DashboardUserType = {
  lastName: "Allohan",
  firstName: "Christ",
  avatar: "/default-avatar.svg",
  isVerified: true,
};

export const productsMock: Product[] = [
  { id: 1, name: "Frigo" },
  { id: 2, name: "Chauffe Eau" },
  { id: 3, name: "Télévision" },
];

export const securityActionData = [
  {
    image: "/hugeicons_locked.svg",
    label: "Crée un nouveau mot de passe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo",
    link: "/dashboard/security/change-password",
  },
  {
    image: "/carbon_user-admin.svg",
    label: "Liste des Admins",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo",
    link: "/dashboard/security/admin-list",
  },
];

export const tutorialActionData = [
  {
    title: "AJOUT DE CATEGORIE",
    image: "/images/videos-card-image.png",
    href: "/dashboard/tutorial/how-to-add-a-category",
  },
  {
    title: "AJOUT DE PRODUIT",
    image: "/images/videos-card-image.png",
    href: "/dashboard/tutorial/how-to-add-product",
  },
  {
    title: "AJOUT DE PROMOTION",
    image: "/images/videos-card-image.png",
    href: "/dashboard/tutorial/how-to-add-a-promotion",
  },
  {
    title: "AJOUT DE ADMIN",
    image: "/images/videos-card-image.png",
    href: "/dashboard/tutorial/how-to-add-new-admin",
  },
];

export const users: User[] = [
  {
    id: 1,
    name: "Jose Marius",
    email: "mariusjose@gmail.com",
    status: "connected",
    date: "22/01/2025 à 10:33",
  },
  {
    id: 2,
    name: "Aldric BOKO",
    email: "aldricboko@gmail.com",
    status: "disconnected",
    date: "22/01/2025 à 10:33",
  },
  {
    id: 3,
    name: "Pacôme Housah",
    email: "pacomehousah@gmail.com",
    status: "connected",
    date: "22/01/2025 à 10:33",
  },
  {
    id: 4,
    name: "Simon Deny",
    email: "simondeny@gmail.com",
    status: "disconnected",
    date: "22/01/2025 à 10:33",
  },
];
