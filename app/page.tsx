import Billboard from "../components/sections/billboard";
import Overview from "../components/sections/overview";
import Franchise from "../components/sections/franchise";
import Content from "../components/wrappers/content";
import Explore from "../components/sections/explore";

const Page = () => {
  return (
    <>
      <Billboard />
      <Content variant="primary">
        <Overview />
        <div className="content bg-background-dark">
          <Franchise />
          <Explore />
        </div>
      </Content>
    </>
  );
};

export default Page;
