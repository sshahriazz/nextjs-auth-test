"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function Client() {
  const router = useRouter();
  const { data, status, update } = useSession();
  if (status === "loading") {
    return <div>loading</div>;
  }
  if (status === "unauthenticated") {
    return router.push("/auth");
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default Client;
