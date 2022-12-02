import shuffleMedias from "../helpers/shuffle-medias";
import type { Media } from "../types";
import api from "./api";
import cuid from "cuid";

type Page = "/home" | "/series" | "/movies" | "/originals";
type Data = { id: string; name: string; medias: Media[] };

const data = async (page: Page): Promise<Data[]> => {
  switch (page) {
    case "/home": {
      return [
        {
          id: cuid(),
          name: "Disney Originals",
          medias: await api.get.medias.search({
            query: "disney",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Popular Movies",
          medias: await api.get.medias.group({
            name: "popular",
            type: "movies",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Popular Series",
          medias: await api.get.medias.group({
            name: "popular",
            type: "series",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "New to Disney+",
          medias: shuffleMedias([
            ...(await api.get.medias.group({
              name: "now-playing",
              type: "movies",
              page: 1,
            })),
            ...(await api.get.medias.group({
              name: "now-playing",
              type: "movies",
              page: 1,
            })),
          ]),
        },
        {
          id: cuid(),
          name: "Featured Marvel",
          medias: shuffleMedias([
            ...(await api.get.medias.search({
              query: "iron man",
              page: 1,
            })),
            ...(await api.get.medias.search({
              query: "avengers",
              page: 1,
            })),
            ...(await api.get.medias.search({
              query: "spider man",
              page: 1,
            })),
          ]),
        },
        {
          id: cuid(),
          name: "Best of Pixar",
          medias: await api.get.medias.search({
            query: "pixar",
            page: 1,
          }),
        },
      ];
    }
    case "/series": {
      return [
        {
          id: cuid(),
          name: "Trending Series",
          medias: shuffleMedias([
            ...(await api.get.medias.trending({
              type: "series",
              time: "day",
            })),
            ...(await api.get.medias.trending({
              type: "series",
              time: "week",
            })),
          ]),
        },
        {
          id: cuid(),
          name: "Popular Series",
          medias: await api.get.medias.group({
            name: "popular",
            type: "series",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Top Rated Series",
          medias: await api.get.medias.group({
            name: "top-rated",
            type: "series",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Live Now",
          medias: await api.get.medias.group({
            name: "on-the-air",
            type: "series",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "New Episodes",
          medias: await api.get.medias.group({
            name: "airing-today",
            type: "series",
            page: 1,
          }),
        },
      ];
    }
    case "/movies": {
      return [
        {
          id: cuid(),
          name: "Trending Movies",
          medias: shuffleMedias([
            ...(await api.get.medias.trending({
              type: "movies",
              time: "day",
            })),
            ...(await api.get.medias.trending({
              type: "movies",
              time: "week",
            })),
          ]),
        },
        {
          id: cuid(),
          name: "Now Playing",
          medias: await api.get.medias.group({
            name: "now-playing",
            type: "movies",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Just Released",
          medias: await api.get.medias.group({
            name: "upcoming",
            type: "movies",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Top Rated Movies",
          medias: await api.get.medias.group({
            name: "top-rated",
            type: "movies",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Popular",
          medias: await api.get.medias.group({
            name: "popular",
            type: "movies",
            page: 1,
          }),
        },
      ];
    }
    case "/originals": {
      const ironManMedias = await api.get.medias.search({
        query: "iron man",
        page: 1,
      });
      const avengersMedias = await api.get.medias.search({
        query: "avengers",
        page: 1,
      });
      const spiderManMedias = await api.get.medias.search({
        query: "spider man",
        page: 1,
      });
      const pixarMedias = await api.get.medias.search({
        query: "pixar",
        page: 1,
      });
      const disneyMedias = await api.get.medias.search({
        query: "disney",
        page: 1,
      });
      const starwarsMedias = await api.get.medias.search({
        query: "star wars",
        page: 1,
      });
      const shrekMedias = await api.get.medias.search({
        query: "shrek",
        page: 1,
      });
      const minionsMedias = await api.get.medias.search({
        query: "minions",
        page: 1,
      });
      return [
        {
          id: cuid(),
          name: "Featured",
          medias: shuffleMedias([
            ...ironManMedias,
            ...avengersMedias,
            ...starwarsMedias,
            ...minionsMedias,
            ...spiderManMedias,
            ...shrekMedias,
            ...disneyMedias,
            ...pixarMedias,
          ]),
        },
        { id: cuid(), name: "Minions", medias: minionsMedias },
        { id: cuid(), name: "Avengers", medias: avengersMedias },
        { id: cuid(), name: "Starwars", medias: starwarsMedias },
        { id: cuid(), name: "Disney", medias: disneyMedias },
        { id: cuid(), name: "Pixar", medias: pixarMedias },
        { id: cuid(), name: "Shrek", medias: shrekMedias },
      ];
    }
    default:
      return [];
  }
};

export default data;
