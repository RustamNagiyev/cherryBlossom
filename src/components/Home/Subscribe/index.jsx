import React from 'react'
import "./index.css"

export default function Subscribe() {
  return (
    <div className='subscribe'>
      <div className="questions-header">
        <h3>Subscribe to our emails</h3>
        <p>Be the first to know about new collections and exclusive offers.</p>
        <div className="send-email">
          <input type="text" placeholder="E-mail" />
          <img
            className="send-img"
            src={require("../../../images/send.svg").default}
            alt="send"
          />
        </div>
      </div>
    </div>
  )
}
