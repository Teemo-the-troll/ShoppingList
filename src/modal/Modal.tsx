import React from "react";
import "./Modal.css";


export interface ModalProps {
    component: JSX.Element;
    close: () => void;
}


export class Modal extends React.Component<ModalProps, any> {
    render() {
        return (
            <div onClick={this.props.close} className={"backdrop"}>
                <div onClick={event => event.stopPropagation()} className={"modal-window"}>
                    <div className={"content"}>
                        {this.props.component}
                    </div>
                </div>
            </div>
        );
    }

}
