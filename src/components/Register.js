import React, { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, setCurrentUser } from '../redux/store/slices/users';
import { login } from '../redux/store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

function Register() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    country: '',
    phone: '',
  });

  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const newUser = {
      username: inputs.username,
      email: inputs.email,
      password: inputs.password,
      country: inputs.country,
      phone: inputs.phone,
    };

    if (isSignUp) {
      // Check if user exists
      const userExists = users.some(
        (user) =>
          user.username === newUser.username || user.email === newUser.email
      );

      if (!userExists) {
        // Add new user and set current user
        dispatch(addUser(newUser));
        dispatch(setCurrentUser(newUser));
        dispatch(login());
        navigate('/main/profile');
      } else {
        alert('Username or Email already exists');
      }
    } else {
      // Find existing user
      const existingUser = users.find(
        (user) =>
          user.username === inputs.username &&
          user.password === inputs.password
      );

      if (existingUser) {
        dispatch(setCurrentUser(existingUser));
        dispatch(login());
        navigate('/main/profile');
      } else {
        alert('Invalid username or password');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow="5px 5px 10px #ccc"
          sx={{
            ':hover': {
              boxShadow: '10px 10px 20px #ccc',
            },
          }}
        >
          <Typography variant="h4" padding={3} textAlign="center">
            {isSignUp ? 'Signup' : 'Login'}
          </Typography>

          <TextField
            margin="normal"
            type="text"
            variant="outlined"
            placeholder="Username"
            name="username"
            value={inputs.username}
            onChange={handleChangeInput}
            required
          />

          {isSignUp && (
            <>
              <TextField
                margin="normal"
                type="email"
                variant="outlined"
                placeholder="Email"
                name="email"
                value={inputs.email}
                onChange={handleChangeInput}
                required
              />

              <TextField
                margin="normal"
                type="text"
                variant="outlined"
                placeholder="Phone"
                name="phone"
                value={inputs.phone}
                onChange={handleChangeInput}
                required
              />

              <TextField
                margin="normal"
                type="text"
                variant="outlined"
                placeholder="Country"
                name="country"
                value={inputs.country}
                onChange={handleChangeInput}
                required
              />
            </>
          )}

          <TextField
            margin="normal"
            type="password"
            variant="outlined"
            placeholder="Password"
            name="password"
            value={inputs.password}
            onChange={handleChangeInput}
            required
          />

          <Button
            endIcon={
              isSignUp ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
            }
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
          >
            {isSignUp ? 'SignUp' : 'Login'}
          </Button>

          <Button
            onClick={() => setIsSignUp(!isSignUp)}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            {isSignUp ? 'Change to Login' : 'Change to Sign Up'}
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Register;
