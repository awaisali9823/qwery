import NavBar from "@/_components/navbar";
import { Box, Typography } from "@mui/material";
import bgImage from "@/_assets/pngs/hero.png";
import Link from "next/link";
import Facebook from "@/_assets/svgs/Facebook.svg";
import Instagram from "@/_assets/svgs/instagram.svg";
import Twitter from "@/_assets/svgs/twitter.svg";
import Arrow from "@/_assets/svgs/down-arrow.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          height: { xs: "500px", sm: "600px", md: "750px", lg: "900px" },
          pt: 0.1,
          pl: { xs: "20px", sm: "40px", md: "60", lg: "80px" },
          pr: { xs: "20px", sm: "40px", md: "60", lg: "80px" },
          position: "relative",
          maxWidth: { xl: "1535px" },
          width: { xl: "100%" },
          margin: { xl: "auto" },
        }}
      >
        <NavBar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: "40px", sm: "120px" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "10px", sm: "14px", md: "18px" },
                color: "#ffc178",
                mb: { xs: "10px", sm: "20px" },
                letterSpacing: { xs: "2px", sm: "3px", md: "4px" },
                display: "flex",
                alignItems: "center",
                gap: { xs: "12px", sm: "20px", md: "30px" },
              }}
            >
              <Typography
                sx={{
                  width: { xs: "20px", sm: "40px", md: "72px" },
                  height: { xs: "1px", sm: "2px" },
                  backgroundColor: "#ffc178",
                }}
              ></Typography>
              EXPLORE THE NATURE BEAUTY
            </Typography>
            <Typography
              variant="h1"
              sx={{
                // width: "670px",
                fontSize: { xs: "26px", sm: "44px", md: "76px" },
                lineHeight: { xs: "25px", sm: "50px", md: "80px" },
                fontWeight: { xs: "500", sm: "600", md: "700" },
                color: "#fff",
              }}
            >
              Discover <br />
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: "22px", sm: "38px", md: "68px" },
                  fontWeight: { xs: "300", sm: "400" },
                }}
              >
                Wonderful Indonesia
              </Typography>
            </Typography>
            <Link href="">
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "10px", sm: "14px", md: "18px" },
                  fontWeight: "400",
                  mt: { xs: "15px", sm: "30px", md: "40px" },
                  float: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                Scroll down
                <Image src={Arrow} alt="arrow" height={15} />
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            gap: { xs: "10px", sm: "20px" },
            flexDirection: "column",
            alignItems: "start",
            top: { xs: "285px", sm: "265px", md: "285px" },
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "10px", sm: "14px", md: "18px" },
              transform: "rotate(90deg)",
              mb: { xs: "20px", sm: "35px" },
              ml: { xs: "-13px", sm: "-25px", md: "-35px" },
              letterSpacing: { xs: "1px", sm: "2px" },
            }}
          >
            Follow us
          </Typography>
          <Link href="https://www.instagram.com/">
            <Image src={Instagram} alt="instagram" />
          </Link>
          <Link href="https://www.twitter.com/">
            <Image src={Twitter} alt="twitter" />
          </Link>
          <Link href="https://www.facebook.com/">
            <Image src={Facebook} alt="facebook" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
