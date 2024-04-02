import React from 'react'
import Worksinput from '../molecules/Worksinput'
import Filterdrop from '../atoms/Filterdrop'
import Other from '../atoms/Other'
import OrderDropdown from '../atoms/OrderDropdown'
import Product from '../molecules/Product'

function BuyList() {
  return (
    <div>
        <div className='flex gap-[30px]' > 
            <Worksinput/>
            <OrderDropdown/>     
        </div>
        <div className='w-[1065px] flex flex-wrap justify-between' > 
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