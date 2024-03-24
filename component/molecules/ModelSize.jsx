import React from 'react'
import WatchModel from '../atoms/WatchModel'

function ModelSize() {
  return (
    <div className=' w-[730px] flex flex-wrap gap-[10px]'>
        <WatchModel text='28mm' />
        <WatchModel text='33mm' />
        <WatchModel text='33mm' />
        <WatchModel text='36mm' />
        <WatchModel text='40mm' />
        <WatchModel text='41mm' />
        <WatchModel text='42mm' />
        <WatchModel text='44mm' />
    </div>
  )
}

export default ModelSize