// src/components/Header.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

// Importing the logo
import logo from '../assets/hemlogo.png';

function Header() {
  const [activeTab, setActiveTab] = useState('Home');

  // Function to handle tab change
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ padding: '8px 24px', height: '100px' }}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center', // Center-align the content
          alignItems: 'center',
          gap: 2,
        }}
      >
        {/* Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 'auto' }}>
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ p: 0 }}>
            <img src={logo} alt="H.EM logo" style={{ width: '40px', height: '40px' }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', ml: 1 }}>
            H.EM
          </Typography>
        </Box>

        {/* Center-aligned Navigation Links */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#E0E0E0',
            borderRadius: '20px',
            padding: '4px 8px',
            gap: 2,
          }}
        >
          {['Home', 'About', 'Predict', 'Contact'].map((tab) => (
            <Button
              key={tab}
              sx={{
                fontWeight: 'bold',
                borderRadius: '20px',
                backgroundColor: activeTab === tab ? '#2F4F4F' : 'transparent',
                color: activeTab === tab ? 'white' : '#333',
                '&:hover': {
                  backgroundColor: activeTab === tab ? '#2F4F4F' : 'transparent',
                },
                minWidth: '100px',
              }}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </Button>
          ))}
        </Box>

        {/* Sign In/Sign Up Button */}
        <Button
          variant="outlined"
          color="inherit"
          sx={{
            borderColor: '#2F4F4F',
            color: '#2F4F4F',
            borderRadius: '20px',
            px: 2,
            backgroundColor: 'transparent',
            '&:hover': {
              borderColor: '#2F4F4F',
              backgroundColor: '#E0E0E0',
            },
            ml: 'auto',
          }}
        >
          Sign in | Sign up
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
