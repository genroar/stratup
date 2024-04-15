import AccHeader from '@/pages/accHeader'
import Acount from '@/component/organisms/account/Acount'
import React from 'react'

function Account() {
  return (
    <div>
        <AccHeader/>
        <div className='container' >
            <Acount/>
        </div>
    </div>
  )
}

export default Account