import { Box } from "@mui/material";
import Hero from "./_sections/heroSection";
import HolidaySection from "./_sections/hoildaySection";
export default function MoreInformation() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Hero />
      <HolidaySection />
    </Box>
  );
}
