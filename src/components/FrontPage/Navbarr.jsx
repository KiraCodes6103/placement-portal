import { AppBar, Box, Button, styled, Toolbar, Typography } from "@mui/material";
import logoImg from "../media/logo.png";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const recruiterLogin = () => {
    const user = auth.currentUser;
    if (user && !user.email.includes("@iitism.ac.in")) {
      navigate("/company");
    } else {
      signInWithPopup(auth, provider)
        .then((result) => {
          navigate("/company");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#4B0082",
    boxShadow: "none",
    padding: theme.spacing(2),
  }));

  const NavbarLogo = styled("img")({
    height: "40px",
    cursor: "pointer",
  });

  const NavButton = styled(Button)({
    color: "#fff",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#6A0DAD",
    },
  });

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <NavbarLogo src={logoImg} alt="logo" />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Placements, IIT(ISM)
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", gap: 2 }}>
          <NavButton onClick={() => navigate("/signin")}>Students</NavButton>
          <NavButton onClick={recruiterLogin}>Recruiter</NavButton>
          <NavButton>SCPT</NavButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
