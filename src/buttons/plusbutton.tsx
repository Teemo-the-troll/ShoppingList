import React from "react";
import {ThemeContext} from "../ThemeProvider/ThemeProvider";


export function PlusButton  ({onClick}: { onClick: () => void }) {

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

        return <div className={"svg-button"} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                <rect width="43" height="43" fill={getFill()}/>
                <rect x="19" y="7" width="6" height="28" fill={getStroke()}/>
                <rect x="8" y="24" width="6" height="28" transform="rotate(-90 8 24)" fill={getStroke()}/>
            </svg>
        </div>

}
