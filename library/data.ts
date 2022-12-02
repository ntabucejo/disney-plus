import shuffleMedias from "../helpers/shuffle-medias";
import type { Media } from "../types";
import api from "./api";
import cuid from "cuid";

type Page = "/home" | "/series" | "/movies";
type Data = { id: string; name: string; medias: Media[] };

const data = async (page: Page): Promise<Data[]> => {
  switch (page) {
    case "/home":
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
    case "/series": 
    return 
    default:
      return [];
  }
};

export default data;
