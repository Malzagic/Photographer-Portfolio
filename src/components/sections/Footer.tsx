import React from "react";
import SocialMediaBar from "../ui/SocialMediaBar";
import OtherNavigation from "../navigation/OtherNavigation";

export default function Footer() {
  return (
    <footer className="bg-slate-950/50 p-5">
      <div className="flex justify-between items-center">
        <OtherNavigation />
        <SocialMediaBar size={24} />
        <div className="mx-5">
          <h3 className="text-md text-yellow-500 font-semibold">
            Przemysław Młoczkowski Photographer
          </h3>
        </div>
      </div>
    </footer>
  );
}
