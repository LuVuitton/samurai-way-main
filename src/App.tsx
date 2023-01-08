import React, {useState} from 'react';
import './App.module.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import sApp from "./App.module.css"
import Dialogues from "./Dialogues/Dialogues";
import {BrowserRouter, Route} from "react-router-dom";
import {initialState, OnePostType} from "./InitialState";

const App = () => {

    const [mainState, setMainState] = useState(initialState)

    const addPost =(dataPost: OnePostType)=>{
        mainState.posts.push({id:dataPost.id, time:dataPost.time, text:dataPost.text}) //почему не можем пушить
        setMainState({...mainState})
    }

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
                <Route path='/DialogItem' render={()=><Dialogues messenger={mainState.messenger}/>}/>
                <Route path='/Profile' render={()=><Profile addPost={addPost} posts={mainState.posts}/>}/>
                </div>
                {/*<button onClick={addPost}>X</button>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
