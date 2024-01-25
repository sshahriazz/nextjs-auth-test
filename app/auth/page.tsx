import { auth } from "@/auth";
import { Signup } from "@/components/Signup";
import { redirect } from "next/navigation";
import React from "react";

async function Auth() {
  const session = await auth();
  if (session) {
    return redirect("/");
  }
  return (
    <div>
      {JSON.stringify(session)}
      <Signup />
    </div>
  );
}

export default Auth;
