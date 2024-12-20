export type BaseCardProperties = {
    id: string;
  };
  
  export type InfoCard = BaseCardProperties & {
    variant: 'info';
    imageUrl: string;
    imageAlt: string;
    title: string;
    ctaUrl: string;
  };
  
  export type VideoCard = BaseCardProperties & {
    variant: 'video';
    videoId: string;
  };
  
  export type CardItem = InfoCard | VideoCard;