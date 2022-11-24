import { MinusSmallIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Button from "../../elements/button";

const Overview = () => {
  return (
    <section className="max-w-md space-y-4">
      <div className="relative aspect-video w-full">
        <Image
          src="https://img1.hotstarext.com/image/upload/f_auto,h_136/sources/r1/cms/prod/8402/1388402-t-f86006d9f903"
          alt="Poster"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="font-semibold">2022 • 1h 59mm • 6 Languages •</p>
        <div className="rounded bg-neutral-700 px-2 font-semibold">PG</div>
      </div>
      <p className="hidden desktop:block">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptates
        provident culpa cupiditate molestias
      </p>
      <ul className="flex items-center gap-2 font-semibold">
        <li>Fantasy</li>
        <MinusSmallIcon className="h-6 w-6 rotate-90" />
        <li>Family</li>
        <MinusSmallIcon className="h-6 w-6 rotate-90" />
        <li>Comedy</li>
      </ul>
      <div className="flex gap-4">
        <Button variant={{ name: "primary", type: "play" }} />
        <Button variant={{ name: "primary", type: "save" }} />
      </div>
    </section>
  );
};

export default Overview;
