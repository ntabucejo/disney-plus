import Content from "../../../components/wrappers/content";
import Cover from "../../../components/sections/cover";
import Collection from "../../../components/sections/collection";
import data from "../../../library/data";

const Page = async ({ params: { company } }: any) => {
  const collections = await data(company);

  return (
    <>
      <Cover company={company} />
      <Content variant="secondary">
        {collections.map(({ id, name, medias }) => (
          <Collection.Portrait key={id} name={name} medias={medias} />
        ))}
      </Content>
    </>
  );
};

export default Page;
