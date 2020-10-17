import React from "react";
import "../utils/css/style.css";
import "../utils/css/reminders.css";
import { addElement } from "../utils/js/remindersScript.js"
import { Container } from "../components/Grid"

function Reminders(){

    return (
        <Container>
        <div class="container">
            <input type="text" class="addTxt" placeholder="Today's Goals . . ."/>
            <button class="addBtn" onclick={addElement()}>
                <img src="https://picaflor-azul.com/images/plus-circle1.png"/>
            </button>
            <div class="list"></div>
        </div>
        </Container>
    )
}

export default Reminders