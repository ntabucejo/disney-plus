"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  isAlwaysDisplayed: boolean;
};

const Backdrop = ({ src, isAlwaysDisplayed }: Props) => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  const image = src
    ? `https://image.tmdb.org/t/p/original${src}`
    : "/assets/images/disney-plus-backdrop.png";

  const placeholder = src
    ? `https://image.tmdb.org/t/p/w500${src}`
    : "/assets/images/disney-plus-backdrop.png";

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      if (isAlwaysDisplayed) {
        setIsDisplayed(false);
      }
    }, 5000);

    const secondTimeout = setTimeout(() => {
      if (isAlwaysDisplayed) {
        setIsDisplayed(true);
      }
    }, 60000);

    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
    };
  }, [isAlwaysDisplayed]);

  return (
    <>
      {isDisplayed ? (
        <div className="absolute inset-0 bg-background-dark" />
      ) : null}
      <Image
        src={image}
        alt="Showcase"
        fill
        priority
        blurDataURL={placeholder}
        placeholder="blur"
        className={`${
          isDisplayed ? "opacity-100" : "desktop:opacity-0"
        } object-cover transition-all duration-1000 ease-in`}
      />
    </>
  );
};

export default Backdrop;
