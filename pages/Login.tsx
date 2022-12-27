import React from "react";

import { useState } from 'react'

function Login() {

const [message, setMessage] = useState("message");
const [isLoggedIn, setIsLoggedIn] = useState("?");


    
const Login = async() => {

}

const checkLogin = async() => {

}

const logout = async() => {

}
  return (
    <div>
        <h1>Login</h1>
        <button onClick={Login}>Login</button>

        <button onClick={checkLogin}>Are you logged in?</button>

        <p style = {{color: "red"}}>{isLoggedIn}</p>

        <button onClick={logout}>Logout</button>
        
    </div>
  );
};

export default Login