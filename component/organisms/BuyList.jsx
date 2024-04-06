import React from 'react'
import Worksinput from '../molecules/Worksinput'
import Filterdrop from '../atoms/Filterdrop'
import Other from '../atoms/Other'
import OrderDropdown from '../atoms/OrderDropdown'
import Product from '../molecules/Product'

function BuyList() {
  return (
    <div className='flex flex-col gap-[30px]' >
        <div className='flex gap-[30px]' > 
            <Worksinput/>
            <OrderDropdown/>     
        </div>
        <div className='w-[1006px] gap-[30px] flex flex-wrap ' > 
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
    </div>
  )
}

export default BuyList