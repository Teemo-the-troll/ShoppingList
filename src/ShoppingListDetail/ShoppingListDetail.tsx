import React, {useState, useEffect, useContext} from 'react';
import './ShoppingListDetail.scss';
import { ShoppingListItem } from '../ShoppingListItem/ShoppingListItem';
import { Modal } from '../modal/Modal';
import { UserList } from '../Users/UserList';
import { Editbutton } from '../buttons/editbutton';
import { PlusButton } from '../buttons/plusbutton';
import { CrossButton } from '../buttons/crossbutton';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { shoppingLists } from '../data/lists';
import { User } from '../Interfaces/User';
import {ThemeContext} from "../ThemeProvider/ThemeProvider";

// Define the type for your shopping list item
type ShoppingListItemType = {
    id: string;
    name: string;
    amount: number;
    isSatisfied: boolean;
};



export function ShoppingListDetail() {
    const theme = useContext(ThemeContext);
    const { id } = useParams();
    const [items, setItems] = useState<ShoppingListItemType[]>([]); // Use the defined type
    const [members, setMembers] = useState<User[]>([]); // Assuming members are strings, adjust as needed
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('');
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        let list = shoppingLists.find((list) => list.id === id);
        if (list === undefined) {
            throw new Error('List not found');
        }
        setItems(list.items);
        setName(list.name);
        setMembers(list.members);
        setEditing(false);
        setOpenModal(false);
    }, [id]);

    const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const deleteItem = (itemId: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const showUsers = () => {
        setOpenModal(true);
    };

    const generateUUid = () => {
        return uuidv4();
    };

    const addItem = () => {
        setItems((prevItems) => [
            ...prevItems,
            { id: generateUUid(), name: 'New Item', amount: 1, isSatisfied: false },
        ]);
    };

    const markItemAsSatisfied = (itemId: string) => {
        setItems((prevItems) =>
            prevItems.map((item) => (item.id === itemId ? { ...item, isSatisfied: !item.isSatisfied } : item))
        );
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <div className={'shoppinglist-detail-container ' + theme.theme}>
            {openModal && <Modal close={() => closeModal()} component={<UserList users={members} />} />}
            <div className={"content-container"}>
                <h3 className={'list-heading'}>
                    <input type="text" value={name} onChange={(e) => changeName(e)} />
                    <Editbutton onClick={() => {}} />
                </h3>
                <div className={'control-buttons'}>
                    <button className={'hidden-button svg-button'} onClick={() => showUsers()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                            <path d="M0 0H43V43H0V0Z" fill="#D9D9D9" />
                            <ellipse cx="21.5" cy="36.5" rx="17.5" ry="13.5" fill="white" />
                            <circle cx="22" cy="11" r="9" fill="white" />
                        </svg>
                    </button>
                    <Editbutton onClick={() => setEditing(!editing)} />
                    <PlusButton onClick={() => addItem()} />
                </div>
                <div className={"items-container"}>
                    {items.map((item) => (
                        <div className={'item-container'} key={item.id}>
                            <ShoppingListItem satisfyFunc={(itemId: string) => markItemAsSatisfied(itemId)} propItem={item} />
                            {editing && (
                                <div className={'delete-button'}>
                                    <CrossButton key={item.id} onClick={() => deleteItem(item.id)} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ShoppingListDetail;
