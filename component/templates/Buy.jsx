import React from 'react'
import Product from '../molecules/Product'
import Header from '../organisms/Header'
import Filter from '../molecules/Filter'
import Filterinputs from '../molecules/Filterinputs'
function Buy() {
  return (
    <div className=''>
      <div className='header'><Header /></div>
      <div className=' mt-[40px] main flex gap-[45px] flex-row m-auto w-[93%]'>
        <div><Filter /></div>
        <div className='right'>
          <div><Filterinputs /></div>
          <div className='main-inner flex w-[1000px] gap-[20px] flex-wrap mt-[20px]'>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buy