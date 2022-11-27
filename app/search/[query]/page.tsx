import Browse from "../../../components/sections/browse";
import Card from "../../../components/sections/browse/card";
import api from "../../../library/api";

const Page = async ({ params: { query } }: any) => {
  const medias = await api.get.medias.search({
    query,
  });

  return (
    <Browse isOnQuery={true}>
      {medias.map((media: any) => (
        // @ts-ignore
        <Card key={media.id} media={media} isOnQuery={true} />
      ))}
    </Browse>
  );
};

export default Page;
