import React from 'react'
import WatchModel from '../atoms/WatchModel'

function ModelPaper() {
  return (
    <div className='flex flex-col gap-[10px]'>
        <WatchModel text='Box & Papers' />
        <WatchModel text='Box Only' />
        <WatchModel text='Papers Only' />
        <WatchModel text='No Box and Papers' />
    </div>
  )
}

export default ModelPaper