"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Facebook from "@/_assets/svgs/Facebook.svg";
import Instagram from "@/_assets/svgs/instagram.svg";
import Twitter from "@/_assets/svgs/twitter.svg";
import Link from "next/link";

export default function FooterSection() {
  return (
    <Box
      sx={{
        color: "#fff",
        p: {
          xs: "25px 40px",
          sm: "50px 60px",
          md: "75px 80px",
          lg: "100px 120px",
        },
        maxWidth: { xl: "1535px" },
        width: { xl: "100%" },
        margin: { xl: "auto" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pb: "30px",
          borderBottom: "1px solid #fff",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "26px", sm: "36px", md: "48px" },
              lineHeight: "66px",
              fontWeight: "700",
            }}
          >
            QWERy
          </Typography>
          <Typography sx={{ display: { xs: "block", sm: "none" } }}>
            Ready to explore?
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            Ready to explore?
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffa343",
              color: "#000",
              height: "50px",
              fontSize: { xs: "14px", sm: "18px" },
              fontWeight: "700",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "30px", sm: "150px" },
          mt: "30px",
        }}
      >
        <Box
          sx={{
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "26px", md: "36px" },
              fontWeight: "700",
              lineHeight: { xs: "26px", sm: "46px" },
            }}
          >
            Let&apos;s go on vacation, Make your day
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: "1px solid #fff",
              maxWidth: "285px",
              width: "100%",
              mt: "20px",
            }}
          >
            <TextField
              type="email"
              placeholder="Email"
              InputProps={{
                disableUnderline: true, // Removes MUI default underline
                style: { color: "#fff" },
              }}
              sx={{
                // Placeholder styling
                "& .MuiInputBase-input::placeholder": { color: "#ccc" },

                // Remove blue border on focus
                "& .MuiInputBase-root": {
                  outline: "none",
                  "&.Mui-focused": {
                    outline: "none",
                  },
                },

                // Also remove the blue border for outlined variant (in case it applies)
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
            <Button
              sx={{
                backgroundColor: "#ffa343",
                color: "#000",
                fontSize: "20px",
                height: "55px",
              }}
            >
              &gt;
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "700", color: "#ffd1a0" }}
            >
              Services
            </Typography>
            <Typography sx={{ margin: "10px 0" }}>Email Marketing</Typography>
            <Typography sx={{ margin: "10px 0" }}>Campaigns</Typography>
            <Typography sx={{ margin: "10px 0" }}>Branding</Typography>
            <Typography sx={{ margin: "10px 0" }}>Offline</Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "700", color: "#ffd1a0" }}
            >
              About
            </Typography>
            <Typography sx={{ margin: "10px 0" }}>Our Story</Typography>
            <Typography sx={{ margin: "10px 0" }}>Benefits</Typography>
            <Typography sx={{ margin: "10px 0" }}>Team</Typography>
            <Typography sx={{ margin: "10px 0" }}>Careers</Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "700", color: "#ffd1a0" }}
            >
              Help
            </Typography>
            <Typography sx={{ margin: "10px 0" }}>FAQs</Typography>
            <Typography sx={{ margin: "10px 0" }}>Contact Us</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          m: { xs: "40px", sm: "80px 0" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: "30px", sm: "0px" },
          p: "0px 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "80px",
          }}
        >
          <Typography>Terms & Conditions</Typography>
          <Typography>Privacy Policy</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Link href="https://www.facebook.com/">
            <Image src={Facebook} alt="facebook" />
          </Link>
          <Link href="https://www.twitter.com/">
            <Image src={Twitter} alt="twitter" />
          </Link>
          <Link href="https://www.instagram.com/">
            <Image src={Instagram} alt="instagram" />
          </Link>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
          Copyright 2021 QWERy
        </Typography>
      </Box>
    </Box>
  );
}
