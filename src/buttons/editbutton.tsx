import React from "react";

export class Editbutton extends React.Component<{ onClick: () => void }> {
    render() {
        return <button className={"hidden-button svg-button"} onClick={this.props.onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                <rect width="43" height="43" fill="#D9D9D9"/>
                <rect x="29.118" y="9" width="7" height="24" transform="rotate(45.5 29.118 9)" fill="white"/>
                <path d="M8.5903 34.2697L12 26L16.7227 30.8082L8.5903 34.2697Z" fill="white"/>
                <path d="M9.22954 33.7488L10.8341 30.042L12.9637 32.2092L9.22954 33.7488Z" fill="#D9D9D9"/>
            </svg>
        </button>
    }
}
