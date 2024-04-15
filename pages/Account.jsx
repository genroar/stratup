import AccHeader from '@/pages/accHeader'
import Acount from '@/component/organisms/account/Acount'
import React from 'react'

function Account() {
  return (
    <div>
        <AccHeader/>
        <div className='main_dashboard' >
          <div className='container'>
            <Acount/>
          </div>
        </div>
    </div>
  )
}

export default Account