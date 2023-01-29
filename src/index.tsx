import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reduxStore from "./Redux/ReduxStore";
import {ProfileReducer} from "./Redux/Reducers/ProfileReducer";



export const rerenderAllTree = ()=> {
    ReactDOM.render(<App
        store={reduxStore}
    />, document.getElementById('root'));
}

console.log(reduxStore.getState())
console.log(reduxStore.getState())
console.log(reduxStore.getState())
console.log(reduxStore.getState())
rerenderAllTree()
reduxStore.subscribe(rerenderAllTree) // передаем эту функцию стору, будем ее вызывать после изминения стор._стейт