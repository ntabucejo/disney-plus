import Collection from "../../components/sections/collection";
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
    <Collection.Landscape name="Recommended for you" medias={popularMedias} />
  );
};

export default Page;
