import React, { lazy } from "react";

// import component
const Login = lazy(() => import("./sign-in/page"));

export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}
