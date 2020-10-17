import React from "react";

export function LoginButton(){
    return (
        <div className="login">
            <button className="login-btn"><a href="/login">Login</a></button>
        </div>
    )
}

export function Logo(){
    return (
        <div className="logo-container">
            <img src="" alt="logo"/>
            <h4 className="logo">MoodScape</h4>
        </div>
    )
}