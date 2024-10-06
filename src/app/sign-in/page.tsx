import React from "react";
import dynamic from "next/dynamic";

// Login Component
// Dynamically import the Login component
const Login = dynamic(() => import("@/components/Login/Login"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const page = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default page;
