import { Box } from "@mui/material";
import Hero from "./_sections/heroSection";
import HolidaySection from "./_sections/hoildaySection";
import SliderSection from "./_sections/sliderSection";

export default function HomePage() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Hero />
      <HolidaySection />
      <SliderSection />
    </Box>
  );
}
