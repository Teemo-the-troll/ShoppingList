import React, {ChangeEvent} from 'react';
import '../App/App.css';
import './ShoppingListItem.css';
import {IShoppingListItem} from "../Interfaces/IShoppingListItem";


export class ShoppingListItem extends React.Component<{ item: IShoppingListItem, satisfyFunc: Function }, IShoppingListItem> {

    constructor(props: { item: IShoppingListItem, satisfyFunc: Function }) {
        super(props);
        this.state = {
            name: props.item.name,
            amount: props.item.amount,
            isSatisfied: props.item.isSatisfied,
            id: this.props.item.id
        }

    }

    handleNameChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({name: event.target.value})
    }

    amountChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({amount: Number.parseInt(event.target.value)})
    }

    satisfyItem() {
        this.setState({isSatisfied: !this.state.isSatisfied});
        this.props.satisfyFunc(this.props.item.id);
    }

    render() {
        return (<div className={"item-container " + (this.state.isSatisfied ? " satisfied" : "")}>
            <div className={"property-container checkbox-container"}>
                <input checked={this.state.isSatisfied} type="checkbox"
                       onChange={() => this.satisfyItem()}/>
            </div>
            <div className={"property-container name-container"}>
                <input type="text" onChange={e => this.handleNameChange(e)} value={this.state.name}/>
            </div>
            <div className={"property-container amount-container"}>
                <input type="number" onChange={e => this.amountChange(e)} value={this.state.amount}/>
            </div>
        </div>);
    }
}
