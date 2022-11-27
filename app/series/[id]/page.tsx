import Fade from "../../../components/elements/fade";
import Billboard from "../../../components/sections/billboard";
import Explore from "../../../components/sections/explore";
import Collection from "../../../components/sections/explore/collection";
import Showcase from "../../../components/sections/showcase";
import Content from "../../../components/wrappers/content";
import api from "../../../library/api";

const Page = async ({ params: { id } }: any) => {
  const media = await api.get.media.details({ type: "series", id });

  const similarMedias = await api.get.medias.similar({
    type: "series",
    id,
  });

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={media} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={media} isMediaSelected={true} />
        <div className="content relative bg-background-dark">
          <Fade />
          <Explore>
            <Collection title="More like this" medias={similarMedias} />
          </Explore>
        </div>
      </Content>
    </>
  );
};

export default Page;