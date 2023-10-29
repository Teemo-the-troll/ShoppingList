import React from 'react';
import logo from '../logo.svg';
import './App.css';
import {ShoppingList} from "../ShoppingList/ShoppingList";
import {ShoppingListDetail} from "../ShoppingListDetail/ShoppingListDetail";
import {IShoppingList} from "../Interfaces/IShoppingList";

function App() {

  const shoppingLists = [
    {
      owner: "a4e1c8f5-35d3-4d37-b3d4-09c8d6f9a59a",
      name: "Grocery List",
      members: [
        { id: "a4e1c8f5-35d3-4d37-b3d4-09c8d6f9a59a" },
        { id: "4f87b9c2-831a-4c0f-ba87-73b11ee7888b" },
        { id: "86296f6b-8ac0-4a9a-9dbb-739e8e012345" }
      ],
      items: [
        { id: '1', name: "Apples", isSatisfied: false, amount: 3 },
        { id: '2', name: "Bread", isSatisfied: true, amount: 1 },
        { id: '3', name: "Milk", isSatisfied: false, amount: 2 },
        { id: '4', name: "Eggs", isSatisfied: true, amount: 1 },
        { id: '5', name: "Chicken", isSatisfied: false, amount: 2 }
      ]
    },
    {
      owner: "4f87b9c2-831a-4c0f-ba87-73b11ee7888b",
      name: "Home Essentials",
      members: [
        { id: "4f87b9c2-831a-4c0f-ba87-73b11ee7888b" },
        { id: "a4e1c8f5-35d3-4d37-b3d4-09c8d6f9a59a" }
      ],
      items: [
        { id: '1', name: "Toilet Paper", isSatisfied: true, amount: 6 },
        { id: '2', name: "Laundry Detergent", isSatisfied: false, amount: 1 },
        { id: '3', name: "Dish Soap", isSatisfied: false, amount: 2 },
        { id: '4', name: "Trash Bags", isSatisfied: true, amount: 1 },
        { id: '5', name: "Paper Towels", isSatisfied: false, amount: 3 }
      ]
    },
    {
      owner: "86296f6b-8ac0-4a9a-9dbb-739e8e012345",
      name: "Weekend BBQ",
      members: [
        { id: "86296f6b-8ac0-4a9a-9dbb-739e8e012345" },
        { id: "4f87b9c2-831a-4c0f-ba87-73b11ee7888b" }
      ],
      items: [
        { id: '1', name: "Hamburgers", isSatisfied: false, amount: 8 },
        { id: '2', name: "Hot Dog Buns", isSatisfied: true, amount: 2 },
        { id: '3', name: "Charcoal", isSatisfied: false, amount: 1 },
        { id: '4', name: "Soda", isSatisfied: true, amount: 12 },
        { id: '5', name: "Chips", isSatisfied: false, amount: 3 },
        { id: '6', name: "Ketchup", isSatisfied: true, amount: 1 }
      ]
    }
  ];
  return (
    <div>
      {/*make it so the shoppinglistdetail is in the middle of the window*/}
      <div style={{margin: "0 auto", marginTop: "25rem"}}>
        <ShoppingListDetail list={shoppingLists[2]}/>
      </div>
    </div>
  );
}

export default App;
