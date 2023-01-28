import React from "react";
import classNames from "classnames";
type Props = {
  open: boolean;
};
const Sidebar = (props: Props) => {
  return (
    <div
      className={classNames({
        "h-screen w-[300px] bg-indigo-700 text-zinc-50 fixed top-0 z-20": true,
        "md:w-full md:sticky md:top-16 md:z-0": true,
        "transition-transform .3s ease-in-out md:-translate-x-0": true,
        "-translate-x-full ": !props.open,
      })}
    >
      <nav className="md:sticky top-0 md:top-16 ">Sidebar content</nav>
    </div>
  );
};

export default Sidebar;
