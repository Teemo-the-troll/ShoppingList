import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ShoppingListIndex} from "../ShoppingListIndex/ShoppingListIndex";
import React, {useContext} from "react";
import ShoppingListDetail from "../ShoppingListDetail/ShoppingListDetail";
import {ThemeContext} from "../ThemeProvider/ThemeProvider";
import './Container.css'
import i18n from "i18next";
import {useTranslation} from "react-i18next";

export function Container() {


    const themeContext = useContext(ThemeContext)

    const handleThemeChange = () => {
        themeContext.toggleTheme()
        console.log(themeContext.theme)
    }

    const languages = {
        "en": {nativeName: 'English'},
        "cs": {nativeName: 'Čeština'},
    }

    const {t} = useTranslation();

    const buttonName = themeContext.theme === "light" ? "dark-mode" : "light-mode";

    return (
        <div className={"container " + themeContext.theme}>
            <nav className={themeContext.theme}>
                <button onClick={handleThemeChange}>{t(buttonName) }</button>
                <div>
                    {Object.keys(languages).map((lng) => (
                        <button key={lng}
                                type="submit" onClick={() => i18n.changeLanguage(lng)}>
                            {(languages as any)[lng].nativeName}
                        </button>
                    ))}
                </div>
            </nav>
            <Router>
                <Routes>
                    <Route path={"/"} Component={ShoppingListIndex}/>
                    <Route path={"/detail/:id"} Component={ShoppingListDetail}/>
                </Routes>
            </Router>
        </div>);
}
