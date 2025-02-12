// "use client";
// import { Box, Typography } from "@mui/material";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Image from "next/image";
// import Steady from "@/_assets/pngs/steady.png";
// import Divider from "@mui/material/Divider";
// export default function SliderSection() {
//   var settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <Box
//       sx={{
//         p: "100px 120px",
//         backgroundColor: "#000",
//         position: "relative",
//         "& .slick-prev": {
//           left: "20px",
//           zIndex: 2,
//         },
//         "& .slick-next": {
//           right: "20px",
//           zIndex: 2,
//         },
//       }}
//     >
//       <Slider {...settings}>
//         <Box sx={{ height: "700px", width: "100%", position: "relative" }}>
//           <Image
//             src={Steady}
//             alt="slider"
//             style={{ height: "100%", width: "100%" }}
//           />
//           <Box
//             sx={{
//               width: "70%",
//               position: "absolute",
//               top: "70%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               zIndex: 10,
//               color: "white",
//               textAlign: "center",
//               padding: "10px",
//             }}
//           >
//             <Divider
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 color: "#FBD784",
//                 borderBottomWidth: "2px", // Adjust divider thickness
//                 "&::before, &::after": {
//                   borderTop: "2px solid #FBD784",
//                   content: '""',
//                   width: "70px",
//                 },
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: "18px",
//                   letterSpacing: "6px",
//                   color: "#FBD784",
//                   fontWeight: "700",
//                 }}
//               >
//                 BROMO
//               </Typography>
//             </Divider>
//             <Typography
//               sx={{ fontSize: "54px", fontWeight: "700", lineHeight: "65px" }}
//             >
//               Steady your steps, we will climb together!
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: "18px",
//                 lineHeight: "30px",
//                 fontWeight: "600",
//                 mt: "20px",
//               }}
//             >
//               Enjoying the vast expanse of the sea of ​​​​sand, witnessing the
//               splendor of Mount Semeru that soars into the sky, and gazing at
//               the beauty of the sun moving out of its bed or otherwise enjoying
//               the dim twilight from the Bromo ridge is an unforgettable
//               experience when visiting Bromo.
//             </Typography>
//           </Box>
//         </Box>
//         <Box sx={{ height: "700px", width: "100%" }}>
//           <Image
//             src={Steady}
//             alt="slider"
//             style={{ height: "100%", width: "100%" }}
//           />
//         </Box>
//         <Box sx={{ height: "700px", width: "100%" }}>
//           <Image
//             src={Steady}
//             alt="slider"
//             style={{ height: "100%", width: "100%" }}
//           />
//         </Box>
//       </Slider>
//     </Box>
//   );
// }

"use client";
import { Box, Typography, Divider } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Steady from "@/_assets/pngs/steady.png";

const slides = [
  {
    id: 1,
    title: "BROMO",
    heading: "Steady your steps, we will climb together!",
    description:
      "Enjoying the vast expanse of the sea of sand, witnessing the splendor of Mount Semeru that soars into the sky, and gazing at the beauty of the sun moving out of its bed or otherwise enjoying the dim twilight from the Bromo ridge is an unforgettable experience when visiting Bromo.",
    image: Steady,
  },
  {
    id: 2,
    title: "BROMO",
    heading: "Discover the adventure that awaits you!",
    description:
      "Feel the fresh mountain air, see the breathtaking landscapes, and immerse yourself in the beauty of nature as you explore the majestic Bromo.",
    image: Steady,
  },
  {
    id: 3,
    title: "BROMO",
    heading: "A journey beyond imagination!",
    description:
      "Stand on the peak, look at the horizon, and experience a moment of awe and tranquility that only Bromo can offer.",
    image: Steady,
  },
];

export default function SliderSection() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        p: {
          xs: "25px 30px",
          sm: "50px 50px",
          md: "75px 70px",
          lg: "100px 110px",
        },
        backgroundColor: "#000",
        position: "relative",
        "& .slick-prev": {
          left: { xs: "10px", sm: "20px" },
          zIndex: 2,
        },
        "& .slick-next": {
          right: { xs: "10px", sm: "20px" },
          zIndex: 2,
        },
        maxWidth: { xl: "1535px" },
        width: { xl: "100%" },
        margin: { xl: "auto" },
      }}
    >
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box
            key={slide.id}
            sx={{
              height: { xs: "350px", sm: "450px", md: "600px", lg: "700px" },
              width: "100%",
              position: "relative",
              paddingX: "10px",
            }}
          >
            <Image
              src={slide.image}
              alt="slider"
              style={{ height: "100%", width: "100%" }}
            />
            <Box
              sx={{
                width: "70%",
                position: "absolute",
                top: { xs: "50%", sm: "60%", lg: "70%" },
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
                color: "white",
                textAlign: "center",
                padding: "10px",
              }}
            >
              <Divider
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#FBD784",
                  borderBottomWidth: "2px",
                  "&::before, &::after": {
                    borderTop: "2px solid #FBD784",
                    content: '""',
                    width: "70px",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "10px", sm: "14px", md: "18px" },
                    letterSpacing: { xs: "2px", sm: "4px", md: "6px" },
                    color: "#FBD784",
                    fontWeight: { xs: "500", sm: "600", md: "700" },
                  }}
                >
                  {slide.title}
                </Typography>
              </Divider>
              <Typography
                sx={{
                  fontSize: { xs: "24px", lg: "54px" },
                  fontWeight: { xs: "400", lg: "700" },
                  lineHeight: { xs: "30px", lg: "65px" },
                }}
              >
                {slide.heading}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "10px", sm: "14px", md: "18px" },
                  lineHeight: { xs: "14px", sm: "20px", md: "30px" },
                  fontWeight: { xs: "400", sm: "500", md: "600" },
                  mt: "20px",
                }}
              >
                {slide.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
