"use client";

import { PlayIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  variant:
    | { name: "primary"; type: "watch" | "save" }
    | { name: "secondary"; children: ReactNode };
  isInverted: boolean;
};

const Button = ({ variant, isInverted }: Props) => {
  if (variant.name === "secondary") return <button>{variant.children}</button>;

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`
        ${variant.type === "watch" ? "max-w-96 w-full" : ""} 
        ${
          isInverted
            ? "bg-typography-light text-action-dark hover:bg-typography-light/fade"
            : "bg-action-dark hover:bg-action-dark/fade"
        }
      transition-smooth h-12 rounded px-4 transition-colors`}>
      <div className="mx-auto flex w-min items-center gap-2">
        {variant.type === "watch" ? (
          <>
            <PlayIcon
              className={`${
                isInverted ? "fill-background-dark" : "fill-typography-light"
              } h-6 w-6`}
            />
            <span className="whitespace-nowrap font-semibold">Watch now</span>
          </>
        ) : null}
        {variant.type === "save" ? (
          <PlusSmallIcon
            className={`${
              isInverted ? "fill-background-dark" : "fill-typography-light"
            } h-6 w-6`}
          />
        ) : null}
      </div>
    </motion.button>
  );
};

export default Button;
