import React from "react";
import "../utils/css/journal.css"

export function Paper({pColor, lColor, children}){
    if (pColor !== null){
        if (lColor !== null){
            return (
                <div className={"paper "+pColor+" line-"+lColor}>{children}</div>
            )
        }
        else {
            return (
                <div className={"paper "+pColor+" line-gold"}>{children}</div>
            )
        }
    }
    if (lColor !== null){
        return (
            <div className={"paper purple line-"+lColor}>{children}</div>
        )
    }
    else {
        return (
            <div className={"paper purple line-gold"}>{children}</div>
        )
    }
}

export function Lines({lColor, children}){
    if (lColor !== ""){
        return (
            <div className={"lines-"+lColor+" lines"}>{children}</div>
        )
    }
    else {
        return (
            <div className={"lines-gold lines"}>{children}</div>
        )
    }
}

export function Emote(isHidden){
    return (
        <div className={"emote "+isHidden.isHidden}>{isHidden.children}</div>
    )
}