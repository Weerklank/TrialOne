import React from "react";
import Nav from "./Nav";
import { LoginButton } from "./Header-components"
import "../utils/css/style.css"

export default function Header(){
    return (
        <header>
        <LoginButton></LoginButton>
        <Nav></Nav>
        </header>
    )
}