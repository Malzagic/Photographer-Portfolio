import React, { useState, useRef, useEffect } from "react";

import HomeNavigation from "../components/navigation/HomeNavigation";
import Hero from "../components/hero/Hero";
import About from "../components/sections/About";
import Gallery from "../components/sections/Gallery";
import Awards from "../components/sections/Awards";
import Footer from "../components/sections/Footer";
import Contact from "../components/sections/Contact";
import CustomMainContainer from "../components/ui/CustomMainContainer";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const heroHeight = heroRef.current?.offsetHeight || 0;
    if (window.scrollY > heroHeight - 20) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="home">
      <HomeNavigation isVisible={isVisible} />
      <div ref={heroRef}>
        <Hero />
      </div>
      <CustomMainContainer styles="flex-1">
        <Gallery />
      </CustomMainContainer>
      <Footer />
    </div>
  );
}
