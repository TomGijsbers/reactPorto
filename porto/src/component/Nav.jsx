import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from "react";
import '../views/css/Nav.css';

const NavBar = () => {
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
    // { text: "Art", path: "/art" },
    { text: "Game", path: "/game" }
  ];

  const drawer = (
    <div className="drawer">
      <Link to="/" className="brand-logo" onClick={handleDrawerToggle}>
        Portfolio
      </Link>
      <ul className="drawer-nav-list">
        {navLinks.map((item) => (
          <li key={item.text} className="drawer-nav-item">
            <Link 
              to={item.path} 
              className="drawer-nav-button"
              onClick={handleDrawerToggle}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  
  return (
    <>
      <div className="luxury-nav">
        <div className="nav-container">
          <Link to="/" className="brand-logo">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          {isDesktop ? (
            <div className="nav-links">
              {navLinks.map((item) => (
                <Link key={item.text} to={item.path} className="nav-button">
                  {item.text}
                </Link>
              ))}
            </div>
          ) : (
            <button
              className="menu-button"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </button>
          )}

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>

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
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            border: 'none'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;