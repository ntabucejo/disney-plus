import Fade from "../../components/elements/fade";
import Billboard from "../../components/sections/billboard";
import Collection from "../../components/sections/collection";
import Explore from "../../components/sections/collection/portrait";
import Showcase from "../../components/sections/showcase";
import Content from "../../components/wrappers/content";
import randomNumber from "../../helpers/random-number";
import shuffleMedias from "../../helpers/shuffle-medias";
import api from "../../library/api";

const Page = async () => {
  const popularSeries = await api.get.medias.group({
    name: "popular",
    type: "series",
    page: 1,
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
  // Trending Series
  const trendingSeriesToday = await api.get.medias.trending({
    type: "series",
    time: "day",
  });
  const trendingSeriesThisWeek = await api.get.medias.trending({
    type: "series",
    time: "week",
  });
  const trendingMedias = shuffleMedias([
    ...trendingSeriesToday,
    ...trendingSeriesThisWeek,
  ]);
  const spotlightMedias = [...trendingSeriesThisWeek, ...popularSeries];
  const spotlightMedia =
    spotlightMedias[randomNumber(0, spotlightMedias.length)];

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={spotlightMedia} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={spotlightMedia} isMediaSelected={false} />
        <div className="content relative bg-background-dark">
          <Fade />
          <Collection.Portrait
            title="Trending Series"
            medias={trendingMedias}
          />
          <Collection.Portrait title="Live Now" medias={onTheAirSeries} />
          <Collection.Portrait title="Popular Series" medias={popularSeries} />
          <Collection.Portrait
            title="Top Rated Series"
            medias={topRatedSeries}
          />
          <Collection.Portrait
            title="New Episodes"
            medias={airingTodaySeries}
          />
        </div>
      </Content>
    </>
  );
};

export default Page;
