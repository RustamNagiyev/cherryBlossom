import React from 'react'
import "./index.css"

export default function Choose() {
  return (
    <div className='choose'>
  <h2 className='header-com'>WHY CHOOSE US?</h2>
      <div className='main-choose-container'>
      <div className='choose-card'>
        <div className='choose-container'>
          <div className='text'>Extensive сhoice</div>
          <img className='choose-img' src={require('../../../images/click.svg').default} alt="collections" />
          <div className='images'>
          <img src={require('../../../images/back-click.svg').default} alt="collections" />
        </div>
        </div>
        <p className='choose-text'>We have a huge selection of the most beautiful flowers in town. Our flower shop stocks all types of flowers, including roses, tulips, lilies, and more!</p>
      </div>
      <div className='choose-card'>
        <div className='choose-container'>
          <div className='text'>Extensive сhoice</div>
          <img className='choose-img' src={require('../../../images/ring.svg').default} alt="collections" />
          <div className='images'>
          <img src={require('../../../images/back-ring.svg').default} alt="collections" />
        </div>
        </div>
        <p className='choose-text'>We have a huge selection of the most beautiful flowers in town. Our flower shop stocks all types of flowers, including roses, tulips, lilies, and more!</p>
      </div>
      <div className='choose-card'>
        <div className='choose-container'>
          <div className='text'>Extensive сhoice</div>
          <img className='choose-img' src={require('../../../images/global.svg').default} alt="collections" />
          <div className='images'>
          <img src={require('../../../images/back-global.svg').default} alt="collections" />
        </div>
       
        </div>
        <p className='choose-text'>We have a huge selection of the most beautiful flowers in town. Our flower shop stocks all types of flowers, including roses, tulips, lilies, and more!</p>
      </div>
      </div>
    </div>
  )
}
