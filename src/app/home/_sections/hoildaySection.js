import { Box, Typography } from "@mui/material";
import Link from "next/link";
import View from "@/_assets/pngs/view.png";
import Image from "next/image";
import Arrow from "@/_assets/svgs/right-arrow.svg";
export default function HolidaySection() {
  return (
    <Box
      sx={{
        pl: { xs: "30px", sm: "40px", md: "60", lg: "120px" },
        pr: { xs: "30px", sm: "40px", md: "60", lg: "120px" },
        pb: "20px",
        maxWidth: { xl: "1535px" },
        width: { xl: "100%" },
        margin: { xl: "auto" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "space-between",
          gap: { md: "20px", lg: "0px" },
          alignItems: "center",
          mt: { xs: "-1px", sm: "-10px", md: "-60px", lg: "-100px" },
          position: "relative",
          zIndex: "9",
        }}
      >
        <Box
          sx={{
            maxWidth: { md: "400px" },
            height: { xs: "250px", sm: "375px", md: "600px" },
            width: { xs: "250px", sm: "350px", md: "100%", lg: "400px" },
          }}
        >
          <Image
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src={View}
            alt="view"
          />
        </Box>
        <Box
          sx={{
            maxWidth: { xs: "400px", sm: "475px", md: "550px", lg: "550px" },
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "14px", md: "18px" },
              color: "#ffc178",
              mb: { xs: "10px", sm: "20px" },
              mt: { xs: "10px", sm: "20px" },
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
            EAST NUSA TENGGARA
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "20px", sm: "38px", md: "64px" },
              fontWeight: { xs: "500", sm: "600", md: "700" },
              lineHeight: { xs: "25px", sm: "50px", md: "87px" },
            }}
          >
            Have you enjoyed your holiday?
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "10px", sm: "14px", md: "18px" },
              lineHeight: { xs: "16px", sm: "22px", md: "32px" },
              fontWeight: { xs: "400", sm: "500", md: "600" },
              mt: { xs: "10px", sm: "20px" },
            }}
          >
            You will be amazed if you take part in this sailing Komodo island
            tour package. So it is also mandatory for you, besides enjoying
            Komodo tourism on Komodo Island, you also have to taste the marine
            tourism. The beautiful waters of Komodo will make you meet many
            travelers from other countries.
          </Typography>
          <Link href="">
            <Typography
              sx={{
                color: "#ffc178",
                fontSize: { xs: "10px", sm: "14px", md: "18px" },
                fontWeight: "400",
                mt: "10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              read more
              <Image src={Arrow} alt="arrow" height={15} />
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
