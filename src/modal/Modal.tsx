import React from "react";
import "./Modal.scss";
import {ThemeContext} from "../ThemeProvider/ThemeProvider";


export interface ModalProps {
    component: JSX.Element;
    close: () => void;
}
export function Modal(props: ModalProps) {
    const themeContext = React.useContext(ThemeContext);
    return (
        <div onClick={props.close} className={"backdrop"}>
            <div onClick={event => event.stopPropagation()} className={"modal-window " + themeContext.theme}>
                <div className={"content"}>
                    {props.component}
                </div>
            </div>
        </div>);
}
