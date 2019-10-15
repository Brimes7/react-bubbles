import React from "react";
import { axiosWithAuth } from "../../../util/axiosAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  axios.post('', userCredintials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      props.history.push('/dashboard');
    })
  
    // axiosWithAuth().get('endpoint/path/here').then(data => /* do something with the data */);

    //need to figure out how to use this
  
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
