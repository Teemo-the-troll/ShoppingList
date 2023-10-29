import {IShoppingListItem} from "./IShoppingListItem";
import {IShoppingList} from "./IShoppingList";
import { User } from "./User";

export interface ShoppingListDetailProps {
    list: IShoppingList
}

export interface ShoppingListDetailState {
    items: IShoppingListItem[];
    members: User[];
    editing: boolean;
    name: string;
    openModal: boolean;
}
