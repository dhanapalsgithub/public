import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./navbar.css";

import logo101 from "../assets/logo101.png";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const GOLDEN_COLOR = "#FFD700";

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

    const isRouteActive = (route) => {
        if (route === "/") {
            return currentPath === "/";
        }
        return currentPath.startsWith(route);
    };
    
    // Check if the Academy link is active
    const isAcademyActive = isRouteActive("/fullstack-course");

    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: "#242845", overflow: "hidden" }}>
                <Toolbar sx={{ width: "100%", maxWidth: "100%", overflowX: "hidden", px: { xs: 1, sm: 2 } }}>

                    {/* 1. Main Logo, Title, and Academy Link Container (Left Side) */}
                    <Box
                        sx={{ 
                            display: "flex", 
                            alignItems: "center", 
                            flexGrow: 1, 
                            gap: { xs: '5px', md: '10px' } 
                        }}
                    >
                        {/* Logo and Wrapper for Title + Button */}
                        <Box
                            sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}
                        >
                            <Avatar
                                alt="logo"
                                src={logo101}
                                sx={{ width: { xs: 45, sm: 55, md: 80 }, height: { xs: 65, sm: 80, md: 120 }, mr: 1 }}
                                // Make the Avatar separately clickable to Home
                                onClick={() => navigate("/")}
                                style={{ cursor: 'pointer' }}
                            />

                            {/* 🔥 KEY CHANGE: Container to stack Title and Button on mobile */}
                            <Box
                                sx={{
                                    display: "flex",
                                    // Stack vertically on mobile, keep row on desktop
                                    flexDirection: { xs: 'column', md: 'row' },
                                    alignItems: { xs: 'flex-start', md: 'center' },
                                    justifyContent: 'center',
                                    height: { xs: 'auto', md: '120px' }, 
                                    gap: { xs: '2px', md: '10px' }, 
                                    py: { xs: 1, md: 0 } 
                                }}
                            >
                                {/* 🌟 Title (Clickable to Home) */}
                                <Typography
                                    variant="h6"
                                    onClick={() => navigate("/")} // Make Title clickable to Home
                                    sx={{
                                        color: "white",
                                        fontSize: { xs: "12px", sm: "14px", md: "18px" }, 
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        maxWidth: { xs: '150px', sm: '200px', md: 'none' },
                                        cursor: 'pointer' // Add cursor pointer to title
                                    }}
                                >
                                    R & I Engineering And Technology
                                </Typography>
                                
                                {/* 🚀 TechForge Academy Button - Now controlled by the parent flex container */}
                                <Button
                                    onClick={() => handleNavigate("/fullstack-course")}
                                    className="techforge-animated" 
                                    sx={{
                                        display: 'flex', 
                                        textTransform: 'none',
                                        whiteSpace: 'nowrap',
                                        fontSize: { xs: "10px", sm: "12px", md: "12px" }, 
                                        
                                        color: isAcademyActive ? GOLDEN_COLOR : "white",
                                        borderBottom: isAcademyActive ? `2px solid ${GOLDEN_COLOR}` : 'none',
                                        padding: '0 5px 5px', 
                                        fontWeight: isAcademyActive ? 'bold' : 'normal',
                                        // On mobile/small screens, add a slight left margin to align with the start of the title text
                                        marginLeft: { xs: 0, sm: 0, md: 0 }, 
                                        "&:hover": {
                                            color: GOLDEN_COLOR,
                                            borderBottom: `2px solid ${GOLDEN_COLOR}`,
                                            paddingBottom: '5px'
                                        },
                                    }}
                                >
                                    TechForge 
                                </Button>
                            </Box>
                            {/* END: Title and TechForge Button Container */}
                        </Box>
                    </Box>

                    {/* Desktop Menu (Traditional Links) */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        {menuItems.map((item) => {
                            const isActive = isRouteActive(item.route);
                            return (
                                <Button
                                    key={item.label}
                                    sx={{
                                        fontSize: { md: '13px', lg: '14px' },
                                        textTransform: 'none',
                                        whiteSpace: 'nowrap',
                                        color: isActive ? GOLDEN_COLOR : "white",
                                        borderBottom: isActive ? `2px solid ${GOLDEN_COLOR}` : 'none',
                                        paddingBottom: isActive ? '5px' : '0',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        "&:hover": {
                                            color: GOLDEN_COLOR,
                                            borderBottom: `2px solid ${GOLDEN_COLOR}`,
                                            paddingBottom: '5px'
                                        },
                                        marginRight: { md: "5px", lg: "15px" },
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

            {/* Mobile Drawer (No changes needed here) */}
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 250, p: 2 }}>
                    <IconButton onClick={() => setOpen(false)} sx={{ float: "right" }}>
                        <CloseIcon />
                    </IconButton>

                    <List sx={{ mt: 4 }}>
                        {/* TechForge Academy link in the mobile list */}
                        <ListItem key="TechForge Academy" disablePadding>
                            <ListItemButton 
                                onClick={() => handleNavigate("/fullstack-course")}
                                sx={{
                                    backgroundColor: isAcademyActive ? 'rgba(255, 215, 0, 0.1)' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: isAcademyActive ? 'rgba(255, 215, 0, 0.2)' : 'rgba(0, 0, 0, 0.04)',
                                    }
                                }}
                            >
                                <ListItemText 
                                    primary="TechForge Academy" 
                                    sx={{ 
                                        color: isAcademyActive ? GOLDEN_COLOR : 'inherit', 
                                        fontWeight: isAcademyActive ? 'bold' : 'normal',
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>

                        {/* Map existing menu items */}
                        {menuItems.map((item) => {
                            const isActive = isRouteActive(item.route);
                            return (
                                <ListItem key={item.label} disablePadding>
                                    <ListItemButton
                                        onClick={() => handleNavigate(item.route)}
                                        sx={{
                                            backgroundColor: isActive ? 'rgba(255, 215, 0, 0.1)' : 'transparent',
                                            '&:hover': {
                                                backgroundColor: isActive ? 'rgba(255, 215, 0, 0.2)' : 'rgba(0, 0, 0, 0.04)',
                                            }
                                        }}
                                    >
                                        <ListItemText
                                            primary={item.label}
                                            sx={{
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