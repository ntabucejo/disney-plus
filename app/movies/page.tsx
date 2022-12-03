import Fade from "../../components/elements/fade";
import Billboard from "../../components/sections/billboard";
import Collection from "../../components/sections/collection";
import Showcase from "../../components/sections/showcase";
import Content from "../../components/layouts/content";
import api from "../../library/api";
import data from "../../library/data";

const Page = async () => {
  const spotlightMedia = await api.get.media.spotlight({ type: "movies" });
  const collections = await data("movies");

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={spotlightMedia} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={spotlightMedia} isMediaSelected={false} />
        <div className="spacer ground relative bg-background-dark">
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
