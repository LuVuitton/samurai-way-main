import React from 'react';
import './App.module.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import sApp from "./App.module.css"
import Dialogues from "./Dialogues/Dialogues";
import {BrowserRouter, Route} from "react-router-dom";
import {AddPostType, StateType, updateInputValueType} from "./State";


type AppPropsType = {
    state: StateType,
    addPost: AddPostType,
    updateInputValue: updateInputValueType
}

const App = (props: AppPropsType) => {


    return (
        <BrowserRouter>

            <div className={sApp.mainWrapper}>
                <div className={sApp.header}>
                    <Header/>
                </div>
                <div className={sApp.navBar}>
                    <NavBar/>
                </div>
                <div className={sApp.profile}>
                    <Route path='/DialogItem' render={() => <Dialogues messenger={props.state.messenger}/>}/>
                    <Route path='/Profile' render={() => <Profile addPost={props.addPost} profile={props.state.profile} updateInputValue={props.updateInputValue}/>}/>
                </div>
            </div>

        </BrowserRouter>

    );
}

export default App;
