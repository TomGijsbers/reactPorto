import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

// Custom styled components for luxury appearance
const LuxuryAppBar = styled(AppBar)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 8px 20px rgba(17, 24, 39, 0.08), 0 4px 8px rgba(0, 0, 0, 0.03)",
  borderBottom: "1px solid rgba(226, 232, 240, 0.8)",
  transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
  
  // Dark mode styling
  ...(theme.palette.mode === 'dark' && {
    background: "rgba(15, 23, 42, 0.9)",
    borderBottom: "1px solid rgba(51, 65, 85, 0.5)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15)"
  })
}));

const NavButton = styled(Button)(({ theme }) => ({
  borderRadius: "12px",
  padding: "8px 16px",
  textTransform: "none",
  fontWeight: 600,
  letterSpacing: "0.5px",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  color: theme.palette.mode === 'light' ? '#1a2138' : '#e2e8f0', // Explicitly set text color
  
  "&:hover": {
    background: "rgba(58, 123, 213, 0.08)",
    transform: "translateY(-2px)",
    color: theme.palette.mode === 'light' ? '#3a7bd5' : '#38bdf8', // Hover text color
  },
  
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "50%",
    width: "0%",
    height: "2px",
    background: "linear-gradient(90deg, #3a7bd5, #00d2ff)",
    transition: "all 0.3s ease",
    borderRadius: "2px",
    transform: "translateX(-50%)",
  },
  
  "&:hover::after": {
    width: "80%",
  },
  
  // Dark mode styling
  ...(theme.palette.mode === 'dark' && {
    "&:hover": {
      background: "rgba(56, 189, 248, 0.08)",
      transform: "translateY(-2px)",
      color: '#38bdf8',
    },
    "&::after": {
      background: "linear-gradient(90deg, #38bdf8, #0ea5e9)",
    }
  })
}));

const BrandLogo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  background: "linear-gradient(90deg, #3a7bd5, #00d2ff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: "-0.5px",
  transition: "all 0.3s ease",
  
  "&:hover": {
    transform: "scale(1.05)",
  },
  
  // Dark mode styling
  ...(theme.palette.mode === 'dark' && {
    background: "linear-gradient(90deg, #38bdf8, #0ea5e9)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  })
}));

const NavBarContainer = styled(Toolbar)({
  padding: "12px 24px",
});

const NavBar = () => {
  const theme = useTheme();
  
  return (
    <LuxuryAppBar position="sticky" elevation={0}>
      <NavBarContainer sx={{ display: "flex", justifyContent: "space-between" }}>
        <BrandLogo variant="h5" component={Link} to="/" sx={{ textDecoration: 'none' }}>
          Portfolio
        </BrandLogo>

        <Box sx={{ display: "flex", gap: 1.5 }}>
          <NavButton component={Link} to="/">Home</NavButton>
          <NavButton component={Link} to="/about">About</NavButton>
          <NavButton component={Link} to="/art">Art</NavButton>
          <NavButton component={Link} to="/game">Game</NavButton>
        </Box>

        {/* 🔹 Rechts uitgelijnde toggle */}
        <ThemeToggle />
      </NavBarContainer>
    </LuxuryAppBar>
  );
};

export default NavBar;