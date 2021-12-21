import React from "react";
import './index.css';
import Logo from '../../assets/Logo.png'

export default function Header() {
    return (
        <nav className="header">
            <div className="H-content">
                <img src={Logo} alt="Logo" />
                <h1>Pontuação Buraco</h1>
            </div>
        </nav>
    )
}