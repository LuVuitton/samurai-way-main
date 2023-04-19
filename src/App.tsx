import React from 'react';
import sApp from "./App.module.css"
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import Messenger from "./components/Messenger/Messenger";
import {BrowserRouter, Route} from "react-router-dom";
import {Users} from "./components/Users/Users";
import Profile from "./components/Profile/Profile";


const App = () => {
    return (
        <BrowserRouter>

            <div className={sApp.mainWrapper}>
                <div className={sApp.header}>
                    <HeaderContainer/>
                </div>
                <div className={sApp.navBar}>
                    <NavBar/>
                </div>
                <div className={sApp.profile}>
                    <Route
                        path='/Messenger'
                        render={() => <Messenger />}/>
                    <Route
                        path='/Profile/:userID?'
                        render={() => <Profile />}/>
                    <Route
                        path='/Users'
                        render={()=> <Users />}/>
                </div>
            </div>

        </BrowserRouter>

    );
}

export default App;


//BIND STORE(oldStore)
//когда мы передаем кудато метод из стора,НО не вызваем его, this этого метода привяжется к обекту от которого будет вызываться
//например пропс, для того что бы этого не случилось, нам нужно явно привязать его к стору в том месте где мы его передаем ПС 37

