import React from "react";
import { Link as ScrollLink } from "react-scroll";

import SocialMediaBar from "../ui/SocialMediaBar";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Hero() {
  const title = "Przemysław Młoczkowski";
  const subTitle = "Photographer";

  return (
    <header className="relative mb-5 pb-5">
      <div className="absolute bg-slate-900 z-0 w-full h-full opacity-30"></div>
      <div className="flex flex-1 justify-center items-center mt-5">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-yellow-500 text-lg sm:text-3xl font-semibold drop-shadow-md z-50">
            {subTitle}
          </h2>
          <h1 className="text-slate-50 text-xl sm:text-5xl font-bold tracking-widest drop-shadow-md z-50">
            {title.toUpperCase()}
          </h1>
          <SocialMediaBar size={24} styles="z-50" />
          <div className="mt-4 z-50 animate-bounce cursor-pointer">
            <ScrollLink to="gallery" smooth={true} duration={500}>
              <MdKeyboardDoubleArrowDown
                size={36}
                className="text-yellow-500"
              />
            </ScrollLink>
          </div>
        </div>
      </div>
    </header>
  );
}
