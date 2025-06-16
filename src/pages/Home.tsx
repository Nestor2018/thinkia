import React from "react";
import { HeroSection } from "../components/organisms/HeroSection";
import { StepsSection } from "../components/organisms/StepsSection";
import { BenefitsSection } from "../components/organisms/BenefitsSection";
import { Footer } from "../components/organisms/Footer";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <StepsSection />
      <BenefitsSection />
      <Footer />
    </>
  );
};
