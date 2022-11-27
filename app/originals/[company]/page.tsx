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
        title: "Iron man",
        medias: await api.get.medias.search({
          query: "iron man",
        }),
      });
      collections.push({
        id: 3,
        title: "Doctor strange",
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
      break;
    case "pixar":
      collections.push({
        id: 1,
        title: "Best of pixar",
        medias: await api.get.medias.search({
          query: "pixar",
        }),
      });
      collections.push({
        id: 2,
        title: "Toy story",
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
        title: "The incredibles",
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
        title: "Despicable me",
        medias: await api.get.medias.search({
          query: "despicable me",
        }),
      });
      collections.push({
        id: 2,
        title: "Minions",
        medias: await api.get.medias.search({
          query: "Minions",
        }),
      });
      collections.push({
        id: 3,
        title: "Shrek",
        medias: await api.get.medias.search({
          query: "shrek",
        }),
      });
      collections.push({
        id: 4,
        title: "Best of disney",
        medias: await api.get.medias.search({
          query: "disney",
        }),
      });
      break;
    case "national-geographic":
      collections.push({
        id: 1,
        title: "Wild",
        medias: await api.get.medias.search({
          query: "wild",
        }),
      });
      collections.push({
        id: 2,
        title: "Forest",
        medias: await api.get.medias.search({
          query: "forest",
        }),
      });
      break;
    case "star":
      collections.push({
        id: 1,
        title: "Drama",
        medias: await api.get.medias.search({
          query: "drama",
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
      break;
  }

  return (
    <>
      <Cover company={company} />
      <div className="">
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
      </div>
    </>
  );
};

export default Page;
