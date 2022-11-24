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
        <Franchise />
        <Explore />
      </Content>
    </>
  );
};

export default Page;
