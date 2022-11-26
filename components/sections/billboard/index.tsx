import api from "../../../library/api";
import type { Media } from "../../../types";
import Backdrop from "./backdrop";
import Playback from "./playback";

type Props = {
  media: Media;
};

const Billboard = async ({ media }: Props) => {
  const video = await api.get.media.video({ type: "movies", id: media.id });

  return (
    <section className="sticky -z-10 aspect-video max-h-screen w-full overflow-hidden tablet:top-0">
      {video ? (
        <Playback src={`https://www.youtube.com/embed/${video.key!}`} />
      ) : null}
      <Backdrop
        src={media.image.backdrop!}
        isAlwaysDisplayed={video ? true : false}
      />
      <div className="absolute inset-0 z-10 hidden bg-gradient-to-r from-background-dark to-transparent tablet:block" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark to-transparent" />
    </section>
  );
};

export default Billboard;
