import React from "react";
import { Link as ScrollLink } from "react-scroll";

type PROPS = {
  children?: any;
  text: string;
  to: string;
};

export default function CustomMenuItem({ children, text, to }: PROPS) {
  return (
    <div className="m-5 px-5 hover:animate-pulse transition z-50 drop-shadow-md">
      <li className="text-yellow-500 hover:text-slate-50 cursor-pointer px-4 py-1 rounded-sm transition">
        <ScrollLink to={to} smooth={true} duration={500}>
          {children}
          <h3 className="text-md font-semibold">{text}</h3>
        </ScrollLink>
      </li>
    </div>
  );
}
