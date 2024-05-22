import React from 'react'
import Header from './Header'
import TopRated from './TopRated'
import OurCollections from './OurCollections'
import Qustions from './Questions'
import Follow from './Follow'
import Address from './Address'
import OurBlog from './OurBlogs'
import Choose from './Choose'
import Subscribe from './Subscribe'

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <TopRated cardCount={6} header={"TOP RATED"}/>
      <OurCollections />
      <Choose />
      <Subscribe />
      <Qustions />
      <Follow />
      <OurBlog />
      <Address />
    </div>
  )
}
//setr 16 card sayini mueyyen edirik