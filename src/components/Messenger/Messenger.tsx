import React from 'react';
import sMessenger from './Messenger.module.css'
import {ConnMessengerReForm} from "./ConnMessengerReForm";
import {ConnDialogList} from "./DialogList/ConnDialogList";
import {ConnMessagesList} from "./MessagesList/ConnMessagesList";


const Messenger = () => {

    return (
        <div className={sMessenger.dialogues}>

            <ConnDialogList/>
            <ConnMessagesList/>
            {/* в коннекте фун что формируют пропсы вызывают диспатч забайдненый на стор как мы делали сами в начале*/}
            <ConnMessengerReForm/>

        </div>
    );
}

export default Messenger;

