import React from 'react';
import sApp from "./App.module.css"
import HeaderContainer from "./components/Header/HeaderContainer";
import {Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Messenger from "./components/Messenger/Messenger";
import Profile from "./components/Profile/Profile";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {initializeAppTC} from "./Redux/Reducers/appReducer";
import {RootStateType} from "./Redux/Store";
import {Preloader} from "./components/Other/Preloader";
import {withSuspenseHOK} from "./customHOKs/withSuspenseHOK";

const UsersClassContainer = React.lazy(() => import ("./components/Users/UsersListClass"))
// import UsersClassContainer from "./components/Users/UsersListClass"

// HOC не создает новый уровень в иерархии компонентов,
// а просто оборачивает существующий компонент, добавляя ему дополнительную функциональность или изменяя его поведение.

class App extends React.Component<AppPropsType, any> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.isInitialized) return <Preloader/>
        return (
            <div className={sApp.mainWrapper}>
                <div className={sApp.header}>
                    <HeaderContainer/>
                </div>
                <div className={sApp.navBar}>
                    <NavBar/>
                </div>
                <div className={sApp.profile}>
                    <Switch>
                    <Route
                        path='/login'
                        render={() => <LoginContainer/>}/>
                    <Route
                        path='/Messenger'
                        render={() => <Messenger/>}/>
                    <Route
                        path='/Profile/:userID?'
                        render={() => <Profile/>}/>
                    <Route
                        path='/Users'
                        render={withSuspenseHOK(UsersClassContainer)}/>
                    <Route
                        render={() => <div>404 not found</div>}/>
                    </Switch>
                    </div>
            </div>


        );
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isInitialized: state.app.isInitialized
    }
}

export default connect(mapStateToProps, {initializeAppTC})(App);


export type AppPropsType = MapStateProps & MapDispatchProps
type MapStateProps = ReturnType<typeof mapStateToProps>
type MapDispatchProps = { initializeAppTC: () => void }


//BIND STORE(oldStore)
//когда мы передаем кудато метод из стора,НО не вызваем его, this этого метода привяжется к обекту от которого будет вызываться
//например пропс, для того что бы этого не случилось, нам нужно явно привязать его к стору в том месте где мы его передаем ПС 37

