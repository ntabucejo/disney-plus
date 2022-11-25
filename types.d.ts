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
  video?: Video;
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

export type Video = {
  id: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  isOfficial: boolean;
};
