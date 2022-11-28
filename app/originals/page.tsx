import Fade from "../../components/elements/fade";
import Billboard from "../../components/sections/billboard";
import Explore from "../../components/sections/explore";
import Collection from "../../components/sections/explore/collection";
import Showcase from "../../components/sections/showcase";
import Content from "../../components/wrappers/content";
import randomNumber from "../../helpers/random-number";
import shuffleMedias from "../../helpers/shuffle-medias";
import api from "../../library/api";

const Page = async () => {
  // Featured
  const ironManMedias = await api.get.medias.search({
    query: "iron man",
  });
  const avengersMedias = await api.get.medias.search({
    query: "avengers",
  });
  const spiderManMedias = await api.get.medias.search({
    query: "spider man",
  });
  const pixarMedias = await api.get.medias.search({
    query: "pixar",
  });
  const disneyMedias = await api.get.medias.search({
    query: "disney",
  });
  const starwarsMedias = await api.get.medias.search({
    query: "star wars",
  });
  const shrekMedias = await api.get.medias.search({
    query: "shrek",
  });
  const minionsMedias = await api.get.medias.search({
    query: "minions",
  });
  const featuredMedias = shuffleMedias([
    ...ironManMedias,
    ...avengersMedias,
    ...starwarsMedias,
    ...minionsMedias,
    ...spiderManMedias,
  ]);
  const spotlightMedias = shuffleMedias([
    ...ironManMedias,
    ...avengersMedias,
    ...starwarsMedias,
    ...minionsMedias,
    ...spiderManMedias,
  ]);
  const spotlightMedia =
    spotlightMedias[randomNumber(0, spotlightMedias.length)];

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={spotlightMedia} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={spotlightMedia} isMediaSelected={false} />
        <div className="content relative bg-background-dark">
          <Fade />
          <Explore>
            <Collection title="Featured" medias={featuredMedias} />
            <Collection title="Minions" medias={minionsMedias} />
            <Collection title="Avengers" medias={avengersMedias} />
            <Collection title="Avengers" medias={avengersMedias} />
            <Collection title="Starwars" medias={starwarsMedias} />
            <Collection title="Disney" medias={disneyMedias} />
            <Collection title="Pixar" medias={pixarMedias} />
            <Collection title="Shrek" medias={shrekMedias} />
          </Explore>
        </div>
      </Content>
    </>
  );
};

export default Page;
