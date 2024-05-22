import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
import TopRated from '../Home/TopRated'

export default function Catalog() {
  return (
    <div className='catalog'>
         <div className='container'>
     <div className="page-info-nav">
        <Link to={'/'}><h4>{"home"} /</h4></Link>
        <span>&nbsp; {"catalog"}</span>
      </div>
      </div>
      <TopRated cardCount={9} header={"CATALOG"} /> 
    </div>
  )
}
//setr 15 card sayini mueyyen edirik