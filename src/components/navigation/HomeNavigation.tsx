import React from "react";
import CustomMenuItem from "../ui/CustomMenuItem";

type PROPS = {
  isVisible?: boolean;
};

export default function HomeNavigation({ isVisible }: PROPS) {
  return (
    <nav
      className={`${
        isVisible ? "block" : "hidden"
      } fixed right-0 w-full bg-gray-900/25 drop-shadow-2xl transition-all z-50`}
    >
      <ul className="flex flex-row justify-evenly text-slate-50 text-lg font-semibold mx-4 p-2">
        <CustomMenuItem text="Home" to="/" />
        <CustomMenuItem text="Gallery" to="/gallery" />
        <CustomMenuItem text="Blog" to="/blog" />
        <CustomMenuItem text="About" to="/about" />
        <CustomMenuItem text="Contact" to="/contact" />
      </ul>
    </nav>
  );
}
