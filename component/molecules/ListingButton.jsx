import React from 'react'
import Button from '../atoms/Button'

function ListingButton({ buy, sell, source, consign }) {
  return (
    <div className='flex w-[600px] shadow-md transform rotate-y-1 rounded-tr-[25px]'>
      <Button onClick={buy}  variant='tl-radius' >Buy</Button>
      <Button onClick={sell} variant='rectangle' >Sell</Button>
      <Button onClick={source} variant='rectangle' >Sources</Button>
      <Button onClick={consign} variant='tr-radius' >Consign</Button>
    </div>
  )
}

export default ListingButton