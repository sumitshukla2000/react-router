import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = (props)=>{
    return(
        <ul className='flex items-center flex-col md:flex-row'>
            <NavigationItem clase={props.clas} link='/react-router'>
                        Home
            </NavigationItem>
            <NavigationItem link='/about'>
                        About
            </NavigationItem>
            <NavigationItem link='/contact'>
                        Contact
            </NavigationItem>
            <NavigationItem link='/github'>
                        Github
            </NavigationItem>
        </ul>
    )
}

export default NavigationItems;