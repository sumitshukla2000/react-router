import React , { useState } from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import SideDrawer from './SideDrawer/SideDrawer';
const Layout = () => {
    const [toggle , setToggle] = useState(false)
    
    function toggleMenu(){
        setToggle(prev=>!prev);
        console.log("clicked")
    }

    return(
        <div>
            <Header open={toggle} clicked={toggleMenu}/>
            <Outlet />
            <Footer />
            <SideDrawer open={toggle}/>
        </div>
    )
}

export default Layout;