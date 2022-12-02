import shuffleMedias from "../helpers/shuffle-medias";
import type { Media } from "../types";
import api from "./api";
import cuid from "cuid";

type Page =
  | "home"
  | "series"
  | "movies"
  | "originals"
  | "marvel"
  | "pixar"
  | "national-geographic"
  | "starwars"
  | "star"
  | "disney";
type Data = { id: string; name: string; medias: Media[] };

const data = async (page: Page): Promise<Data[]> => {
  switch (page) {
    case "home": {
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
    case "series": {
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
    case "movies": {
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
    case "originals": {
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
    case "marvel": {
      return [
        {
          id: cuid(),
          name: "Avengers",
          medias: await api.get.medias.search({
            query: "avengers",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Iron Man",
          medias: await api.get.medias.search({
            query: "iron man",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Thor",
          medias: await api.get.medias.search({
            query: "thor",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Hulk",
          medias: await api.get.medias.search({
            query: "hulk",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Spider Man",
          medias: await api.get.medias.search({
            query: "spider man",
            page: 1,
          }),
        },
      ];
    }
    case "pixar": {
      return [
        {
          id: cuid(),
          name: "Featured",
          medias: await api.get.medias.search({
            query: "pixar",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Toy Story",
          medias: await api.get.medias.search({
            query: "toy story",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Cars",
          medias: await api.get.medias.search({
            query: "Cars",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "The Incredibles",
          medias: await api.get.medias.search({
            query: "the incredibles",
            page: 1,
          }),
        },
      ];
    }
    case "starwars": {
      return [
        {
          id: cuid(),
          name: "Starwars",
          medias: await api.get.medias.search({
            query: "star wars",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Jedi",
          medias: await api.get.medias.search({
            query: "jedi",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Troopers",
          medias: await api.get.medias.search({
            query: "troopers",
            page: 1,
          }),
        },
      ];
    }
    case "disney": {
      return [
        {
          id: cuid(),
          name: "Featured",
          medias: await api.get.medias.search({
            query: "disney",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Despicable Me",
          medias: [
            ...(await api.get.medias.search({
              query: "despicable me",
              page: 1,
            })),
            ...(await api.get.medias.search({
              query: "shrek",
              page: 1,
            })),
          ],
        },
        {
          id: cuid(),
          name: "More on Disney",
          medias: await api.get.medias.search({
            query: "despicable me",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Minions",
          medias: await api.get.medias.search({
            query: "Minions",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Shrek",
          medias: await api.get.medias.search({
            query: "shrek",
            page: 1,
          }),
        },
      ];
    }
    case "national-geographic": {
      return [
        {
          id: cuid(),
          name: "Our Planet Earth",
          medias: await api.get.medias.search({
            query: "Earth",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Space Exploration",
          medias: await api.get.medias.search({
            query: "space",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Documentary Series",
          medias: await api.get.medias.search({
            query: "documentary",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Outer Space",
          medias: await api.get.medias.search({
            query: "sun",
            page: 1,
          }),
        },
      ];
    }
    case "star": {
      return [
        {
          id: cuid(),
          name: "Shows",
          medias: await api.get.medias.search({
            query: "show",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Romantic",
          medias: await api.get.medias.search({
            query: "romantic",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Comedy",
          medias: await api.get.medias.search({
            query: "comedy",
            page: 1,
          }),
        },
        {
          id: cuid(),
          name: "Action",
          medias: await api.get.medias.search({
            query: "action",
            page: 1,
          }),
        },
      ];
    }
    default:
      return [];
  }
};

export default data;
