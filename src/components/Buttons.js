import React from "react";
import "../utils/css/journal.css"

export function Button({name, values, click, children}) {
    return (
        <button className={name} value={values} onClick={() => {click(values)}}>
            {children}
        </button>
    )
}

export function NewButton({values, click, dis, sel, children}) {
    if (values === 'Sad'){
        if (sel===values) {
            return (
                <button className="newButton cry selected" disabled={dis} value={values} onClick={() => {click(values)}}>
                    {children}
                </button>
            )
        }
        else {
            return (
                <button className="newButton cry" disabled={dis} value={values} onClick={() => {click(values)}}>
                    {children}
                </button>
            )
        }
        }
    else {
        if (sel===values) {
            return (
                <button className="newButton selected" disabled={dis} value={values} onClick={() => {click(values)}}>
                    {children}
                </button>
            )   
        }
        else {
            return (
                <button className="newButton" disabled={dis} value={values} onClick={() => {click(values)}}>
                    {children}
                </button>
            )   
        }
    }
}

export function Img(props) {
    if (props.sel===props.val){
        return (
            <img className="opacity" src={props.src} alt="" />
            )
    }
    else {
        return (
            <img src={props.src} alt="" />
            )
    }
}