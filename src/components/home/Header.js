import React from 'react'
import Hero from '../globals/Hero'
import aboutImg from '../../images/aboutBcg.jpeg'

const Header = () => {
    return (
       <> 
      <Hero img={aboutImg}>
        <h1>Hello From the Resort</h1>
        </Hero>
        </>
    )
}

export default Header
