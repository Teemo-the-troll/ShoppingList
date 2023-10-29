import React, {ChangeEvent} from 'react';
import './ShoppingListDetail.css';
import {ShoppingListDetailProps, ShoppingListDetailState} from "../Interfaces/ShoppingListDetailProps";
import {ShoppingListItem} from "../ShoppingListItem/ShoppingListItem";
import {Modal} from "../modal/Modal";
import { UserList } from '../Users/UserList';
import { Editbutton } from '../buttons/editbutton';
import { PlusButton } from '../buttons/plusbutton';
import { CrossButton } from '../buttons/crossbutton';
import { v4 as uuidv4 } from 'uuid';
export class ShoppingListDetail extends React.Component<ShoppingListDetailProps, ShoppingListDetailState> {

    constructor(props: ShoppingListDetailProps) {
        super(props);

        this.state = {
            items: this.props.list.items, name: this.props.list.name, members: this.props.list.members,
            editing: false,
            openModal: false
        }
    }

    changeName(event: ChangeEvent<HTMLInputElement>) {
        this.setState({name: event.target.value})
    }

    deleteItem(id: string) {
        let tempList = this.state.items.filter(item => {
            return item.id != id;
        })
        this.setState({items: tempList});
    }

    showUsers() {
        this.setState({openModal: true});
    }
    generateUUid() {
        return uuidv4();
    }
    addItem() {
        let tempList = this.state.items;
        tempList.push({id: this.generateUUid(), name: "New Item", amount: 1, isSatisfied: false});
        this.setState({items: tempList});
        console.log(this.state.items)
    }

    markItemAsSatisfied(id: string) {
        let tempList = this.state.items;
        tempList.forEach(item => {
            if (item.id === id) {
                item.isSatisfied = !item.isSatisfied;
            }
        })
        this.setState({items: tempList});
    }
    closeModal() {
        this.setState({openModal: false});
    }

    render() {
        return <div className={"container"}>
            {this.state.openModal && <Modal close={() => this.closeModal()} component={<UserList users={this.state.members}/>}/> }
            <div style={{margin: "0 auto", width: "fit-content"}}>
                <h3 className={"list-heading"}>
                    <input type="text" value={this.state.name} onChange={e => this.changeName(e)}/>
                    <Editbutton onClick={() => {}}/>
                </h3>
                <div className={"control-buttons"}>
                    <button className={"hidden-button svg-button"} onClick={() => this.showUsers()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                            <path d="M0 0H43V43H0V0Z" fill="#D9D9D9"/>
                            <ellipse cx="21.5" cy="36.5" rx="17.5" ry="13.5" fill="white"/>
                            <circle cx="22" cy="11" r="9" fill="white"/>
                        </svg>
                    </button>
                    <Editbutton onClick={() => this.setState({editing: !this.state.editing})}/>
                    <PlusButton onClick={() => this.addItem()}/>
                </div>
                <div>
                    {this.state.items.map((item) => {
                        return (<div className={"item-container"}>
                            <ShoppingListItem key={item.id} satisfyFunc={(itemId: string) => this.markItemAsSatisfied(itemId)} item={item}/>
                            {this.state.editing &&
                                <div className={"delete-button"}>
                                    <CrossButton key={item.id} onClick={() => this.deleteItem(item.id)}/>
                                </div>
                            }
                        </div>)
                    })}
                </div>
            </div>
        </div>;
    }

}
