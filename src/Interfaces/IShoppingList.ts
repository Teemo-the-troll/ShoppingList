import {IShoppingListItem} from "./IShoppingListItem";
import { User } from "./User";

export interface IShoppingList {
    id: string; // uuid
    items: IShoppingListItem[];
    owner: string; // uuid
    members: User[];
    name: string;
}
