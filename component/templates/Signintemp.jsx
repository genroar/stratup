import React from 'react'
import Header from './Header'
import SignUpmol from '../molecules/SignUpmol'
import Signinmol from '../molecules/Signinmol'

function Signintemp() {
  return (
    <div>
        <Header/>
        <div className=' h-[100vh] flex items-center justify-center' >
            <Signinmol/> 
        </div>
    </div>
  )
}

export default Signintemp