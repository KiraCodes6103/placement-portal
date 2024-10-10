import { Box, styled, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbarr";
import ReactTypical from "./ReactTypical";
import heroImg from "../media/ISM_IMAGE.jpg";
import "../../css/Hero.css";
import Footer from "./Footer";
import { text } from "./Text";

const Hero = () => {
  const Text = text;
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#ffffff", // White text for contrast
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* Background image with blur */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)", // Only the background is blurred
          zIndex: -1, // Ensures it's behind the content
        }}
      />

      {/* Overlay to darken background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better readability
          zIndex: -1,
        }}
      />

      {/* Main Content */}
      <Navbar />
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <CustomBox>
          <Box sx={{ flex: "1", color: "#ffffff" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                mt: 0,
                mb: 0,
                color: "#E0E0E0",
              }}
            >
              Welcome to IIT(ISM) Dhanbad
            </Typography>

            <div style={{ height: "100px" }}>
              <Title variant="h1">
                <ReactTypical />
              </Title>
            </div>

            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#f0f0f0", // Softer white for readability
                my: 4,
              }}
            >
            {Text}
            </Typography>
            <a href = "https://www.iitism.ac.in/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffffff",
                color: "#4B0082",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              Explore Institute
            </Button>
            </a>
          </Box>
        </CustomBox>
      </Container>
      <Footer/>
    </Box>
  );
};

export default Hero;
