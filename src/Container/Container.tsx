import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ShoppingListIndex} from "../ShoppingListIndex/ShoppingListIndex";
import React, {useContext} from "react";
import ShoppingListDetail from "../ShoppingListDetail/ShoppingListDetail";
import {ThemeContext} from "../ThemeProvider/ThemeProvider";
import './Container.css'

export function Container() {


    const themeContext = useContext(ThemeContext)

    const handleThemeChange = () => {
        themeContext.toggleTheme()
        console.log(themeContext.theme)
    }

    const buttonName = themeContext.theme === "light" ? "Dark mode" : "Light mode";

    return (
        <div className={"container " + themeContext.theme}>
            <nav className={themeContext.theme}>
                <button onClick={handleThemeChange}>{buttonName}</button>
            </nav>
            <Router>
                <Routes>
                    <Route path={"/"} Component={ShoppingListIndex}/>
                    <Route path={"/detail/:id"} Component={ShoppingListDetail}/>
                </Routes>
            </Router>
        </div>);
}
