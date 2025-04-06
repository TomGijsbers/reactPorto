import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from "react";

// Custom styled components for luxury appearance with British Racing Green
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
    background: "rgba(0, 66, 37, 0.08)", // British Racing Green with opacity
    transform: "translateY(-2px)",
    color: theme.palette.mode === 'light' ? '#004225' : '#14b56a', // British Racing Green in light/dark mode
  },
  
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "50%",
    width: "0%",
    height: "2px",
    background: "linear-gradient(90deg, #004225, #007143)", // British Racing Green gradient
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
      background: "rgba(20, 181, 106, 0.08)", // Light British Racing Green with opacity
      transform: "translateY(-2px)",
      color: '#14b56a', // Light British Racing Green
    },
    "&::after": {
      background: "linear-gradient(90deg, #14b56a, #35d78f)", // Light British Racing Green gradient
    }
  })
}));

const DrawerNavButton = styled(Button)(({ theme }) => ({
  borderRadius: "12px",
  padding: "12px 16px",
  textTransform: "none",
  fontWeight: 600,
  letterSpacing: "0.5px",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  color: theme.palette.mode === 'light' ? '#1a2138' : '#e2e8f0',
  width: "100%",
  justifyContent: "flex-start",
  textAlign: "left",
  margin: "4px 0",
  
  "&:hover": {
    background: "rgba(0, 66, 37, 0.08)",
    color: theme.palette.mode === 'light' ? '#004225' : '#14b56a',
  },
  
  // Dark mode styling
  ...(theme.palette.mode === 'dark' && {
    "&:hover": {
      background: "rgba(20, 181, 106, 0.08)",
      color: '#14b56a',
    }
  })
}));

const BrandLogo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  background: "linear-gradient(90deg, #004225, #007143)", // British Racing Green gradient
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: "-0.5px",
  transition: "all 0.3s ease",
  
  "&:hover": {
    transform: "scale(1.05)",
  },
  
  // Dark mode styling
  ...(theme.palette.mode === 'dark' && {
    background: "linear-gradient(90deg, #14b56a, #35d78f)", // Light British Racing Green gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  })
}));

const NavBarContainer = styled(Toolbar)({
  padding: "12px 24px",
});

const MenuButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'light' ? '#1a2138' : '#e2e8f0',
  marginLeft: '8px',
}));

const NavBar = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Art", path: "/art" },
    { text: "Game", path: "/game" }
  ];

  const drawer = (
    <Box sx={{ 
      width: 250, 
      p: 3,
      height: '100%',
      background: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.95)',
      backdropFilter: "blur(20px)"
    }}>
      <BrandLogo variant="h5" component={Link} to="/" sx={{ textDecoration: 'none', my: 2, display: 'block' }}>
        Portfolio
      </BrandLogo>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.text} disablePadding>
            <DrawerNavButton 
              component={Link} 
              to={item.path} 
              onClick={handleDrawerToggle}
            >
              {item.text}
            </DrawerNavButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  return (
    <>
      <LuxuryAppBar position="sticky" elevation={0}>
        <NavBarContainer sx={{ display: "flex", justifyContent: "space-between" }}>
          <BrandLogo variant="h5" component={Link} to="/" sx={{ textDecoration: 'none' }}>
            Portfolio
          </BrandLogo>

          {/* Desktop Navigation */}
          {isDesktop ? (
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {navLinks.map((item) => (
                <NavButton key={item.text} component={Link} to={item.path}>
                  {item.text}
                </NavButton>
              ))}
            </Box>
          ) : (
            <MenuButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </MenuButton>
          )}

          {/* Theme Toggle */}
          <ThemeToggle />
        </NavBarContainer>
      </LuxuryAppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;