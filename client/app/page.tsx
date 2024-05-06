"use client";
import SignUp from "@/components/SignUp";
import SignIn from "@/components/SignIn";
import React from "react";

export default function Home() {
  const [signIn, setSignIn] = React.useState<boolean>(true);

  return (
    <main className="flex items-center w-full justify-around">
      {signIn ? (
        <SignIn setSignIn={setSignIn} />
      ) : (
        <SignUp setSignIn={setSignIn} />
      )}
    </main>
  );
}
