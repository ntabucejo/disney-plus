import Fade from "../../components/elements/fade";
import Billboard from "../../components/sections/billboard";
import Explore from "../../components/sections/explore";
import Collection from "../../components/sections/explore/collection";
import Showcase from "../../components/sections/showcase";
import Content from "../../components/wrappers/content";
import api from "../../library/api";

const Page = async () => {
  const media = await api.get.media.spotlight();

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
        <Showcase media={media} />
        <div className="content relative bg-background-dark">
          <Fade />
          <Explore>
            <Collection title="Trending Today" medias={trendingSeriesToday} />
            <Collection
              title="Trending This Week"
              medias={trendingSeriesThisWeek}
            />
            <Collection title="Popular" medias={popularSeries} />
            <Collection title="Top Rated" medias={topRatedSeries} />
            <Collection title="On The Air" medias={onTheAirSeries} />
            <Collection title="Airing Today" medias={airingTodaySeries} />
          </Explore>
        </div>
      </Content>
    </>
  );
};

export default Page;
