import React, {useContext} from 'react';
import '../App/App.scss';
import './ShoppingListTile.scss';
import {IShoppingList} from "../Interfaces/IShoppingList";
import { CrossButton } from '../buttons/crossbutton';
import { Link } from 'react-router-dom';
import {ThemeContext} from "../ThemeProvider/ThemeProvider";


export function ShoppingListTile(props: {list: IShoppingList, destroy: () => void}) {
    const themeContext = useContext(ThemeContext);
    return (
        <div className={"list-tile " + themeContext.theme}>
            <div style={{float:"right"}}>
                <CrossButton onClick={() => props.destroy()}/>
            </div>
            <Link to={'/detail/' + props.list.id}>
                <h3 className={"tile-heading"}> {props.list.name} </h3>
                <ul className={"item-list"}>
                    {props.list.items.map(item => <li className={item.isSatisfied ? "satisfied-item" : ""} key={item.id}>{item.amount} {item.name}</li>)}
                </ul>
            </Link>
        </div>
    );
}
