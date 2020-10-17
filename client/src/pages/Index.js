import React from "react";
import "../utils/css/login.css";
import "../utils/css/style.css";
import { Body } from "../components/Background";
import { Intro, Cta } from "../components/IndexPage";

function Index(){

    function goto(value){
        window.location=value
    }

    return (
    <Body>
        <section className="presentation">
            <div className="introduction">
                <Intro name="intro-text"></Intro>
                <Cta click={goto} value1="./journal" value2="/mindfulness" value3="/reminders"></Cta>
            </div>
        </section>
    </Body>
    )
}

export default Index