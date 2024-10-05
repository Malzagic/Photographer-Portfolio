import React from "react";
import SocialMediaBar from "../ui/SocialMediaBar";
import OtherNavigation from "../navigation/OtherNavigation";

export default function Footer() {
  return (
    <footer className="bg-slate-950/50 p-5">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <OtherNavigation />
        </div>
        <div className="flex-1">
          <SocialMediaBar size={24} />
        </div>
        <div className="flex-1 mx-5">
          <h3 className="hidden sm:flex justify-end text-md text-yellow-500 font-semibold">
            Przemysław Młoczkowski Photographer
          </h3>
        </div>
      </div>
    </footer>
  );
}
