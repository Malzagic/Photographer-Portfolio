import React from "react";

type PROPS = {
  title: string;
};

export default function PageHero({ title }: PROPS) {
  return (
    <header className="pageHero relative mb-5 pb-5">
      <div className="absolute bg-slate-900 z-0 w-full h-full opacity-30"></div>
      <div className="flex flex-1 justify-center items-center mt-5">
        <h1 className="text-5xl font-bold text-yellow-500 z-0">{title}</h1>
      </div>
    </header>
  );
}
