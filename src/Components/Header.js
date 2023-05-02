import React from "react"
import "../Styles/Header.css"
import icon from "../Icons/notbad.png"
export default function Header() {
    return (
        <header className="header">
            <img 
                src= {icon} 
                className="header-icon"
            />
            <h3 className="header-title">Meme Generator</h3>
            <p className="header-name">Created by Usama Aqeel </p>
        </header>
    )
}