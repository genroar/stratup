
import React from 'react'
import Home from '@/component/templates/Home'
import Account from './Account'
import Source from '@/component/organisms/Source'
import Homesource from '@/component/organisms/Homesource'
import Listing from '@/component/organisms/Listing'
import Createorgan from './Createorgan'
import BLog from '@/component/organisms/BLog'
import News from '@/pages/news'
import BLoglatest from '@/component/organisms/BLoglatest'
import RolexDay from '@/component/organisms/RolexDay'
function index() {
  return (
    <div>

      <Home/>
      {/* <RolexDay/> */}
        {/* <Account/>  */}
        {/* <Listing/>  */}
        {/* <Createorgan/> */}
          {/* <BLog/> */}
      {/* <BLoglatest/> */}
      {/* <News/> */}
    </div>  
  )
}

export default index    