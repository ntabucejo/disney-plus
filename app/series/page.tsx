import Fade from "../../components/elements/fade";
import Billboard from "../../components/sections/billboard";
import Explore from "../../components/sections/explore";
import Collection from "../../components/sections/explore/collection";
import Showcase from "../../components/sections/showcase";
import Content from "../../components/wrappers/content";
import api from "../../library/api";

const Page = async () => {
  const media = await api.get.media.spotlight({ type: "series" });

  const trendingSeriesToday = await api.get.medias.trending({
    type: "series",
    time: "day",
  });
  const trendingSeriesThisWeek = await api.get.medias.trending({
    type: "series",
    time: "week",
  });
  const popularSeries = await api.get.medias.group({
    name: "popular",
    type: "series",
    page: 2,
  });
  const topRatedSeries = await api.get.medias.group({
    name: "top-rated",
    type: "series",
    page: 1,
  });
  const onTheAirSeries = await api.get.medias.group({
    name: "on-the-air",
    type: "series",
    page: 1,
  });
  const airingTodaySeries = await api.get.medias.group({
    name: "airing-today",
    type: "series",
    page: 1,
  });

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={media} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={media} isMediaSelected={false} />
        <div className="content relative bg-background-dark">
          <Fade />
          <Explore>
            <Collection title="Trending today" medias={trendingSeriesToday} />
            <Collection
              title="Trending this Week"
              medias={trendingSeriesThisWeek}
            />
            <Collection title="Popular" medias={popularSeries} />
            <Collection title="Top rated" medias={topRatedSeries} />
            <Collection title="Live now" medias={onTheAirSeries} />
            <Collection title="New episodes" medias={airingTodaySeries} />
          </Explore>
        </div>
      </Content>
    </>
  );
};

export default Page;
