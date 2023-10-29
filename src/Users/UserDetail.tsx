import React from "react";
import { User } from "../Interfaces/User";
import "../App/App.css";
import { CrossButton } from "../buttons/crossbutton";
import "./UserDetail.css";


export interface UserDetailProps {
    user: User;
    delete: Function;
}
export class UserDetail extends React.Component<UserDetailProps, any> {
    constructor(props: UserDetailProps) {
        super(props);
    }


    render() {
        return (
            <div className={"user-container"}>
                <div className={"svg-button"}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="77" height="88" viewBox="0 0 77 88" fill="none">
                        <circle cx="38.5" cy="38.5" r="38.5" fill="#D9D9D9"/>
                        <circle cx="38" cy="26" r="12" fill="white"/>
                        <ellipse cx="38.5" cy="69" rx="25.5" ry="19" fill="white"/>
                    </svg>
                </div>
                <div className={"name-container"}>
                    {this.props.user.id}
                </div>
                <div>
                    <CrossButton onClick={() => this.props.delete(this.props.user.id)}/>
                </div>
            </div>
        );
    }
}
