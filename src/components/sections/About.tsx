import React from "react";

import myPortrait from "../../assets/Kwadrat.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col sm:flex-row justify-center sm:justify-around items-center bg-gray-900 py-5"
    >
      <div className="flex flex-col max-w-md my-5 py-5 text-center sm:text-left">
        <h1 className="text-md text-slate-300">About me</h1>
        <h2 className="text-2xl text-yellow-500">
          Nature enthusiast, fine art photography and nightscape lover.
        </h2>
        <p className="text-lg text-slate-100">
          Welcome to my world of photography, where nature’s beauty and the
          magic of nightscapes come alive. As a dedicated nature enthusiast and
          lover of fine art photography, I strive to capture the serene and
          awe-inspiring moments that the natural world offers, especially under
          the night sky. Join me on this journey as I share my passion through
          blog posts, stunning visuals, and tips to help you appreciate and
          capture the wonders of the night. Whether you’re here to explore,
          learn, or find inspiration, I hope my work resonates with your own
          love for nature and photography.
        </p>
      </div>
      <div className="flex my-5 py-5">
        <img
          src={myPortrait}
          alt="Portrait of my self"
          className="w-[300px] h-[300px] rounded-xl"
        />
      </div>
    </div>
  );
}
