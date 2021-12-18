import React from 'react'
import './index.css';
import logo from './Images/logo.png'


const Navigator = () => {
    return (
        <div className='navigationBar'>
                <img src={logo} alt="This is logo" className='logo' />
                <h1>Sagar Keep</h1>
        </div>
    )
}

export default Navigator