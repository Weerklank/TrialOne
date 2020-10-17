import React from "react";

export default function Nav(){
    return (
        <nav>
        <ul className="nav-links">
            <li><a className="nav-link" href="/">Home</a></li>
            <li><a className="nav-link" href="/journal">Journal</a></li>
            <li><a className="nav-link" href="/mindfulness">Mindfulness Activities</a></li>
            <li><a className="nav-link" href="/reminders">Set Reminders</a></li>
            <li><a className="nav-link" href="/">Emergency Contact Page</a></li>
        </ul>
    </nav>
    )
}