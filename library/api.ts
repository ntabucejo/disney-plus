import type { Logo, Media, Video } from "../types";

const TMDB_API_KEY = process.env.TMDB_API_KEY!;
const TMDB_API_URL = process.env.TMDB_API_URL!;

type Group = "popular" | "top-rated" | "now-playing";
type Time = "day" | "week";

const api = {
  get: {
    movies: {
      trending: async ({ time }: { time: Time }) => {
        const response = await fetch(
          `${TMDB_API_URL}/3/trending/movie/${time}?api_key=${TMDB_API_KEY}`
        );
        const { results } = await response.json();
        const movies = results.map((movie: any) => {
          return {
            id: movie.id,
            title: movie.title,
            isForAdult: movie.adult,
            image: {
              poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            },
            overview: movie.overview,
            releasedAt: movie.release_date,
            language: {
              original: movie.original_language,
            },
          };
        });
        return movies as Media[];
      },
      group: async ({ name, page }: { name: Group; page: number }) => {
        const group = name.split("-").join("_");
        const response = await fetch(
          `${TMDB_API_URL}/3/movie/${group}?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`
        );
        const { results } = await response.json();
        const movies = results.map((movie: any) => {
          return {
            id: movie.id,
            title: movie.title,
            isForAdult: movie.adult,
            image: {
              poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            },
            overview: movie.overview,
            releasedAt: movie.release_date,
            language: {
              original: movie.original_language,
            },
          };
        });
        return movies as Media[];
      },
    },
    movie: {
      video: async (movieId: string) => {
        const response = await fetch(
          `${TMDB_API_URL}/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`
        );
        const { results } = await response.json();
        const video = results.find((result: any) => result.type === "Trailer");
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
      logo: async (movieId: string) => {
        const response = await fetch(
          `${TMDB_API_URL}/3/movie/${movieId}/images?api_key=${TMDB_API_KEY}`
        );
        const { logos } = await response.json();
        const logo = logos[0];
        return {
          aspectRatio: logo.aspect_ratio,
          width: logo.width,
          height: logo.height,
          image: `https://image.tmdb.org/t/p/original/${logo.file_path}`,
        } as Logo;
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
        const movie = results[random];
        return {
          id: movie.id,
          title: movie.title,
          isForAdult: movie.adult,
          image: {
            poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
          },
          overview: movie.overview,
          releasedAt: movie.release_date,
          language: {
            original: movie.original_language,
          },
        } as Media;
      },
    },
  },
};

export default api;
