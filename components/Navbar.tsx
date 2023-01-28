import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
type Props = {
  onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {
  return (
    <nav className="w-full bg-white h-16 text-zinc-500 fixed z-10 flex items-center px-4 shadow-sm">
      <div className="font-bold text-lg">My Logo</div>
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  );
};

export default Navbar;
