import Browse from "../../../components/sections/browse";
import Card from "../../../components/sections/browse/card";
import Explore from "../../../components/sections/explore";
import Collection from "../../../components/sections/explore/collection";
import api from "../../../library/api";

const Page = async ({ params: { query } }: any) => {
  const medias = await api.get.medias.search({
    query,
  });
  const youMightAlsoWant = await api.get.medias.group({
    name: "now-playing",
    type: "movies",
    page: Math.floor(Math.random() * 20) + 5,
  });

  return (
    <div className="content">
      <Explore>
        <Collection title="You might also want" medias={youMightAlsoWant} />
      </Explore>
      <Browse isOnQuery={true}>
        {medias.map((media: any) => (
          // @ts-ignore
          <Card key={media.id} media={media} isOnQuery={true} />
        ))}
      </Browse>
    </div>
  );
};

export default Page;
