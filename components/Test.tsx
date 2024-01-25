import { signIn } from "@/auth";
import React from "react";

const Test = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Test;
