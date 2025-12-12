import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Email, Phone } from '@mui/icons-material';
import { Link } from "react-router-dom";   // ✅ React Router Link
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BuildIcon from '@mui/icons-material/Build';

import logo from '../assets/logo101.png';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#242845',
        color: 'white',
        px: 4,
        py: 6,
      }}
    >
      <Grid container spacing={4}>

        {/* Logo + About */}
        <Grid item xs={12} md={3}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <img src={logo} alt="R&I Logo" style={{ height: 100, width: 95, marginRight: 12 }} />

          </Box>

          <Typography variant="body2" sx={{ mb: 2 }}>
            R&I provides Computer Aided Drawing and Design services.
          </Typography>

          {/* Social Icons */}
          <Box>

            <IconButton
              size="small"
              onClick={() =>
                window.open("https://www.linkedin.com/in/r-i-engineering-technolohy-7b7915392/", "_blank")
              }
              sx={{
                backgroundColor: '#242845',
                color: '#ca6730',
                borderRadius: '20px',
                p: 1,
                marginLeft: 2,
                '&:hover': { backgroundColor: '#fff' },
              }}
            >
              <LinkedIn />
            </IconButton>

            <IconButton
              size="small"
              onClick={() => window.open("https://x.com/r_and5872", "_blank")}
              sx={{
                backgroundColor: '#242845',
                color: '#ca6730',
                borderRadius: '20px',
                p: 1,
                marginLeft: 2,
                '&:hover': { backgroundColor: '#fff' },
              }}
            >
              <Twitter />
            </IconButton>

            <IconButton
              size="small"
              onClick={() =>
                window.open("https://www.facebook.com/profile.php?id=61584202712782", "_blank")
              }
              sx={{
                backgroundColor: '#242845',
                color: '#ca6730',
                borderRadius: '20px',
                p: 1,
                marginLeft: 2,
                '&:hover': { backgroundColor: '#fff' },
              }}
            >
              <Facebook />
            </IconButton>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>

          <Link to="/" style={linkStyle}>
            <HomeIcon fontSize="small" style={{ marginRight: 8, color: "#ca6730" }} />
            Home
          </Link>

          <Link to="/about" style={linkStyle}>
            <ChevronRightIcon fontSize="small" style={{ marginRight: 8, color: "#ca6730" }} />
            About
          </Link>

          <Link to="/Drawing" style={linkStyle}>
            <WorkIcon fontSize="small" style={{ marginRight: 8, color: "#ca6730" }} />
            Portfolio
          </Link>

          <Link to="/contact" style={linkStyle}>
            <ContactMailIcon fontSize="small" style={{ marginRight: 8, color: "#ca6730" }} />
            Contact
          </Link>

          <Link to="/service" style={linkStyle}>
            <BuildIcon fontSize="small" style={{ marginRight: 8, color: "#ca6730" }} />
            Rebar Service
          </Link>
        </Grid>

        {/* Services */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Services
          </Typography>
          <Link to="/fullstack-course" style={linkStyle}>
            <BuildIcon fontSize="small" style={{ marginRight: 8, color: "#ca6730" }} />
            UI/UX services
          </Link>
          <Link to="/fullstack-course" style={linkStyle}>
            <BuildIcon fontSize="small" style={{ marginRight: 8, color: "#ca6730" }} />
            UI/UX academy
          </Link>
          <Link to="/rebar-detailing" style={linkStyle}>
            <BuildIcon fontSize="small" style={{ marginRight: 8, color: "#ca6730" }} />
            Rebar Detailing
          </Link>
          <Link to="/rebar-estimation" style={linkStyle}>
            <BuildIcon fontSize="small" style={{ marginRight: 8, color: "#ca6730" }} />
             RebarEstimation
          </Link>
          <Link to="/architectural-services" style={linkStyle}>
            <BuildIcon fontSize="small" style={{ marginRight: 8, color: "#ca6730" }} />
            ArchitecturalService
          </Link>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>

          <Box display="flex" alignItems="center" mb={1}>
            <Email fontSize="small" sx={{ mr: 1, color: "#ca6730" }} />
            <Typography variant="body2">riengineeringtech@yahoo.com</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={1}>
            <Phone fontSize="small" sx={{ mr: 1, color: "#ca6730" }} />
            <Typography variant="body2">+91 9790186728</Typography>
          </Box>

          <Typography variant="body2">
            Kundrathur Main Road, Kovur, Chennai, Tamil Nadu, India - 600119
          </Typography>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} | All Rights Reserved. R&I Engineering And Technology.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

// 🔥 Style for React Router Links
const linkStyle = {
  display: "flex",
  alignItems: "center",
  color: "#fff",
  marginBottom: "10px",
  textDecoration: "none",
};
