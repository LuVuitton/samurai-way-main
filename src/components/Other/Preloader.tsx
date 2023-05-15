import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import s from './Preloader.module.css'


export const Preloader = ()=> {
    return    <div className={s.mainWrapper}><Spinner animation="border" variant="primary" /></div>
}