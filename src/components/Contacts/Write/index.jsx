import React from 'react'
import "./index.css"

export default function Write() {
  return (
    <div className="write-main">
    <h2 className="header-com">WRITE TO US</h2>
    <div className="write-contact-area">
      <div className="write-center-box">
        <div className="top-input">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="E-mail" />
          <input type="number" placeholder="Phone number" />
        </div>
        <div className="bottom-input">
          <input type="text" placeholder="Enter your text..." />
        </div>
      </div>
    </div>
  </div>
  )
}
