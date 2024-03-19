import React from 'react'
import Button from '../atoms/Button'

function ListingButton() {
  return (
    <div className='flex w-[600px] shadow-md transform rotate-y-1 rounded-tr-[25px]'>
      <Button variant='tl-radius' >Buy</Button>
      <Button variant='rectangle' >Sell</Button>
      <Button variant='rectangle' >Sources</Button>
      <Button variant='tr-radius' >Buy</Button>
    </div>
  )
}

export default ListingButton
