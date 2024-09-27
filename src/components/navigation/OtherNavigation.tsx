import React from "react";
import { Link } from "react-router-dom";

export default function OtherNavigation() {
  return (
    <nav className="flex right-0 justify-end">
      <ul className="flex flex-row text-slate-50 text-lg font-semibold mx-4 p-2">
        <li className="m-5 px-5">
          <Link to="/">Home</Link>
        </li>
        <li className="m-5 px-5">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
