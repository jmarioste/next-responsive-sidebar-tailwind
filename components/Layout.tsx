import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="grid min-h-screen grid-rows-header">
      <div>
        <Navbar />
      </div>

      <div className="grid md:grid-cols-sidebar ">
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
