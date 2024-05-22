import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

export default function OurCollections() {
  return (
    <div className='our-collections'>
      <h2 className='header-com'>OUR COLLECTIONS</h2>
      <div className='collect-container'>
        <div className='collect-center'>
        <Link to="/catalog?category=BIRTHDAY" className='collections'>
            <img className='collections-img' src={require('../../../images/collectionimages/birthday.svg').default} alt="collections" />
            <p className='collect-text'>BIRTHDAY</p>
          </Link>
          <Link to="/catalog?category=WEDDING" className='collections'>
            <img className='collections-img' src={require('../../../images/collectionimages/wedding.svg').default} alt="collections" />
            <p className='collect-text'>WEDDING</p>
          </Link>
          <Link to="/catalog?category=ANNIVERSARY" className='collections'>
            <img className='collections-img' src={require('../../../images/collectionimages/anniversary.svg').default} alt="collections" />
            <p className='collect-text'>ANNIVERSARY</p>
          </Link>
          <Link to="/catalog?category=NEW BABY" className='collections'>
            <img className='collections-img' src={require('../../../images/collectionimages/newbaby.svg').default} alt="collections" />
            <p className='collect-text'>NEW BABY</p>
          </Link>
          <Link to="/catalog?category=LUXURY" className='collections'>
            <img className='collections-img' src={require('../../../images/collectionimages/luxury.svg').default} alt="collections" />
            <p className='collect-text'>LUXURY</p>
          </Link>
          <Link to="/catalog?category=GRADUATION" className='collections'>
            <img className='collections-img' src={require('../../../images/collectionimages/graduation.svg').default} alt="collections" />
            <p className='collect-text'>GRADUATION</p>
          </Link>
          <Link to="/catalog?category=NEW YEAR" className='collections'>
            <img className='collections-img' src={require('../../../images/collectionimages/newyear.svg').default} alt="collections" />
            <p className='collect-text'>NEW YEAR</p>
          </Link>
          <Link to="/catalog?category=VALENTINE’S DAY" className='collections'>
            <img className='collections-img' src={require('../../../images/collectionimages/valentines.svg').default} alt="collections" />
            <p className='collect-text'>VALENTINE’S DAY</p>
          </Link>
          <Link to="/catalog?category=SYMPATHY" className='collections'>
            <img className='collections-img' src={require('../../../images/collectionimages/sympathy.svg').default} alt="collections" />
            <p className='collect-text'>SYMPATHY</p>
          </Link>
          <Link to="/catalog?category=LOVE AND ROMANCE" className='collections'>
            <img className='collections-img' src={require('../../../images/collectionimages/loveandromance.svg').default} alt="collections" />
            <p className='collect-text'>LOVE AND ROMANCE</p>
          </Link>
          <Link to="/catalog?category=THANK YOU" className='collections'>
            <img className='collections-img' src={require('../../../images/collectionimages/thankyou.svg').default} alt="collections" />
            <p className='collect-text'>THANK YOU</p>
          </Link>
          <Link to="/catalog?category=TOYS" className='collections'>
            <img className='collections-img' src={require('../../../images/collectionimages/toys.svg').default} alt="collections" />
            <p className='collect-text'>TOYS</p>
          </Link>
          </div>  
      </div>
    </div>
  )
}
