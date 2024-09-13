import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

const Default = ({children}) => {
  return (
    <div>
       <Navigation/>
       {children}
       <Footer/>
    </div>
   
  )
}

export default Default