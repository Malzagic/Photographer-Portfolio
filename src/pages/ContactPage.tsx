import React from "react";
import HomeNavigation from "../components/navigation/HomeNavigation";
import PageHero from "../components/hero/PageHero";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import CustomMainContainer from "../components/ui/CustomMainContainer";

export default function ContactPage() {
  return (
    <div>
      <HomeNavigation isVisible={true} />
      <PageHero title="Contact" />
      <CustomMainContainer>
        <Contact />
      </CustomMainContainer>
      <Footer />
    </div>
  );
}
