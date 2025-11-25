import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Email, Phone } from '@mui/icons-material';
import logo from '../assets/logo101.png'; // ✅ Update path to match your actual logo location
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BuildIcon from '@mui/icons-material/Build';

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
        {/* About Our Company with Logo */}
        <Grid item xs={12} md={3}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <img src={logo} alt="R&I Logo" style={{ height: 100, width: 95, marginRight: 12 }} />
            <Typography variant="h6">R&I Engineering And Technology</Typography>
          </Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            R&I provides Computer Aided Drawing and Design services .
          </Typography>
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
              onClick={() =>
                window.open("https://x.com/r_and5872", "_blank")
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
              <Twitter />
            </IconButton>

            <IconButton
              size="small"
              onClick={() =>
                window.open("https://www.facebook.com/profile.php?id=61584202712782", "_blank")
              }
              
              sx={{
                backgroundColor: '#242845', // orange box
                color: '#ca6730',             // icon color
                borderRadius: '20px solid white',        // optional: rounded corners
                p: 1,
                marginLeft: 2,                      // padding inside the box
                '&:hover': {
                  backgroundColor: '#fff', // darker on hover
                },
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


          <Link href="#home" underline="hover" sx={{ display: 'flex', alignItems: 'center', color: '#fff', mb: 1 }}>
            <HomeIcon fontSize="small" sx={{ mr: 1, color: "#ca6730" }} />
            Home
          </Link>

          <Link
            href="#about"
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', color: '#fff', mb: 1 }}
          >
            <ChevronRightIcon fontSize="small" sx={{ mr: 1, color: "#ca6730" }} />
            About
          </Link>
          <Link
            href="#drawing"
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', color: '#fff', mb: 1 }}
          >
            <WorkIcon fontSize="small" sx={{ mr: 1, color: "#ca6730" }} />
            Portfolio
          </Link>
          <Link
            href="#contact"
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', color: '#fff', mb: 1 }}
          >
            <ContactMailIcon fontSize="small" sx={{ mr: 1, color: "#ca6730" }} />
            Contact
          </Link>

          <Link
            href="#service"
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', color: '#fff', mb: 1 }}
          >
            <BuildIcon fontSize="small" sx={{ mr: 1, color: "#ca6730" }} />
            Rebar Detailing
          </Link>
        </Grid>

        {/* Services */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Services
          </Typography>
          <Typography variant="body2">Steel Detailing</Typography>
          <Typography variant="body2">Formwork Detailing</Typography>
          <Typography variant="body2">BIM Detailing</Typography>
          <Typography variant="body2">PreCast Detailing</Typography>
          <Typography variant="body2">CAD Conversion</Typography>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Box display="flex" alignItems="center" mb={1}>
            <Email fontSize="small" sx={{ mr: 1, color: "#ca6730" }} />
            <Typography variant="body2">hari.irumam@gmail.com</Typography>
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
