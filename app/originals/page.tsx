import Fade from "../../components/elements/fade";
import Billboard from "../../components/sections/billboard";
import Explore from "../../components/sections/explore";
import Collection from "../../components/sections/explore/collection";
import Franchise from "../../components/sections/franchise";
import Showcase from "../../components/sections/showcase";
import Content from "../../components/wrappers/content";
import api from "../../library/api";

const Page = async () => {
  const medias = await api.get.medias.search({
    query: "minions",
  });

  const featuredMedias = await api.get.medias.search({
    query: "marvel",
  });
  const avengersMedias = await api.get.medias.search({
    query: "avengers",
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

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={medias[1]} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={medias[1]} isMediaSelected={false} />
        <div className="content relative bg-background-dark">
          <Fade />
          <Explore>
            <Collection title="Featured" medias={featuredMedias} />
            <Collection title="Avengers" medias={avengersMedias} />
            <Collection title="Starwars" medias={starwarsMedias} />
            <Collection title="Shrek" medias={shrekMedias} />
            <Collection title="Minions" medias={minionsMedias} />
          </Explore>
        </div>
      </Content>
    </>
  );
};

export default Page;
