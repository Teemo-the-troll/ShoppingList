import React from "react";
import "../App/App.css";

export class CrossButton extends React.Component<{ onClick: () => void }> {
    render() {
        return <div className={"svg-button"} onClick={this.props.onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                <rect width="43" height="43" fill="#D9D9D9"/>
                <rect x="29.7782" y="8.97913" width="6" height="28" transform="rotate(45 29.7782 8.97913)" fill="white"/>
                <rect x="9.97913" y="13.2218" width="6" height="28" transform="rotate(-45 9.97913 13.2218)" fill="white"/>
            </svg>
        </div>
    }
}

