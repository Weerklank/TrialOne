import React from "react";
import "../utils/css/login.css";
import Beclipse from "../utils/img/big-eclipse.svg"
import Meclipse from "../utils/img/mid-eclipse.svg"
import Seclipse from "../utils/img/small-eclipse.svg"

export function Background(){
    return (
    <div>
        <img className="big-eclipse" src={Beclipse} alt="big-eclipse"/>
        <img className="medium-eclipse" src={Meclipse} alt="mid-eclipse"/>
        <img className="small-eclipse" src={Seclipse} alt="small-eclipse"/>
    </div>
    )
}

export function Body(props) {
    return(
        <main>{props.children}</main>
    )
}