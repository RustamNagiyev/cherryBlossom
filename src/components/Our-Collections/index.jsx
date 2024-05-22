import React from 'react'
import OurCollections from '../Home/OurCollections';
import "./index.css"
import { Link } from 'react-router-dom';

export default function OurCollectionsMain() {
  return (
    <div className='our-collection-main'>
      <div className='container'>
     <div className="page-info-nav">
        <Link to={'/'}><h4>{"home"} /</h4></Link>
        <span>&nbsp; {"collections"}</span>
      </div>
      </div>
    <OurCollections/>
    </div>
  )
}
