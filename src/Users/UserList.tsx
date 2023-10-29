import React from "react";
import { User } from "../Interfaces/User";
import { UserDetail } from "./UserDetail";
import { PlusButton } from "../buttons/plusbutton";
import { v4 as uuidv4 } from 'uuid';


export interface IUserListProps {
    users: User[];
}

export class UserList extends React.Component<IUserListProps, IUserListProps> {

    constructor(props: IUserListProps) {
        super(props);
        this.state = {
            users: props.users
        }
    }

    addUser(id: string) {
        let uuid = uuidv4();
        this.setState({
            users: [...this.state.users, {id: uuid}]
        });
    }

    deleteUser(id: string) {
        this.setState({
            users: this.state.users.filter((user) => user.id !== id)
        });
    }

    render() {
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h3>Users</h3>
                    <PlusButton onClick={() => this.addUser("1")}/>
                </div>
                <div className={"users-container"}>
                    {this.state.users.map((user) => <UserDetail key={user.id} user={user} delete={(userId: string) => this.deleteUser(userId)} />)}
                </div>
            </div>
        );
    }
}
