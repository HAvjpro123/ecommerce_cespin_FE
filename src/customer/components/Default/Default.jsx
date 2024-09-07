import React from 'react'
import Navigation from '../Navigation/Navigation'

const Default = ({children}) => {
  return (
    <div>
       <Navigation/>
        {children}
    </div>
   
  )
}

export default Default