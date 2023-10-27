import React from 'react'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const SideDrawer = (props) => { 
    let attachClass = [`py-2 fixed  inset-y-0 top-20 right-40 duration-300 translate-x-80 md:hidden`]

    if(props.open){
        attachClass = [`py-3 mt-4 fixed inset-y-0 top-20 right-40 duration-300 md:hidden`]
    }
   
    return(
            <div className={attachClass}>
                <div className='border bg-white rounded shadow-xl px-6 mx-auto translate-x-full'>  
                    <p className='text- font-semibold text-center border-b pb-1'>Toolbar</p>
                    <NavigationItems />
                </div>
            </div>
    )
}

export default SideDrawer;