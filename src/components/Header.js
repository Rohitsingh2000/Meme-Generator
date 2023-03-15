import React from "react";
import Meme from '../images/meme.jpg'
import './style.css'

export default function Header() {
    return (
        <header className="header">
        <img src={Meme} className="header--image" alt="check"></img>
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React - Project</h4>
        </header>
    );
    }