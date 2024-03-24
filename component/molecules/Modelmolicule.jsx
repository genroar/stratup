import React from 'react'
import WatchModel from '../atoms/WatchModel'
function Modelmolicule() {
  return (
    <div className='text-black flex flex-row gap-[10px]'>
      <div className='1 flex flex-col gap-[10px]'>
        <WatchModel text='Model 1' />
        <WatchModel text='Model 2' />
        <WatchModel text='Model 3' />
        <WatchModel text='Model 4' />
      </div>
      <div className='2 flex flex-col gap-[10px]'>
        <WatchModel text='Model 5' />
        <WatchModel text='Model 6' />
        <WatchModel text='Model 7' />
        <WatchModel text='Model 8' />
      </div>
    </div>
  )
}

export default Modelmolicule