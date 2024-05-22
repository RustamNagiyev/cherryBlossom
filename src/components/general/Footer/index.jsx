import React from 'react'
import "./index.css"
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-logo-display'>
          <img className='footer-logo' src={require('../../../images/logo.svg').default} alt="logo" />
        </div>
        <div className='left'>
          <h2 className='footer-header'>Menu</h2>
          <ul>
            <NavLink to="search"><li>Search</li></NavLink>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="about"><li>About us</li></NavLink>
            <NavLink to="catalog"><li>Catalog</li></NavLink>
            <NavLink to="ourcollections"><li>Collections</li></NavLink>
            <NavLink to="contacts"><li>Contacts</li></NavLink>
          </ul>
        </div>
        <div className='center'>
          <img className='footer-logo' src={require('../../../images/logo.svg').default} alt="logo" />
          <p>6201 Hollywood blvd</p>
          <p>Los Angeles, California 90028</p>
          <p>Monday - Friday 9:00 am - 8:00 pm</p>
          <p>Saturday 10:00 am - 5:00 pm</p>
          <p>Sunday 10:00 am - 5:00 pm</p>
          <p>+214 772 56 74</p>
          <p>cherryblossom@gmail.com</p>
        </div>
        <div className='right'>
          <h2 className='footer-header'>Legal Notice</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
            <li>Shipping police</li>
            <li>Billing and payment</li>
          </ul>
        </div>
      </div>
      <div className='end'>
        <img className='logo-img' src={require('../../../images/pinterest-logo.svg').default} alt="pinterest" />
        <img className='logo-img' src={require('../../../images/instagram-logo.svg').default} alt="instagram" />
        <img className='logo-img' src={require('../../../images/fb-logo.svg').default} alt="facebook" />
      </div>
      <img className='cards-img' src={require('../../../images/cards-logo.svg').default} alt="cards" />
      <p className='end-text'>© 2022, Los Angeles Florist - Cherry Blossom</p>
    </div>
  )
}
