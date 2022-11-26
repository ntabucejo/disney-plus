import type { Logo, Media, Video } from "../types";

const TMDB_API_KEY = process.env.TMDB_API_KEY!;
const TMDB_API_URL = process.env.TMDB_API_URL!;

type Group =
  | "popular"
  | "top-rated"
  | "now-playing"
  | "upcoming"
  | "on-the-air"
  | "airing-today";
type Time = "day" | "week";
type Type = "movie" | "series";

const api = {
  get: {
    medias: {
      trending: async ({ type, time }: { type: Type; time: Time }) => {
        const response = await fetch(
          `${TMDB_API_URL}/3/trending/${
            type === "movie" ? type : "tv"
          }/${time}?api_key=${TMDB_API_KEY}`,
          {
            cache: "no-store",
          }
        );
        const { results } = await response.json();
        const medias = results
          .filter((media: any) => media.poster_path)
          .map((media: any) => {
            return {
              id: media.id,
              title: media.title ? media.title : media.name,
              isForAdult: media.adult,
              image: {
                poster: media.poster_path,
                backdrop: media.backdrop_path,
              },
              overview: media.overview,
              releasedAt: media.release_date
                ? media.release_date
                : media.first_air_date,
              language: {
                original: media.original_language,
              },
            };
          });
        return medias as Media[];
      },
      group: async ({
        name,
        type,
        page,
      }: {
        name: Group;
        type: Type;
        page: number;
      }) => {
        const group = name.split("-").join("_");
        const response = await fetch(
          `${TMDB_API_URL}/3/${
            type === "movie" ? type : "tv"
          }/${group}?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`,
          {
            cache: "no-store",
          }
        );
        const { results } = await response.json();
        const medias = results
          .filter((media: any) => media.poster_path)
          .map((media: any) => {
            return {
              id: media.id,
              title: media.title ? media.title : media.name,
              isForAdult: media.adult,
              image: {
                poster: media.poster_path,
                backdrop: media.backdrop_path,
              },
              overview: media.overview,
              releasedAt: media.release_date
                ? media.release_date
                : media.first_air_date,
              language: {
                original: media.original_language,
              },
            };
          });
        return medias as Media[];
      },
    },
    media: {
      measure: async ({ type, id }: { type: Type; id: string }) => {
        const response = await fetch(
          `${TMDB_API_URL}/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`,
          {
            cache: "no-store",
          }
        );
        const data = await response.json();
        return data.runtime;
      },
      video: async ({ type, id }: { type: Type; id: string }) => {
        if (type === "movie") {
          const response = await fetch(
            `${TMDB_API_URL}/3/movie/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`,
            {
              cache: "no-store",
            }
          );
          const { results } = await response.json();
          const video = results.find((result: any) => {
            return (
              (result.type === "Trailer" || result.type === "Teaser") &&
              result.official
            );
          });
          if (!video) return null;
          return {
            id: video.id,
            name: video.name,
            key: video.key,
            site: video.site,
            size: video.size,
            type: video.type,
            isOfficial: video.official,
          } as Video;
        }
      },
      logo: async ({ type, id }: { type: Type; id: string }) => {
        if (type === "movie") {
          const response = await fetch(
            `${TMDB_API_URL}/3/movie/${id}/images?api_key=${TMDB_API_KEY}`,
            {
              cache: "no-store",
            }
          );
          const { logos } = await response.json();
          const logo = logos[0];
          if (!logo) return null;
          return {
            aspectRatio: logo.aspect_ratio,
            width: logo.width,
            height: logo.height,
            image: logo.file_path,
          } as Logo;
        }
      },
      spotlight: async () => {
        const response = await fetch(
          `${TMDB_API_URL}/3/trending/movie/day?api_key=${TMDB_API_KEY}`,
          {
            cache: "no-store",
          }
        );
        const { results } = await response.json();
        const random = Math.floor(Math.random() * results.length);
        const medias = results.filter((media: any) => media.backdrop_path);
        const media = medias[random];

        return {
          id: media.id,
          title: media.title,
          isForAdult: media.adult,
          type: media.media_type,
          image: {
            poster: media.poster_path,
            backdrop: media.backdrop_path,
          },
          overview: media.overview,
          releasedAt: media.release_date,
          language: {
            original: media.original_language,
          },
        } as Media;
        // }
      },
    },
  },
};

export default api;
