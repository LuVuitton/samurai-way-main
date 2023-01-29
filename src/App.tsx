import React from 'react';
import sApp from "./App.module.css"
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import Messenger from "./Messenger/Messenger";
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
                        path='/Messenger'
                        render={() => <Messenger store={props.store}/>}/>
                    <Route
                        path='/Profile'
                        render={() => <Profile store={props.store}/>}/>
                </div>
            </div>

        </BrowserRouter>

    );
}

export default App;


//BIND STORE(oldStore)
//когда мы передаем кудато метод из стора,НО не вызваем его, this этого метода привяжется к обекту от которого будет вызываться
//например пропс, для того что бы этого не случилось, нам нужно явно привязать его к стору в том месте где мы его передаем ПС 37