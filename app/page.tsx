import Billboard from "../components/sections/billboard";
import Showcase from "../components/sections/showcase";
import Franchise from "../components/sections/franchise";
import Content from "../components/wrappers/content";
import Explore from "../components/sections/explore";
import api from "../library/api";

const Page = async () => {
  const movie = await api.get.movie.spotlight();

  return (
    <>
      <Billboard image={movie.image.backdrop!} />
      <Content variant="primary">
        <Showcase movie={movie} />
        <div className="content bg-background-dark">
          <Franchise />
          <Explore />
        </div>
      </Content>
    </>
  );
};

export default Page;
