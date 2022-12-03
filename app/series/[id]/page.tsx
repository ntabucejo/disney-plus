import Fade from "../../../components/elements/fade";
import Billboard from "../../../components/sections/billboard";
import Collection from "../../../components/sections/collection";
import Showcase from "../../../components/sections/showcase";
import Content from "../../../components/wrappers/content";
import api from "../../../library/api";

const Page = async ({ params: { id } }: any) => {
  const spotlightMedia = await api.get.media.details({ type: "series", id });
  const similarMedias = await api.get.medias.similar({
    type: "series",
    id,
    page: 1,
  });
  const popularSeries = await api.get.medias.group({
    name: "popular",
    type: "series",
    page: 1,
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
          <Collection.Portrait name="More like this" medias={similarMedias} />
          <Collection.Landscape
            name="Popular Series"
            medias={popularSeries}
            isOnlyGrid
          />
        </div>
      </Content>
    </>
  );
};

export default Page;
