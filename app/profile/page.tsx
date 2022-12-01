import User from "../../components/sections/user";
import Content from "../../components/wrappers/content";

const Page = async () => {
  return (
    <>
      <Content variant="tertiary">
        {/* @ts-ignore */}
        <User />
      </Content>
    </>
  );
};

export default Page;
