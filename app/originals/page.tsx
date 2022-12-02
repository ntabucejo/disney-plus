import Fade from "../../components/elements/fade";
import Billboard from "../../components/sections/billboard";
import Collection from "../../components/sections/collection";
import Showcase from "../../components/sections/showcase";
import Content from "../../components/wrappers/content";
import randomNumber from "../../helpers/random-number";
import data from "../../library/data";

const Page = async () => {
  const collections = await data("originals");
  const spotlight = collections[randomNumber(0, collections.length)];

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={spotlight.medias} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={spotlight.medias} isMediaSelected={false} />
        <div className="content relative bg-background-dark">
          <Fade />
          {collections.map(({ id, name, medias }) => (
            <Collection.Portrait key={id} name={name} medias={medias} />
          ))}
        </div>
      </Content>
    </>
  );
};

export default Page;
