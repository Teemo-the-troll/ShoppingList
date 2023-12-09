import React from "react";
import "../App/App.scss";
import {ThemeContext} from "../ThemeProvider/ThemeProvider";

export function CrossButton({onClick} : {onClick: () => void}) {
   const themeContext = React.useContext(ThemeContext);
   const getFill = () => {
        if (themeContext.theme === "light") {
            return "#18181e";
        } else {
            return "white";
        }
   }

   const getStroke = () => {
        if (themeContext.theme === "light") {
            return "white";
        } else {
            return "#18181e";
        }
   }
        return (
            <div className={"svg-button"} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                <rect width="43" height="43" fill={getFill()}/>
                <rect x="29.7782" y="8.97913" width="6" height="28" transform="rotate(45 29.7782 8.97913)" fill={getStroke()}/>
                <rect x="9.97913" y="13.2218" width="6" height="28" transform="rotate(-45 9.97913 13.2218)" fill={getStroke()}/>
            </svg>
        </div>
        )
}

