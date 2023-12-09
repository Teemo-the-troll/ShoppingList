import React from "react";
import {ThemeContext} from "../ThemeProvider/ThemeProvider";

export function Editbutton ( {onClick} : { onClick: () => void }) {

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
        return( <button className={"hidden-button svg-button"} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                <rect width="43" height="43" fill={getFill()}/>
                <rect x="29.118" y="9" width="7" height="24" transform="rotate(45.5 29.118 9)" fill={getStroke()}/>
                <path d="M8.5903 34.2697L12 26L16.7227 30.8082L8.5903 34.2697Z" fill={getStroke()}/>
                <path d="M9.22954 33.7488L10.8341 30.042L12.9637 32.2092L9.22954 33.7488Z" fill={getStroke()}/>
            </svg>
        </button>
        );
}
