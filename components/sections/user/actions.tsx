"use client";

import { signOut } from "next-auth/react";
import Button from "../../elements/button";

const Actions = () => {
  return (
    <div>
      <Button variant={{ name: "secondary" }} onClick={() => signOut()}>
        Sign out
      </Button>
    </div>
  );
};

export default Actions;
