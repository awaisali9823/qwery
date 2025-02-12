"use client";
import { Box, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import Image from "next/image";
import Logo from "@/_assets/svgs/Logo.svg";
import Link from "next/link";

export default function NavBar() {
  function handleChange(e) {
    console.log("Search Value: ", e.target.value);
  }
  return (
    <Box
      sx={{
        mt: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: { xs: "22px", sm: "26px", md: "30px", lg: "32px" },
          width: { xs: "48px", sm: "64px", md: "80px", lg: "96px" },
        }}
      >
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          height: "22px",
          width: "48px",
          textAlign: "right",
        }}
      >
        <MenuTwoToneIcon />
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
          gap: { sm: "20px", md: "30px", lg: "40px" },
          color: "#fff",
          fontSize: "18px",
        }}
      >
        <Link href="">Information</Link>
        <Link href="about-us">About Us</Link>
        <Link href="culture">Culture</Link>
      </Box>
      {/* below code copied from chatgpt */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
          alignItems: "center",
        }}
      >
        <SearchIcon sx={{ color: "#fff" }} />
        <TextField
          placeholder="Search"
          variant="outlined"
          onChange={handleChange}
          sx={{
            width: { sm: "100px", md: "125px", lg: "150px" },
            // color: "#fff",
            pl: "0px",
            "& fieldset": { border: "none" }, // Removes the border for outlined variant
            "& .MuiInputBase-input": { color: "#fff", padding: "0px 5px" },
          }}
        />
      </Box>
    </Box>
  );
}
