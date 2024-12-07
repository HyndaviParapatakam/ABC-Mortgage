import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import {loginUser} from '../services/api'

const Login = ({ onLogin }) => {
    const [userInfoData, setUserInfoData] = useState({
        customerId: '',
        password: ''
    });

  const [error, setError] = useState('');


  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserInfoData((prevData)=>({
        ...prevData,
        [name]: value
    }));
    if(userInfoData.customerId || userInfoData.password){
        setError('');
    }
 };
  const checkCustomerId = (userInfoData, userData) => {
   const result =userData.filter(user => user.customerId === userInfoData.customerId && user.password === userInfoData.password );
    return result.length > 0;
  };

  const handleLogin = async () => {
    if(!userInfoData.customerId || !userInfoData.password){
      setError('All fields are required.');
      return;
    } 
    try {
      const userData = await loginUser({ userInfoData });
      if (userData) {
        const isValid = checkCustomerId(userInfoData, userData);
        isValid ? onLogin() : setError('Invalid credentials.');
      }
    } catch (e) {
      setError('Something went wrong.');
    }
}

  return (
    <Container maxWidth='sm'>
      <Typography variant='h5'>Login Form</Typography>
      <TextField
        label="Customer ID"
        type="text"
        name="customerId"
        value={userInfoData.customerId}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        error={!!error && !userInfoData.customerId}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={userInfoData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        error={!!error && !userInfoData.password}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;