import React from "react";
import { Link } from "react-router-dom";

type PROPS = {
  children?: any;
  text: string;
  to: string;
};

export default function CustomButton({ children, text, to }: PROPS) {
  return (
    <div className="mt-4 text-yellow-500 border border-yellow-500 rounded-sm px-4 py-2 transition hover:border-slate-50 hover:bg-yellow-500 hover:text-slate-50 drop-shadow-md">
      <Link
        to={to}
        className="flex flex-row justify-between items-center text-sm sm:text-md font-semibold"
      >
        <h3 className="drop-shadow-lg">{text}</h3>
        {children}
      </Link>
    </div>
  );
}
