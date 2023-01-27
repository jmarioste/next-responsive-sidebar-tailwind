import React, { PropsWithChildren, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="grid min-h-screen grid-rows-header">
      <div>
        <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)} />
      </div>

      <div className="grid md:grid-cols-sidebar ">
        <Sidebar open={sidebarOpen} />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
