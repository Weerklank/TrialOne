import React from "react";
import "../utils/css/login.css";
import "../utils/css/style.css";
import { Container } from "../components/Grid"

function Login(){

    return (
    <Container>
        <div className="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
                <span>Please register an account with us!</span>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Preferred Pronouns"/>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Sign In</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>Please login with your user info</p>
                    <button className="ghost" id="signIn">Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, New Friend!</h1>
                    <p>Enter your details and start your mental health journey with us</p>
                    <button className="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </Container>
    )
}

export default Login