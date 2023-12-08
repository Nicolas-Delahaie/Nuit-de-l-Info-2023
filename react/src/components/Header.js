import {useContext, useEffect, useState} from "react";
import {contexte, Themes} from "../App";



function Header() {

    const {
      updateTheme
    } = useContext(contexte);


    const logo = require('./../assets/icons/logo.jpg');


    // functions
    const handleThemeSelectorChange = (event) => {
      updateTheme(event.target.value);
    }

    return (
        <header id="header" >
            <div className="logo">
            <img width="50" height="50" src={logo} alt="user-male-circle--v1"/>
            </div>
            <div className="menu">
                <div className="top-nav">
                    <div className="profile">
                        <img width="50" height="50" src="https://img.icons8.com/ios/500/user-male-circle--v1.png" alt="user-male-circle--v1"/>
                        <p>Mathis.h11</p>
                    </div>
                    <div className="consommation">
                        <p>Consommation de la page :</p>
                        <div className="consommation-info">
                            <p>2,02 gCO2</p>
                            <p>4,02 cl</p>
                        </div>
                    </div>
                </div>
                <div className="bottom-nav">
                    <ul>
                        <li><a href="/">ACCUEIL</a></li>
                        <li><a href="/to-inform">S'INFORMER</a></li>
                        <li><a href="/to-train">SE FORMER</a></li>
                        <li><a href="/news">QUOI DE NEUF ?</a></li>
                        <li><a href="/kgames">JEUX LUDIQUES</a></li>

                        <select
                          name="themeSelector"
                          id="themeSelector"

                          onChange={handleThemeSelectorChange}
                        >
                            {
                                Object.keys(Themes).map((key, index) => {
                                    return (
                                        <option key={index} value={Themes[key]} selected={
                                          localStorage.getItem('theme') === Themes[key]
                                        }>{key}</option>
                                    )
                                })
                            }
                        </select>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;
