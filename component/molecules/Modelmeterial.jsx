import React from 'react'
import WatchModel from '../atoms/WatchModel'

function Modelmeterial() {
  return (
    <div
    className='w-[730px] flex flex-wrap flex-row gap-[10px]'>
        <WatchModel text='Steel' />
        <WatchModel text='Yellow Gold' />
        <WatchModel text='White Gold' />
        <WatchModel text='Rose Gold' />
        <WatchModel text='Two Tone' />
        <WatchModel text='Titanium' />
        <WatchModel text='Carbon' />
        <WatchModel text='Platinum' />
    </div>
  )
}

export default Modelmeterial