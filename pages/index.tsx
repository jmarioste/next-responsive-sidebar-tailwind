import { NextPage } from "next";
import { useSession } from "next-auth/react";
import React from "react";

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">Welcome to NextJS DaisyUI Starter</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
