import React from 'react';
import '../App/App.css';
import './ShoppingListTile.css';
import {IShoppingList} from "../Interfaces/IShoppingList";
import { CrossButton } from '../buttons/crossbutton';
import { Link } from 'react-router-dom';


export class ShoppingListTile extends React.Component<{ list: IShoppingList, destroy: () => void}> {
    render() {
        return (
            <div className={"list-tile"}>
                <div style={{float:"right"}}>
                    <CrossButton onClick={() => this.props.destroy()}/>
                </div>
                <Link to={'/detail/' + this.props.list.id}>
                    <h3 className={"tile-heading"}> {this.props.list.name} </h3>
                    <ul className={"item-list"}>
                        {this.props.list.items.map(item => <li className={item.isSatisfied ? "satisfied-item" : ""} key={item.id}>{item.amount} {item.name}</li>)}
                    </ul>
                </Link>

            </div>
        );
    }
}
