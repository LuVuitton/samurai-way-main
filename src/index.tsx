import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/Store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


// export const rerenderAllTree = () => {

ReactDOM.render(
    <Provider store={store}>
        {/*<BrowserRouter basename={process.env.PUBLIC_URL}>*/}
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));


// }
// rerenderAllTree()
// store.subscribe(rerenderAllTree) // передаем эту функцию стору, будем ее вызывать после изминения стор._стейт

// закоментировали ререндер и субскрайб из-за того что используем коннект, коннект сам подписывается и перерисовывает компоненту
// ... каждый раз когда в стейте(по средством редьюсера или не только) происходят изменения то вызываются все mapStateToProps
// после этого реакт сравнивает содержимое нового(текущиего) обьекта что возвразает mapStateToProps и старого(предидущего)
// если он находит изменения внутри содержимого, то перерисовывает компоненту, если нет то не перерисовывает
// если в редьюсере мы не придерживаемся иммутабельности и изменяем старый обьект, то мы не создаем новый обьект, соответствено
// ссылка на обьект остаеттся старой, соответственно реакт не видит изменений(не смотрит на собдрдимое обьекта), соответственно
// ничего не переисовывает соответственносоответственно соответственно
