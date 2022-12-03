import Billboard from "../components/sections/billboard";
import Showcase from "../components/sections/showcase";
import Franchise from "../components/sections/franchise";
import Content from "../components/layouts/content";
import api from "../library/api";
import Collection from "../components/sections/collection";
import data from "../library/data";

const Page = async () => {
  const spotlightMedia = await api.get.media.spotlight({ type: "all" });
  const collections = await data("home");

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={spotlightMedia} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={spotlightMedia} isMediaSelected={false} />
        <Content isSpacerOnly>
          <Franchise />
          {collections.map(({ id, name, medias }) => (
            <Collection.Portrait key={id} name={name} medias={medias} />
          ))}
        </Content>
      </Content>
    </>
  );
};

export default Page;
