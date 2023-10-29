import React from "react";


export class PlusButton extends React.Component<{ onClick: () => void }> {
    render() {
        return <div className={"svg-button"} onClick={this.props.onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                <rect width="43" height="43" fill="#D9D9D9"/>
                <rect x="19" y="7" width="6" height="28" fill="white"/>
                <rect x="8" y="24" width="6" height="28" transform="rotate(-90 8 24)" fill="white"/>
            </svg>
        </div>
    }
}
