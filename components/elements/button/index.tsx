"use client";

import { PlayIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  variant:
    | { name: "primary"; type: "watch" | "save"; isInverted: boolean }
    | { name: "secondary" };

  isFull?: boolean;
  onClick?: () => void;
};

const Button = ({ children, variant, isFull, onClick = () => {} }: Props) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      aria-label={variant.name}
      onClick={onClick}
      className={`${
        variant.name === "primary" && !variant.isInverted
          ? "bg-action-dark"
          : ""
      } ${
        variant.name === "primary" && variant.isInverted
          ? "bg-typography-light text-action-dark"
          : ""
      }  ${
        variant.name === "secondary"
          ? "bg-action-brand text-typography-light"
          : ""
      }  ${
        isFull ? "w-full" : ""
      } transition-smooth h-12 rounded px-4 transition-colors hover:bg-opacity-60`}>
      <div className="mx-auto flex w-min items-center gap-2">
        {variant.name === "primary" && variant.type === "watch" ? (
          <PlayIcon
            className={`${
              variant.isInverted
                ? "fill-background-dark"
                : "fill-typography-light"
            } h-6 w-6`}
          />
        ) : null}
        {variant.name === "primary" && variant.type === "save" ? (
          <PlusSmallIcon
            className={`${
              variant.isInverted
                ? "fill-background-dark"
                : "fill-typography-light"
            } h-6 w-6`}
          />
        ) : null}
        {children ? (
          <span className="whitespace-nowrap font-semibold">{children}</span>
        ) : null}
      </div>
    </motion.button>
  );
};

export default Button;
