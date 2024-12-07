import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import Login from './Login';

const Footer = () => (
    <Box sx={{ backgroundColor: "white", padding: '1em', borderTop: "1px solid black"}}>
      <Typography align="center">
        Contact us: email@example.com | Phone: 123-456-7890
      </Typography>
    </Box>
  );

  const Header = ({onLogout, isLoggedIn}) => (
    <Box sx={{ backgroundColor: "#d0d9f1", padding: '4em', borderBottom: "1px solid black"}}>
      <Typography align="center" sx={{fontSize: '1.5em'}}>
       ABC MORTAGE
      </Typography>
      {isLoggedIn && <Button onClick={onLogout}>Logout</Button>}
    </Box>
  );

const HomePage = ({handleLogin, handleLogout, isLoggedIn}) => {
    return (
      <Box>
        <Header onLogout={handleLogout} isLoggedIn={isLoggedIn}/>
        <Container sx={{padding: '1em',minHeight: '30em'}}>
          <Login onLogin={handleLogin}/>
          {/* <OfferComponent /> */}
        </Container>
        <Footer />
      </Box>
    );
  };

export default HomePage;