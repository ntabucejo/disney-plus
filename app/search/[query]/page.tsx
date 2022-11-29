import Browse from "../../../components/sections/browse";
import api from "../../../library/api";

const Page = async ({ params: { query } }: any) => {
  const searchedMedias = await api.get.medias.search({
    query,
    page: 1,
  });

  return (
    <Browse
      title={`Search for ${query.split("-").join(" ")}`}
      variant="primary"
      medias={searchedMedias}
    />
  );
};

export default Page;
