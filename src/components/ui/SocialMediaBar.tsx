import React from "react";

import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

type PROPS = {
  size: number;
};

export default function SocialMediaBar({ size }: PROPS) {
  return (
    <div className="flex flex-row my-4 justify-evenly items-center z-50">
      <a
        href="https://www.facebook.com/przemyslawmloczkowskiphotographer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook
          size={size}
          className="mx-4 text-yellow-500 hover:text-slate-50 transition-all"
        />
      </a>
      <a
        href="https://www.youtube.com/@przemyslawmloczkowskiphoto"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube
          size={size}
          className="mx-4 text-yellow-500 hover:text-slate-50 transition-all"
        />
      </a>
      <a
        href="https://www.instagram.com/przemyslawmloczkowskiphoto/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram
          size={size}
          className="mx-4 text-yellow-500 hover:text-slate-50 transition-all"
        />
      </a>
    </div>
  );
}
