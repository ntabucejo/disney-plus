import Browse from "../../components/sections/browse";
import Explore from "../../components/sections/explore";
import Collection from "../../components/sections/explore/collection";
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

  const popularSearch = await api.get.medias.group({
    name: "top-rated",
    type: "movies",
    page: Math.floor(Math.random() * 20) + 5,
  });

  return (
    <div className="content">
      <Explore>
        <Collection title="Popular Search" medias={popularSearch} />
      </Explore>
      <Browse
        title="Explore Search"
        medias={popularMedias}
        variant="secondary"
      />
    </div>
  );
};

export default Page;
