import Browse from "../../components/sections/browse";
import Card from "../../components/sections/browse/card";
import api from "../../library/api";
import type { Media } from "../../types";

const Page = async () => {
  const popularMovies = await api.get.medias.group({
    name: "popular",
    type: "movies",
    page: 1,
  });
  const popularSeries = await api.get.medias.group({
    name: "popular",
    type: "series",
    page: 1,
  });

  const popularMedias: Media[] = [...popularMovies, ...popularSeries];

  return (
    <Browse title="Popular searches">
      {popularMedias.map((media: any) => (
        // @ts-ignore
        <Card media={media} />
      ))}
    </Browse>
  );
};

export default Page;
