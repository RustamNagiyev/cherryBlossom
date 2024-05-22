import React from 'react'
import "./index.css"
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className='home-header'>
            <div className='center-header'>
                <h1 className='header-text'>CHOOSE FLOWERS FOR ANY OCCASION</h1>
                <p className='bottom-text'>Our goal is to provide the highest quality and fresh flower delivery in Los Angeles.</p>
               <NavLink to="/contacts"><button className='view-now'>View now</button></NavLink> 
            </div>
            <div className='delivery-container'>
                <div className='delivery-left'>
                    <div className='start'>
                        <h3>Need flowers delivered today?</h3>
                        <p>Call or chat us</p>
                    </div>
                    <div className='end'>
                    <img src={require('../../../images/startdelivery.svg').default} alt="menu-icon" />
                    </div>
                </div>
                <div className='delivery-right'>
                    <div className='start'>
                        <h3>Free delivery within 4 miles</h3>
                        <p>No minimum order</p>
                    </div>
                    <div className='end'>
                    <img src={require('../../../images/enddelivery.svg').default} alt="menu-icon" />
                    </div>
                </div>
            </div>
        </header>
    )
}
