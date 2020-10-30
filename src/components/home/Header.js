import React from 'react'
import Hero from '../globals/Hero'
import homeImg from '../../images/homeBcg.jpeg'
import Banner from '../globals/Banner'
import {PrimaryBtn} from '../globals/Buttons'

const Header = () => {
    return (
       <> 
      <Hero img={homeImg}>
        <Banner greeting="Welcome to" title="beachwalk resort" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea corrupti recusandae fugiat harum cum distinctio quis voluptates praesentium vel tenetur. Provident, ad inventore ullam quos ut facere et sint magni.">

        <PrimaryBtn t="1rem">
        View Details
        </PrimaryBtn>

        </Banner>
      
        </Hero>
        </>
    )
}

export default Header
