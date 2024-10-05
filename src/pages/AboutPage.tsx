import React from "react";

import HomeNavigation from "../components/navigation/HomeNavigation";
import PageHero from "../components/hero/PageHero";
import CustomMainContainer from "../components/ui/CustomMainContainer";
import About from "../components/sections/About";
import Awards from "../components/sections/Awards";

export default function AboutPage() {
  return (
    <div>
      <HomeNavigation isVisible={true} />
      <PageHero title={`About`} />
      <CustomMainContainer>
        <About />
        <Awards />
      </CustomMainContainer>
    </div>
  );
}
