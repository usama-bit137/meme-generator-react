import React from "react";
import "../Styles/Footer.css"
import github from "../Icons/gitlogo.png"

export default function Footer () {
    return (
        <footer className="footer">
            <p className="footer-text">Created by Usama Aqeel. <img src={github} width="15px" /><a className="git-link" href="https://github.com/usama-bit137">usama-bit137</a></p>
        </footer>
    )
}