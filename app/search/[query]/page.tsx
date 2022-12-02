import Collection from "../../../components/sections/collection";
import api from "../../../library/api";

const Page = async ({ params: { query } }: any) => {
  const searchedMedias = await api.get.medias.search({
    query,
    page: 1,
  });

  return (
    <Collection.Landscape
      name={`Search for ${query.split("-").join(" ")}`}
      medias={searchedMedias}
    />
  );
};

export default Page;
