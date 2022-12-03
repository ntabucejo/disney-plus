import Fade from "../../components/elements/fade";
import Billboard from "../../components/sections/billboard";
import Collection from "../../components/sections/collection";
import Showcase from "../../components/sections/showcase";
import Content from "../../components/layouts/content";
import randomNumber from "../../helpers/random-number";
import data from "../../library/data";

const Page = async () => {
  const collections = await data("originals");
  const spotlightMedia =
    collections[0].medias[randomNumber(0, collections.length)];

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={spotlightMedia} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={spotlightMedia} isMediaSelected={false} />
        <Content isSpacerOnly>
          <Fade />
          {collections.map(({ id, name, medias }) => (
            <Collection.Portrait key={id} name={name} medias={medias} />
          ))}
        </Content>
      </Content>
    </>
  );
};

export default Page;
