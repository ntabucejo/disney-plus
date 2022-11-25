import type { Logo, Media, Video } from "../types";

const TMDB_API_KEY = process.env.TMDB_API_KEY!;
const TMDB_API_URL = process.env.TMDB_API_URL!;

type Group = "popular" | "top-rated" | "now-playing";
type Time = "day" | "week";
type Type = "movie";

const api = {
  get: {
    medias: {
      trending: async ({ type, time }: { type: Type; time: Time }) => {
        const response = await fetch(
          `${TMDB_API_URL}/3/trending/movie/${time}?api_key=${TMDB_API_KEY}`
        );
        const { results } = await response.json();
        const medias = results.map((media: any) => {
          return {
            id: media.id,
            title: media.title,
            isForAdult: media.adult,
            image: {
              poster: `https://image.tmdb.org/t/p/w500${media.poster_path}`,
              backdrop: `https://image.tmdb.org/t/p/w500${media.backdrop_path}`,
            },
            overview: media.overview,
            releasedAt: media.release_date,
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
          `${TMDB_API_URL}/3/movie/${group}?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`
        );
        const { results } = await response.json();
        const medias = results.map((media: any) => {
          return {
            id: media.id,
            title: media.title,
            isForAdult: media.adult,
            image: {
              poster: `https://image.tmdb.org/t/p/w500${media.poster_path}`,
              backdrop: `https://image.tmdb.org/t/p/w500${media.backdrop_path}`,
            },
            overview: media.overview,
            releasedAt: media.release_date,
            language: {
              original: media.original_language,
            },
          };
        });
        return medias as Media[];
      },
    },
    media: {
      video: async ({ type, id }: { type: Type; id: string }) => {
        if (type === "movie") {
          const response = await fetch(
            `${TMDB_API_URL}/3/movie/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`
          );
          const { results } = await response.json();
          const video = results.find((result: any) => {
            return result.type === "Trailer" || result.type === "Teaser";
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
            `${TMDB_API_URL}/3/movie/${id}/images?api_key=${TMDB_API_KEY}`
          );
          const { logos } = await response.json();
          const logo = logos[0];
          return {
            aspectRatio: logo.aspect_ratio,
            width: logo.width,
            height: logo.height,
            image: `https://image.tmdb.org/t/p/original/${logo.file_path}`,
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
        const media = results[random];
        return {
          id: media.id,
          title: media.title,
          isForAdult: media.adult,
          type: media.media_type,
          image: {
            poster: `https://image.tmdb.org/t/p/original${media.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/original${media.backdrop_path}`,
          },
          overview: media.overview,
          releasedAt: media.release_date,
          language: {
            original: media.original_language,
          },
        } as Media;
      },
    },
  },
};

export default api;
