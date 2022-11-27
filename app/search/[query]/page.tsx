import Browse from "../../../components/sections/browse";
import Card from "../../../components/sections/browse/card";
import Content from "../../../components/wrappers/content";
import api from "../../../library/api";

const Page = async ({ params: { query } }: any) => {
  const medias = await api.get.medias.search({
    query,
  });

  return (
    <Content variant="secondary">
      <Browse>
        {medias.map((media: any) => (
          // @ts-ignore
          <Card key={media.id} media={media} />
        ))}
      </Browse>
    </Content>
  );
};

export default Page;
