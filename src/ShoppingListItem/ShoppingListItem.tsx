import React, {ChangeEvent, useContext} from 'react';
import '../App/App.scss';
import './ShoppingListItem.scss';
import {IShoppingListItem} from "../Interfaces/IShoppingListItem";
import {ThemeContext} from "../ThemeProvider/ThemeProvider";


export function ShoppingListItem({propItem, satisfyFunc}: { propItem: IShoppingListItem, satisfyFunc: Function }) {
    const [item, setItem] = React.useState(propItem);

    const themeContext = useContext(ThemeContext);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setItem({...item, name: event.target.value});
    }

    const amountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setItem({...item, amount: Number.parseInt(event.target.value)});
    }

    const satisfyItem = () => {
        setItem({...item, isSatisfied: !item.isSatisfied});
        satisfyFunc(item.id);
    }
    return (<div className={"item-container " + (item.isSatisfied ? " satisfied " : "") + themeContext.theme}>
            <div className={"property-container checkbox-container"}>
                <input checked={item.isSatisfied} type="checkbox"
                       onChange={() => satisfyItem()}/>
            </div>
            <div className={"property-container name-container"}>
                <input type="text" onChange={e => handleNameChange(e)} value={item.name}/>
            </div>
            <div className={"property-container amount-container"}>
                <input type="number" onChange={e => amountChange(e)} value={item.amount}/>
            </div>
        </div>);

}
