"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export async function createUser(prevState: any, formData: FormData) {
  // ...

  const action = await signIn("credentials", {
    redirect: false,
    email: formData.get("email"),
  });
  console.log(action);
  if (action.type !== "credentials/error") {
    return redirect("/auth");
  }

  return {
    message: "Please enter a valid email",
  };
}
