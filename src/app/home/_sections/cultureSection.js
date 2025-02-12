import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Culture from "@/_assets/pngs/culture.png";

export default function CultureSection() {
  return (
    <Box
      sx={{
        p: {
          xs: "25px 30px",
          sm: "50px 40px",
          md: "75px 60px",
          lg: "100px 120px",
        },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: { xl: "1535px" },
        width: { xl: "100%" },
        margin: { xl: "auto" },
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "450px", sm: "450px", md: "500px", lg: "550px" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "10px", md: "20px" },
          }}
        >
          <Divider
            sx={{
              width: { xs: "20px", sm: "40px", md: "72px" },
              height: "2px",
              backgroundColor: "#fbd784",
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "14px", md: "18px" },
              lineHeight: { xs: "0px", sm: "18px", md: "24px" },
              color: "#fbd784",
              letterSpacing: { xs: "4px", sm: "5px", md: "6px" },
              fontWeight: { xs: "500", sm: "600", md: "700" },
              textTransform: "uppercase",
            }}
          >
            Indonesian Culture
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "20px", sm: "38px", md: "64px" },
            fontWeight: { xs: "500", sm: "600", md: "700" },
            lineHeight: { xs: "25px", sm: "50px", md: "87px" },
            mt: "20px",
          }}
        >
          Our culture here is very friendly to people
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontWeight: "400",
            fontSize: { xs: "10px", sm: "14px", md: "18px" },
            lineHeight: { xs: "16px", sm: "24px", md: "32px" },
            mt: { xs: "10px", sm: "20px" },
            mb: { xs: "20px", sm: "20px", md: "0px" },
          }}
        >
          known for his politeness, manners and gentleness. This becomes a
          characteristic when they mingle with other tribes and become basic
          traits that are passed down by their ancestors.
        </Typography>
      </Box>
      <Box
        sx={{
          height: { xs: "300px", sm: "400px", md: "500px" },
          width: { xs: "250px", sm: "350px", md: "400px" },
        }}
      >
        <Image
          src={Culture}
          alt="culture"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
    </Box>
  );
}
