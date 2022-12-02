import Content from "../../../components/wrappers/content";
import api from "../../../library/api";
import type { Media } from "../../../types";
import Cover from "../../../components/sections/cover";
import Collection from "../../../components/sections/collection";

const Page = async ({ params: { company } }: any) => {
  let collections: {
    id: number;
    title: string;
    medias: Media[];
  }[] = [];

  switch (company) {
    case "marvel":
      collections.push({
        id: 1,
        title: "Avengers",
        medias: await api.get.medias.search({
          query: "avengers",
          page: 1,
        }),
      });
      collections.push({
        id: 2,
        title: "Iron Man",
        medias: await api.get.medias.search({
          query: "iron man",
          page: 1,
        }),
      });
      collections.push({
        id: 3,
        title: "Thor",
        medias: await api.get.medias.search({
          query: "thor",
          page: 1,
        }),
      });
      collections.push({
        id: 4,
        title: "Hulk",
        medias: await api.get.medias.search({
          query: "hulk",
          page: 1,
        }),
      });
      collections.push({
        id: 5,
        title: "Spider Man",
        medias: await api.get.medias.search({
          query: "spider man",
          page: 1,
        }),
      });
      break;
    case "pixar":
      collections.push({
        id: 1,
        title: "Featured",
        medias: await api.get.medias.search({
          query: "pixar",
          page: 1,
        }),
      });
      collections.push({
        id: 2,
        title: "Toy Story",
        medias: await api.get.medias.search({
          query: "toy story",
          page: 1,
        }),
      });
      collections.push({
        id: 3,
        title: "Cars",
        medias: await api.get.medias.search({
          query: "Cars",
          page: 1,
        }),
      });
      collections.push({
        id: 4,
        title: "The Incredibles",
        medias: await api.get.medias.search({
          query: "the incredibles",
          page: 1,
        }),
      });
      break;
    case "starwars":
      collections.push({
        id: 1,
        title: "Starwars",
        medias: await api.get.medias.search({
          query: "star wars",
          page: 1,
        }),
      });
      collections.push({
        id: 2,
        title: "Jedi",
        medias: await api.get.medias.search({
          query: "jedi",
          page: 1,
        }),
      });
      collections.push({
        id: 3,
        title: "Troopers",
        medias: await api.get.medias.search({
          query: "troopers",
          page: 1,
        }),
      });
      break;
    case "disney":
      collections.push({
        id: 1,
        title: "Featured",
        medias: await api.get.medias.search({
          query: "disney",
          page: 1,
        }),
      });
      collections.push({
        id: 2,
        title: "Despicable Me",
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
      });
      collections.push({
        id: 3,
        title: "More on Disney",
        medias: await api.get.medias.search({
          query: "despicable me",
          page: 1,
        }),
      });
      collections.push({
        id: 4,
        title: "Minions",
        medias: await api.get.medias.search({
          query: "Minions",
          page: 1,
        }),
      });
      collections.push({
        id: 5,
        title: "Shrek",
        medias: await api.get.medias.search({
          query: "shrek",
          page: 1,
        }),
      });
      break;
    case "national-geographic":
      collections.push({
        id: 1,
        title: "Our Planet Earth",
        medias: await api.get.medias.search({
          query: "Earth",
          page: 1,
        }),
      });
      collections.push({
        id: 2,
        title: "Space Exploration",
        medias: await api.get.medias.search({
          query: "space",
          page: 1,
        }),
      });
      collections.push({
        id: 3,
        title: "Documentary Series",
        medias: await api.get.medias.search({
          query: "documentary",
          page: 1,
        }),
      });
      collections.push({
        id: 4,
        title: "Outer Space",
        medias: await api.get.medias.search({
          query: "sun",
          page: 1,
        }),
      });
      break;
    case "star":
      collections.push({
        id: 1,
        title: "Shows",
        medias: await api.get.medias.search({
          query: "show",
          page: 1,
        }),
      });
      collections.push({
        id: 2,
        title: "Romantic",
        medias: await api.get.medias.search({
          query: "romantic",
          page: 1,
        }),
      });
      collections.push({
        id: 3,
        title: "Comedy",
        medias: await api.get.medias.search({
          query: "comedy",
          page: 1,
        }),
      });
      collections.push({
        id: 4,
        title: "Action",
        medias: await api.get.medias.search({
          query: "action",
          page: 1,
        }),
      });
      break;
  }

  return (
    <>
      <Cover company={company} />
      <Content variant="secondary">
        {collections.map((collection) => (
          <Collection.Landscape
            key={collection.id}
            title={collection.title}
            medias={collection.medias}
          />
        ))}
      </Content>
    </>
  );
};

export default Page;
