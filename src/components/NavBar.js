import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // ✅ ADDED useLocation
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem"; // Corrected import (was ListItem from "@mui/material/List")
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./navbar.css";

import logo101 from "../assets/logo101.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Get the current location object
  const currentPath = location.pathname; // ✅ Get the current URL path

  const GOLDEN_COLOR = "#FFD700"; // Define Golden Color

  const menuItems = [
    { label: "Home", route: "/" },
    { label: "About Us", route: "/about" },
    { label: "Services", route: "/service" },
    { label: "Portfolio", route: "/drawing" },
    { label: "Career", route: "/career" },
    { label: "Contact", route: "/contact" },
  ];

  const handleNavigate = (route) => {
    setOpen(false);
    navigate(route);
  };

  // Function to check if the route is active
  const isRouteActive = (route) => {
    // Check for exact match, but handle the root route "/" carefully
    if (route === "/") {
        return currentPath === "/";
    }
    // For other routes, check if the current path starts with the route 
    // This handles cases like /service/detail if you want 'Services' to stay highlighted
    // For exact match, use: return currentPath === route;
    return currentPath.startsWith(route);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#242845", overflow: "hidden" }}>
        <Toolbar sx={{ width: "100%", maxWidth: "100%", overflowX: "hidden", px: { xs: 1, sm: 2 } }}>

          {/* Logo + Title */}
          <Box
            onClick={() => navigate("/")}
            sx={{ display: "flex", alignItems: "center", flexGrow: 1, cursor: "pointer" }}
          >
            <Avatar
              alt="logo"
              src={logo101}
              sx={{ width: { xs: 50, md: 80 }, height: { xs: 70, md: 120 }, mr: 1 }}
            />

            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              R & I Engineering And Technology
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuItems.map((item) => {
              const isActive = isRouteActive(item.route); // ✅ Check if active
              return (
                <Button
                  key={item.label}
                  sx={{
                    // ✅ Apply golden color if active, otherwise white
                    color: isActive ? GOLDEN_COLOR : "white",
                    // ✅ Add golden underline if active
                    borderBottom: isActive ? `2px solid ${GOLDEN_COLOR}` : 'none',
                    paddingBottom: isActive ? '5px' : '0',
                    fontWeight: isActive ? 'bold' : 'normal',
                    "&:hover": { 
                        color: GOLDEN_COLOR,
                        // Maintain the underline on hover if active
                        borderBottom: `2px solid ${GOLDEN_COLOR}`, 
                        paddingBottom: '5px'
                    },
                    marginRight: "15px",
                  }}
                  component={Link}
                  to={item.route}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={() => setOpen(true)} sx={{ color: "white", marginRight: "15px" }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ float: "right" }}>
            <CloseIcon />
          </IconButton>

          <List sx={{ mt: 4 }}>
            {menuItems.map((item) => {
              const isActive = isRouteActive(item.route); // ✅ Check if active
              return (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton 
                    onClick={() => handleNavigate(item.route)}
                    sx={{
                        // ✅ Highlight background/text color for mobile list item
                        backgroundColor: isActive ? 'rgba(255, 215, 0, 0.1)' : 'transparent', // Subtle golden background
                        '&:hover': {
                            backgroundColor: isActive ? 'rgba(255, 215, 0, 0.2)' : 'rgba(0, 0, 0, 0.04)',
                        }
                    }}
                  >
                    <ListItemText 
                        primary={item.label} 
                        sx={{ 
                            // ✅ Set text color to golden if active
                            color: isActive ? GOLDEN_COLOR : 'inherit', 
                            fontWeight: isActive ? 'bold' : 'normal'
                        }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;