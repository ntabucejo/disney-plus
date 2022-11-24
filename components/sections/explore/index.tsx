import Fade from "../../elements/fade";
import Collection from "./collection";

const Explore = () => {
  return (
    <section className="relative bg-background-dark">
      <Fade />
      <div className="space-y-12">
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
      </div>
    </section>
  );
};

export default Explore;
