import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'



const Base = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
            
        </>
    )
}

export default Base
