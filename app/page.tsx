import { auth, signIn, signOut } from "@/auth";
import { Signup } from "@/components/Signup";
import Test from "@/components/Test";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  console.log("session", session);
  if (!session) {
    return redirect("/auth");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </main>
  );
}
