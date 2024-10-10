import { Box, Typography, Link, Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "",
        color: "#ffffff",
        py: 4,
        mt: 4,
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Placements, IIT(ISM) Dhanbad
        </Typography>
        <Box>
          <Link
            href="#"
            sx={{ color: "#ffffff", marginLeft: 2, textDecoration: "none" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            sx={{ color: "#ffffff", marginLeft: 2, textDecoration: "none" }}
          >
            Terms of Service
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
