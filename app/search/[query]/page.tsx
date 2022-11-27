import Browse from "../../../components/sections/browse";
import Card from "../../../components/sections/browse/card";
import api from "../../../library/api";

const Page = async () => {
  const medias = await api.get.medias.search({
    query: "endgame",
  });

  return (
    <Browse>
      {medias.map((media: any) => (
        // @ts-ignore
        <Card media={media} />
      ))}
    </Browse>
  );
};

export default Page;
