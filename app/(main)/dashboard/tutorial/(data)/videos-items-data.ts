type VideoItem = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
};

export const videosMedia: VideoItem[] = [
  {
    id: "1",
    title: "Présentation produit",
    url: "/videos/Elton-John-Sacrifice.mp4",
    thumbnail: "/images/Elton-John-thumbs.PNG",
  },
  {
    id: "2",
    title: "Comment ajouter une catégorie",
    url: "/videos/Kery-James Je-voulais-faire-un-Film.mp4",
    thumbnail: "/images/KJames-thumbs.PNG",
  },
  {
    id: "3",
    title: "Guide admin",
    url: "/videos/Elton-John-Sacrifice.mp4",
    thumbnail: "/images/Elton-John-thumbs.PNG",
  },
  {
    id: "4",
    title: "Tutoriel avancé",
    url: "/videos/Kery-James Je-voulais-faire-un-Film.mp4",
    thumbnail: "/images/KJames-thumbs.PNG",
  },
];
