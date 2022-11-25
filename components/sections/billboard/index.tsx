import { use } from "react";
import api from "../../../library/api";
import type { Media } from "../../../types";
import Backdrop from "./backdrop";
import Video from "./video";

type Props = {
  movie: Media;
};

const Billboard = ({ movie }: Props) => {
  const video = use(api.get.movie.video(movie.id));

  return (
    <section className="sticky -z-10 aspect-video max-h-screen w-full overflow-hidden tablet:top-0">
      <Video src={`https://www.youtube.com/embed/${video.key!}`} />
      <Backdrop src={movie.image.backdrop!} />
      <div className="absolute inset-0 z-10 hidden bg-gradient-to-r from-background-dark to-transparent tablet:block" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark to-transparent" />
    </section>
  );
};

export default Billboard;
