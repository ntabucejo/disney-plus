import Fade from "../../../components/elements/fade";
import Billboard from "../../../components/sections/billboard";
import Explore from "../../../components/sections/explore";
import Collection from "../../../components/sections/explore/collection";
import Showcase from "../../../components/sections/showcase";
import Content from "../../../components/wrappers/content";
import api from "../../../library/api";

const Page = async ({ params: { id } }: any) => {
  const media = await api.get.media.details({ type: "series", id });

  const trendingMoviesToday = await api.get.medias.trending({
    type: "movies",
    time: "day",
  });

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={media} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={media} />
        <div className="content relative bg-background-dark">
          <Fade />
          <Explore>
            <Collection title="More Like This" medias={trendingMoviesToday} />
          </Explore>
        </div>
      </Content>
    </>
  );
};

export default Page;
