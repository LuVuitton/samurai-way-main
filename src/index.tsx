import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/ReduxStore";



export const rerenderAllTree = ()=> {
    ReactDOM.render(<App
        store={store}
    />, document.getElementById('root'));
}


rerenderAllTree()
store.subscribe(rerenderAllTree) // передаем эту функцию стору, будем ее вызывать после изминения стор._стейт