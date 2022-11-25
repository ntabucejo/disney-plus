"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  src: string;
};

const Backdrop = ({ src }: Props) => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDisplayed(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isDisplayed]);

  return (
    <Image
      src={src}
      fill
      alt="Showcase"
      style={{ opacity: isDisplayed ? "1" : "0" }}
      className="object-cover transition-all duration-1000 ease-in"
    />
  );
};

export default Backdrop;
