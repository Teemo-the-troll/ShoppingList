import React from "react";
import {User} from "../Interfaces/User";
import {UserDetail} from "./UserDetail";
import {PlusButton} from "../buttons/plusbutton";
import {v4 as uuidv4} from 'uuid';


export interface IUserListProps {
    users: User[];
}

export function UserList(props: IUserListProps) {

    const [users, setUsers] = React.useState<User[]>(props.users);

    const addUser = (id: string) => {
        let uuid = uuidv4();
        setUsers([...users, {id: uuid}]);
    }

    const deleteUser = (id: string) => {
        const tempUsers = users.filter((user) => user.id !== id);
        setUsers(tempUsers);
    }

    return (<div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h3>Users</h3>
                <PlusButton onClick={() => addUser("1")}/>
            </div>
            <div className={"users-container"}>
                {users.map((user) => <UserDetail key={user.id} user={user}
                                                 deleteFunc={() => deleteUser(user.id)}/>)}
            </div>
        </div>);
}
