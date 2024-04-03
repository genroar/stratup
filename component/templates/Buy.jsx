import React from 'react'
import Header from './Header'
import Filter from '../molecules/Filter'
import BuyHome from '../organisms/BuyHome'
import BuyList from '../organisms/BuyList'

function Buy() {
  return (
    <div>
        <div className='flex gap-[20px] ' >
            <Filter/>
            <BuyList/>
        </div>
    </div>
  )
}

export default Buy