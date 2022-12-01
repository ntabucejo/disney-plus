"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../elements/button";

const Access = () => {
  return (
    <section className="mx-auto mb-12 w-full max-w-lg space-y-6 px-6">
      <div className="relative mx-auto aspect-video w-1/2">
        <Image
          src="/assets/images/disney-plus-logo.png"
          alt="Disney Logo"
          fill
          sizes="500px"
          priority
          className="object-contain"
        />
      </div>
      <h1 className="text-center font-bold tablet:text-2xl">
        Home of your favorite stories
      </h1>
      <Button
        variant={{ name: "secondary" }}
        isFull
        onClick={() => signIn("google")}>
        Subscribe Now
      </Button>
      <Link
        href="https://github.com/ntabucejo/disney-plus"
        className="block text-center text-ms font-bold">
        Created by: Nikko Abucejo
      </Link>
    </section>
  );
};

export default Access;
