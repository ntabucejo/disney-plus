import type { Logo, Media, Video } from "../types";

const TMDB_API_KEY = process.env.TMDB_API_KEY!;
const TMDB_API_URL = process.env.TMDB_API_URL!;

type Group =
  | {
      name: "popular" | "top-rated" | "now-playing" | "upcoming";
      type: "movies";
      page: number;
    }
  | {
      name: "popular" | "top-rated" | "on-the-air" | "airing-today";
      type: "series";
      page: number;
    };

type Time = "day" | "week";
type Type = "movies" | "series" | "all" | string;

const api = {
  get: {
    medias: {
      similar: async ({ type, id }: { type: Type; id: string }) => {
        const response = await fetch(
          `${TMDB_API_URL}/3/${
            type === "movies" ? "movie" : "tv"
          }/${id}/similar?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
          {
            cache: "no-store",
          }
        );
        const { results } = await response.json();
        const medias = results
          .filter((media: any) => media.poster_path && media.backdrop_path)
          .map((media: any) => {
            return {
              id: media.id,
              title: media.title ? media.title : media.name,
              isForAdult: media.adult,
              type: type === "movies" ? "movies" : "series",
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
      trending: async ({ type, time }: { type: Type; time: Time }) => {
        const response = await fetch(
          `${TMDB_API_URL}/3/trending/${
            type === "movies" ? "movie" : "tv"
          }/${time}?api_key=${TMDB_API_KEY}`,
          {
            cache: "no-store",
          }
        );
        const { results } = await response.json();
        const medias = results
          .filter((media: any) => media.poster_path && media.backdrop_path)
          .map((media: any) => {
            return {
              id: media.id,
              title: media.title ? media.title : media.name,
              isForAdult: media.adult,
              type: type === "movies" ? "movies" : "series",
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
      group: async ({ name, type, page }: Group) => {
        const group = name.split("-").join("_");
        const response = await fetch(
          `${TMDB_API_URL}/3/${
            type === "movies" ? "movie" : "tv"
          }/${group}?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`,
          {
            cache: "no-store",
          }
        );
        const { results } = await response.json();
        const medias = results
          .filter((media: any) => media.poster_path && media.backdrop_path)
          .map((media: any) => {
            return {
              id: media.id,
              title: media.title ? media.title : media.name,
              isForAdult: media.adult,
              type: type === "movies" ? "movies" : "series",
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
      details: async ({ type, id }: { type: Type; id: string }) => {
        const response = await fetch(
          `${TMDB_API_URL}/3/${
            type === "movies" ? "movie" : "tv"
          }/${id}?api_key=${TMDB_API_KEY}&language=en-US`,
          {
            cache: "no-store",
          }
        );
        const media = await response.json();
        return {
          id: media.id,
          title: media.title ? media.title : media.name,
          isForAdult: media.adult,
          type: type,
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
        } as Media;
      },
      measure: async ({ type, id }: { type: Type; id: string }) => {
        const response = await fetch(
          `${TMDB_API_URL}/3/${
            type === "movies" ? "movie" : "tv"
          }/${id}?api_key=${TMDB_API_KEY}&language=en-US`,
          {
            cache: "no-store",
          }
        );
        const data = await response.json();
        return data.runtime ? data.runtime : data.number_of_seasons;
      },
      video: async ({ type, id }: { type: Type; id: string }) => {
        const response = await fetch(
          `${TMDB_API_URL}/3/${
            type === "movies" ? "movie" : "tv"
          }/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`,
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
      },
      logo: async ({ type, id }: { type: Type; id: string }) => {
        const response = await fetch(
          `${TMDB_API_URL}/3/${
            type === "movies" ? "movie" : "tv"
          }/${id}/images?api_key=${TMDB_API_KEY}`,
          {
            cache: "no-store",
          }
        );
        const { logos } = await response.json();
        const logo = logos.find((logo: any) => logo.iso_639_1 === "en");
        if (!logo) return null;
        return {
          aspectRatio: logo.aspect_ratio,
          width: logo.width,
          height: logo.height,
          image: logo.file_path,
        } as Logo;
      },
      spotlight: async ({ type }: { type: Type }) => {
        const response = await fetch(
          `${TMDB_API_URL}/3/trending/${
            type === "movies" ? "movie" : type === "series" ? "tv" : "all"
          }/day?api_key=${TMDB_API_KEY}`,
          {
            cache: "no-store",
          }
        );
        const { results } = await response.json();
        const medias = results.filter((media: any) => media.backdrop_path);
        const random = Math.floor(Math.random() * medias.length);
        const media = medias[random];
        return {
          id: media.id,
          title: media.title ? media.title : media.name,
          isForAdult: media.adult,
          type: media.media_type === "movie" ? "movies" : "series",
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
        } as Media;
      },
    },
  },
};

export default api;
