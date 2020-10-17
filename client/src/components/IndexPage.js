import React from "react";
import "../utils/css/login.css";

export function Intro(){
    return (
        <div className="intro-text">
            <h1>Mental Health and Happiness</h1>
            <p>Taking care of your emotional and mental well being is important. We are here to make it a little easier.</p>
        </div>
    )
}

export function Cta(props){
    console.log(props.click)
    return (
        <div className="cta">
            <button className="cta-select" onClick={() => {props.click(props.value1)}}>Mood</button>
            <button className="cta-select" onClick={() => {props.click(props.value2)}}>Mindfulness</button>
            <button className="cta-select" onClick={() => {props.click(props.value3)}}>Reminders</button>
        </div>
    )
}