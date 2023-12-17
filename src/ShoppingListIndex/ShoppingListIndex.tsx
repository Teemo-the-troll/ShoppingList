import React, {useContext} from 'react';
import '../App/App.scss';
import './ShoppingListIndex.scss';
import {ShoppingListTile} from '../ShoppingListTile/ShoppingListTile';
import {PlusButton} from '../buttons/plusbutton';
import {shoppingLists} from "../data/lists";
import {Modal} from '../modal/Modal';
import {ThemeContext} from "../ThemeProvider/ThemeProvider";
import {useTranslation} from "react-i18next";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

export function ShoppingListIndex() {
    const [showModal, setShowModal] = React.useState(false);
    const [newList, setNewList] = React.useState({name: "", items: []});
    const [lists, setLists] = React.useState(shoppingLists);

    const {t} = useTranslation();
    const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewList({name: event.target.value, items: []});
    };

    const createNewList = () => {
        const temp = {
            id: "testid", owner: "string", name: newList.name, members: [], items: []
        };
        const updatedLists = [...lists, temp];
        setLists(updatedLists);
    };

    const deleteList = (listId: string) => {
        const updatedLists = lists.filter((list) => list.id !== listId);
        setLists(updatedLists);
    }

    //get the count of items in each list
    // create a graph with the data
    const graphData = shoppingLists.map((list) => ({
        name: list.name,
        articles: list.items.length,
    }));


    const themeContext = useContext(ThemeContext);
    return (
        <div className={"index-container"}>
            <h3>
                {t('index-title')}
            </h3>

        <ThemeContext.Provider value={themeContext}>
            {   showModal &&
                <Modal component={
                    <div className={"modal-input"}>
                <input type="text" onChange={(e) => changeName(e)}/>
                <button onClick={() => createNewList()}>
                    {t('submit-create')}
                </button>
            </div>} close={() => setShowModal(false)}/>}
            <div className={"heading"}>
                <input type="text"/>
                <PlusButton onClick={() => setShowModal(true)}/>
            </div>
            <div className={"graph-container"}>
                <BarChart width={600} height={300} data={graphData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="articles" fill="#8884d8" />
                </BarChart>
            </div>
            <div className={"card-container"}>
                {lists.map(list => <ShoppingListTile destroy={() => deleteList(list.id)} list={list}
                                                                key={list.name}/>)}
            </div>
        </ThemeContext.Provider>
    </div>);

}
