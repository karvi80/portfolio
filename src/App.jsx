import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCard from "./sections/FeatureCard";
import NavBar from "./components/NavBar";
import LogoSection from "./sections/LogoSection";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />

      <Hero />

      <ShowcaseSection />

      <LogoSection />

      <FeatureCard />

      <ExperienceSection />

      <TechStack />

      <Testimonial />

      <Contact />

      <Footer />
    </>
  );
};

export default App;
