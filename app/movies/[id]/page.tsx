import Fade from "../../../components/elements/fade";
import Billboard from "../../../components/sections/billboard";
import Browse from "../../../components/sections/browse";
import Explore from "../../../components/sections/explore";
import Collection from "../../../components/sections/explore/collection";
import Showcase from "../../../components/sections/showcase";
import Content from "../../../components/wrappers/content";
import api from "../../../library/api";

const Page = async ({ params: { id } }: any) => {
  const spotlightMedia = await api.get.media.details({ type: "movies", id });
  const similarMedias = await api.get.medias.similar({
    type: "movies",
    id,
  });
  const popularMovies = await api.get.medias.group({
    name: "popular",
    type: "movies",
    page: 2,
  });

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={spotlightMedia} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={spotlightMedia} isMediaSelected={true} />
        <div className="content relative bg-background-dark">
          <Fade />
          <Explore>
            <Collection title="More like this" medias={similarMedias} />
          </Explore>
          <Browse
            title="Popular Movies"
            variant="primary"
            medias={popularMovies}
          />
        </div>
      </Content>
    </>
  );
};

export default Page;
