import React from 'react'
import Worksinput from '../molecules/Worksinput'
import Filterdrop from '../atoms/Filterdrop'
import Other from '../atoms/Other'
import OrderDropdown from '../atoms/OrderDropdown'
import Product from '../molecules/Product'

function BuyList() {
  return (
    <div className='flex flex-col  gap-[10px] container' >
        <div className='flex gap-[20px] items-center pt-[30px] pb-[10px]' > 
            <Worksinput inputClass='  w-[75%]'/>
            <OrderDropdown/>     
        </div>
        <div className='gap-[20px] flex flex-wrap ' > 
          <Product productClass={'w-[31.9%]'}/>
          <Product productClass={'w-[31.9%]'}/>
          <Product productClass={'w-[31.9%]'}/>
          <Product productClass={'w-[31.9%]'}/>
          <Product productClass={'w-[31.9%]'}/>
          <Product productClass={'w-[31.9%]'}/>
        </div>
    </div>
  )
}

export default BuyList