"use client";
import { Box } from "@mui/material";
import Hero from "./_sections/heroSection";
import HolidaySection from "./_sections/hoildaySection";
import SliderSection from "./_sections/sliderSection";
import CultureSection from "./_sections/cultureSection";
import FooterSection from "@/_components/footer";
import { useRef } from "react";

export default function HomePage() {
  const sliderRef = useRef(null);
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Hero
        scrollToSlider={() =>
          sliderRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <HolidaySection />
      <SliderSection ref={sliderRef} />
      <CultureSection />
      <FooterSection />
    </Box>
  );
}
