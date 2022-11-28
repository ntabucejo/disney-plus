import Content from "../../../components/wrappers/content";
import Explore from "../../../components/sections/explore";
import api from "../../../library/api";
import Collection from "../../../components/sections/explore/collection";
import type { Media } from "../../../types";
import Cover from "../../../components/sections/cover";

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
        }),
      });
      collections.push({
        id: 2,
        title: "Iron Man",
        medias: await api.get.medias.search({
          query: "iron man",
        }),
      });
      collections.push({
        id: 3,
        title: "Thor",
        medias: await api.get.medias.search({
          query: "thor",
        }),
      });
      collections.push({
        id: 4,
        title: "Hulk",
        medias: await api.get.medias.search({
          query: "hulk",
        }),
      });
      collections.push({
        id: 5,
        title: "Spider Man",
        medias: await api.get.medias.search({
          query: "spider man",
        }),
      });
      break;
    case "pixar":
      collections.push({
        id: 1,
        title: "Featured",
        medias: await api.get.medias.search({
          query: "pixar",
        }),
      });
      collections.push({
        id: 2,
        title: "Toy Story",
        medias: await api.get.medias.search({
          query: "toy story",
        }),
      });
      collections.push({
        id: 3,
        title: "Cars",
        medias: await api.get.medias.search({
          query: "Cars",
        }),
      });
      collections.push({
        id: 4,
        title: "The Incredibles",
        medias: await api.get.medias.search({
          query: "the incredibles",
        }),
      });
      break;
    case "starwars":
      collections.push({
        id: 1,
        title: "Starwars",
        medias: await api.get.medias.search({
          query: "star wars",
        }),
      });
      collections.push({
        id: 2,
        title: "Jedi",
        medias: await api.get.medias.search({
          query: "jedi",
        }),
      });
      collections.push({
        id: 3,
        title: "Troopers",
        medias: await api.get.medias.search({
          query: "troopers",
        }),
      });
      break;
    case "disney":
      collections.push({
        id: 1,
        title: "Featured",
        medias: await api.get.medias.search({
          query: "disney",
        }),
      });
      collections.push({
        id: 2,
        title: "Despicable Me",
        medias: [
          ...(await api.get.medias.search({
            query: "despicable me",
          })),
          ...(await api.get.medias.search({
            query: "shrek",
          })),
        ],
      });
      collections.push({
        id: 3,
        title: "More on Disney",
        medias: await api.get.medias.search({
          query: "despicable me",
        }),
      });
      collections.push({
        id: 4,
        title: "Minions",
        medias: await api.get.medias.search({
          query: "Minions",
        }),
      });
      collections.push({
        id: 5,
        title: "Shrek",
        medias: await api.get.medias.search({
          query: "shrek",
        }),
      });
      break;
    case "national-geographic":
      collections.push({
        id: 1,
        title: "Our Planet Earth",
        medias: await api.get.medias.search({
          query: "Earth",
        }),
      });
      collections.push({
        id: 2,
        title: "Space Exploration",
        medias: await api.get.medias.search({
          query: "space",
        }),
      });
      collections.push({
        id: 3,
        title: "Documentary Series",
        medias: await api.get.medias.search({
          query: "documentary",
        }),
      });
      collections.push({
        id: 4,
        title: "Outer Space",
        medias: await api.get.medias.search({
          query: "sun",
        }),
      });
      break;
    case "star":
      collections.push({
        id: 1,
        title: "Shows",
        medias: await api.get.medias.search({
          query: "show",
        }),
      });
      collections.push({
        id: 2,
        title: "Romantic",
        medias: await api.get.medias.search({
          query: "romantic",
        }),
      });
      collections.push({
        id: 3,
        title: "Comedy",
        medias: await api.get.medias.search({
          query: "comedy",
        }),
      });
      collections.push({
        id: 4,
        title: "Action",
        medias: await api.get.medias.search({
          query: "action",
        }),
      });
      break;
  }

  return (
    <>
      <Cover company={company} />
      <Content variant="secondary">
        <div className="content">
          <Explore>
            {collections.map((collection) => (
              <Collection
                key={collection.id}
                title={collection.title}
                medias={collection.medias}
              />
            ))}
          </Explore>
        </div>
      </Content>
    </>
  );
};

export default Page;
