export type BaseCardProperties = {
  id: string;
  variant: "info" | "video";
};

export type InfoCard = BaseCardProperties & {
  variant: "info";
  imageUrl: string;
  imageAlt: string;
  title: string;
  ctaUrl: string;
  isExternal?: boolean;
};

export type VideoCard = BaseCardProperties & {
  variant: "video";
  videoId: string;
};

export type CardItem = InfoCard | VideoCard;
