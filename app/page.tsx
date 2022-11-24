import Billboard from "../components/sections/billboard";
import Overview from "../components/sections/overview";
import Franchise from "../components/sections/franchise";
import Content from "../components/wrappers/content";

const Page = () => {
  return (
    <>
      <Billboard />
      <Content variant="primary">
        <Overview />
        <Franchise />
      </Content>
    </>
  );
};

export default Page;
