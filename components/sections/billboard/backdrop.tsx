"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  isAlwaysDisplayed: boolean;
};

const Backdrop = ({ src, isAlwaysDisplayed }: Props) => {
  const [isDisplayed, setIsDisplayed] = useState(true);

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
  }, []);

  return (
    <>
      {isDisplayed ? (
        <div className="absolute inset-0 bg-background-dark" />
      ) : null}
      <Image
        src={src}
        alt="Showcase"
        fill
        priority
        className={`${
          isDisplayed ? "opacity-100" : "desktop:opacity-0"
        } object-cover transition-all duration-1000 ease-in`}
      />
    </>
  );
};

export default Backdrop;
