import React from 'react';
import './App.module.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import sApp from "./App.module.css"
import Dialogues from "./Dialogues/Dialogues";
import {BrowserRouter, Route} from "react-router-dom";
import {AppPropsType} from "./Types";



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
                    <Route
                        path='/DialogItem'
                        render={() => <Dialogues state={props.store.getState()}
                                                 dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route
                        path='/Profile'
                        //когда мы передаем кудато метод из стора,НО не вызваем его, this этого метода привяжется к обекту от которого будет вызываться
                        //например пропс, для того что бы этого не случилось, нам нужно явно привязать его к стору в том месте где мы его передаем ПС 37
                        render={() => <Profile state={props.store.getState()}
                                               dispatch={props.store.dispatch.bind(props.store)}/>}/>
                </div>
            </div>

        </BrowserRouter>

    );
}

export default App;
