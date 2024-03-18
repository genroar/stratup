import React from 'react'
import Button from '../atoms/Button'
import Dropdown from '../atoms/Dropdown'

function HeaderRight() {
  return (
    <div className='flex gap-[10px]  h-[40px]'>
      <Button variant='success' >Login</Button>
      <Dropdown />
    </div>
  )
}

export default HeaderRight
