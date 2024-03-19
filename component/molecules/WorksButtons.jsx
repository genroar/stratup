import React from 'react'
import Button from '../atoms/Button'

function WorksButtons() {
  return (
    <div className='flex w-[753px] gap-[10px] bg-gray-100 rounded-[25px] ' >
      <Button variant='high-oval' >Overview</Button>
      <Button variant='rectangle-2' >Submit Ad</Button>
      <Button variant='rectangle-4' >Consign a watch</Button>
      <Button variant='rectangle-3' >Source a watch</Button>
    </div>
  )
}

export default WorksButtons
