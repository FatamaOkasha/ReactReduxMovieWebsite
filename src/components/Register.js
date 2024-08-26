import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/store/slices/users";
import { useNavigate } from "react-router-dom";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { setCurrentUser } from "../redux/store/slices/users";

function Register() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    country:"",
    phone:"",
  });
  var users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log("Usersss", users);

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs ,
      	[name]:value,
    }));
  }

  function handleSubmitForm(e) {

    e.preventDefault();
    const newUser = {
      username: inputs.username,
      email: inputs.email,
      password: inputs.password,
      country: inputs.country,
      phone: inputs.phone,
    };

    if (isSignUp) {
      if (
        !users.some(
          (user) =>
            user.username === newUser.username || user.email === newUser.email
        )
      ) {
        dispatch(addUser(newUser));
        dispatch(setCurrentUser(newUser));
        setInputs({
          username: "",
          email: "",
          password: "",
          country: "",
          phone: "",
        });
        navigate("/main/profile");
      } else {
        alert("Username or Email already exists");
      }
    } else {
      const existingUser = users.find(
        (user) =>
          user.username === inputs.username &&
          user.password === inputs.password
      );

      if (existingUser) {
        dispatch(setCurrentUser(existingUser));
        setInputs({
          username: "",
          email: "",
          password: "",
          country: "",
          phone: "",
        });
        navigate("/main/profile");
      } else {
        alert("Invalid username or password");
      }
    

    }

  }





  return (
    <div>
      <form onSubmit={handleSubmitForm}>

        <Box

          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h4" padding={3} textAlign="center">
            {isSignUp ? "Signup" : "Login"}
          </Typography>

          <TextField
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Username"
            name="username"
            value={inputs.username}
            onChange={(e)=>handleChangeInput(e)}
            required
          >
            Username
          </TextField>


          {isSignUp && (
            <>
            <TextField
              margin="normal"
              type={"email"}
              variant="outlined"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={(e)=>handleChangeInput(e)}
              required
            >
              Email
            </TextField>
          

           <TextField
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Phone"
            name="phone"
            value={inputs.phone}
            onChange={handleChangeInput}
            required
          >
            Phone
          </TextField>

          <TextField
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Country"
            name="country"
            value={inputs.country}
            onChange={handleChangeInput}
            required
          >
            Country
          </TextField>
          </>

)}
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
            name="password"
            value={inputs.password}
            onChange={handleChangeInput}
            required
          >
            Password
          </TextField>

          <Button
            endIcon={
              isSignUp ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
            }
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
          >
            {isSignUp ? "SignUp" : "Login"}
          </Button>

          <Button
            onClick={() => setIsSignUp(!isSignUp)}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            {isSignUp ? "Change to Login" : "Change to Sign Up"}
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Register;
