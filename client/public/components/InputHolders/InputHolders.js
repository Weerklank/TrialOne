import React from "react";
import "../../utils/css/style.css"

export function BtnColumn({lColor, children}) {
    const color = lColor.charAt(0).toUpperCase() + lColor.slice(1)
    if (lColor !== null){
        return (
            <div className={"pin button-column btn"+color}>
                {children}
            </div>
        )
    }
    else {
        return (
            <div className="pin button-column btnGold">
                {children}
            </div>
        )
    }
}

export function BtnRow({lColor, children}) {
    const color = lColor.charAt(0).toUpperCase() + lColor.slice(1)
    if (lColor !== null){
        return (
            <div className={"pin button-row btn"+color}>
                {children}
            </div>
        )
    }
    else {
        return (
            <div className="pin button-row btnGold">
                {children}
            </div>
        )
    }
}