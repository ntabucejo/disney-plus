"use client";

import { signOut } from "next-auth/react";
import Button from "../../elements/button";

const SignOut = () => {
  return (
    <Button variant={{ name: "secondary" }} onClick={() => signOut()} isFull>
      Sign Out
    </Button>
  );
};

export default SignOut;
