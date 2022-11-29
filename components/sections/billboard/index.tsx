import api from "../../../library/api";
import type { Media } from "../../../types";
import Backdrop from "./backdrop";
import Playback from "./playback";

type Props = {
  media: Media;
};

const Billboard = async ({ media }: Props) => {
  const type = media.type!;
  const id = media.id;
  const video = await api.get.media.video({ type, id });

  return (
    <section className="sticky -z-10 aspect-video max-h-screen w-full overflow-hidden tablet:top-0">
      <div className="relative h-full w-full">
        {video ? (
          <Playback src={`https://www.youtube.com/embed/${video.key!}`} />
        ) : null}
        <Backdrop
          src={media.image.backdrop!}
          isAlwaysDisplayed={video ? true : false}
        />
        <div className="absolute inset-0 z-10 hidden bg-gradient-to-r from-background-dark to-transparent tablet:block" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark to-transparent" />
      </div>
    </section>
  );
};

export default Billboard;
