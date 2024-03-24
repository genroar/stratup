import React from 'react'
import WatchModel from '../atoms/WatchModel'

function ModelCondition() {
  return (
    <div className=''>
        <WatchModel text='New (Unworn)' />
        <WatchModel text='Used (Like New)' />
        <WatchModel text='Used (Signs of Use)' />
    </div>
  )
}

export default ModelCondition