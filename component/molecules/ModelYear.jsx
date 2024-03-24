import React from 'react'
import WatchModel from '../atoms/WatchModel'

function ModelYear() {
  return (
    <div className='w-[730px] flex flex-wrap gap-[10px]'>
        <WatchModel text='2024' />
        <WatchModel text='2023' />
        <WatchModel text='2022' />
        <WatchModel text='2021' />
        <WatchModel text='2020' />
        <WatchModel text='2019' />
        <WatchModel text='2018' />
        <WatchModel text='2017' />
    </div>
  )
}

export default ModelYear