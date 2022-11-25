import Billboard from "../components/sections/billboard";
import Showcase from "../components/sections/showcase";
import Franchise from "../components/sections/franchise";
import Content from "../components/wrappers/content";
import Explore from "../components/sections/explore";
import api from "../library/api";

const Page = async () => {
  const media = await api.get.media.spotlight();

  return (
    <>
      <Billboard media={media} />
      <Content variant="primary">
        <Showcase media={media} />
        <div className="content bg-background-dark">
          <Franchise />
          <Explore />
        </div>
      </Content>
    </>
  );
};

export default Page;
