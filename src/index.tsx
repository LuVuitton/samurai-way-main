import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {updateInputValue, state, subscriber} from "./State";
import {addPost} from './State'



export const rerenderAllTree = ()=> {
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        updateInputValue={updateInputValue}
    />, document.getElementById('root'));
}

rerenderAllTree()
subscriber(rerenderAllTree)