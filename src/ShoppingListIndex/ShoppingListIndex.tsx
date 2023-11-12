import React from 'react';
import '../App/App.css';
import './ShoppingListIndex.css';
import {IShoppingList} from "../Interfaces/IShoppingList";
import {ShoppingListTile} from '../ShoppingListTile/ShoppingListTile';
import {CrossButton} from '../buttons/crossbutton';
import {PlusButton} from '../buttons/plusbutton';
import {shoppingLists} from "../data/lists";
import {Link} from 'react-router-dom';
import {Modal} from '../modal/Modal';

export class ShoppingListIndex extends React.Component {
    state = {
        showModal: false,
        newList: {
            name: "", items: []
        },
        lists: shoppingLists
    }

    changeName(event: React.ChangeEvent<HTMLInputElement>) {
        this.state.newList.name = event.target.value;
    };

    createNewList = () => {
        const temp = {
            id: "testid", owner: "string", name: this.state.newList.name, members: [], items: []
        };

        this.setState((prevState: {showModal: boolean, newList: {name: string, items: any[]}, lists: IShoppingList[]}) => {
            const updatedLists = [...prevState.lists, temp];
            return { lists: updatedLists };
        });
    };

    deleteList = (listId: string) => {
        this.setState((prevState: {showModal: boolean, newList: {name: string, items: any[]}, lists: IShoppingList[]}) => {
            const updatedLists = prevState.lists.filter((list) => list.id !== listId);
            return { lists: updatedLists };
        });
    }

    render() {
        const {showModal} = this.state;
        return (<div>
            {showModal && <Modal component={<div>
                <input type="text" onChange={(e) => this.changeName(e)}/>
                <button onClick={() => this.createNewList()}>
                    Submit
                </button>
            </div>} close={() => this.setState({showModal: false})}/>}
            <div className={"heading"}>
                <input type="text"/>
                <PlusButton onClick={() => this.setState({showModal: true})}/>
            </div>
            <div className={"card-container"}>
                {this.state.lists.map(list =>
                    <ShoppingListTile destroy={() => this.deleteList(list.id)}    list={list} key={list.name}/>
                )}
            </div>
        </div>);
    }
}
