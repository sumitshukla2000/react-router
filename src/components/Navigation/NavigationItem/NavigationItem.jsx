import React from 'react'
import { Link , NavLink } from 'react-router-dom'


const NavigationItem = (props) =>{

    return(
            <li>
            <NavLink to={props.link}
            className={({isActive})=>`py-2 px-4 block ${isActive ? "text-orange-700" : "text-gray-700"} font-semibold text-lg hover:text-orange-700`}>
            {props.children}
            </NavLink>
            </li>
    )
}

export default NavigationItem