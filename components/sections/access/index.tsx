"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Button from "../../elements/button";

const Access = () => {
  return (
    <section className="mx-auto w-full max-w-lg space-y-6 px-6">
      <div className="relative mx-auto aspect-video w-1/2">
        <Image
          src="/assets/images/disney-plus-logo.png"
          alt="Disney Logo"
          fill
          sizes="500px"
          className="object-cover"
        />
      </div>
      <h1 className="text-center font-bold tablet:text-2xl">
        Home of your favorite stories
      </h1>
      <Button
        variant={{ name: "secondary" }}
        isFull
        onClick={() => signIn("github")}>
        Subscribe Now
      </Button>
    </section>
  );
};

export default Access;
