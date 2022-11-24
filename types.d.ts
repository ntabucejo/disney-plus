export type Movie = {
  id: string;
  title?: string;
  isForAdult?: boolean;
  overview?: string;
  image: {
    backdrop?: string;
    poster?: string;
    logo?: Logo;
  };
  releasedAt?: string;
  language?: {
    original?: string;
  };
};

export type Logo = {
  aspectRatio?: number;
  width?: number;
  height?: number;
  image?: string;
};
