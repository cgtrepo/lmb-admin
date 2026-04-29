import { ReactNode } from "react";

export interface DashboardMenuType {
  icon: string;
  href: string;
  path: string;
}

export interface DashboardUserType {
  lastName: string;
  firstName: string;
  avatar: string;
  isVerified: boolean;
}

export type PageHeaderProps = {
  title: string;
  showBack?: boolean;
  action?: ReactNode;
};

export type ModalProps = {
  name: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
};

export type Product = {
  id: number;
  name: string;
};

export type VideoCardProps = {
  title: string;
  image: string;
  href: string;
};

export type VideoItem = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
};

export type VideosPropsTab = {
  videos: VideoItem[];
};

export type ImageItems = {
  file: File;
  preview: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  status: "connected" | "disconnected";
  date: string;
};
