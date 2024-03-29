import React from 'react'
import Listingdelte from '../molecules/Listingdelte'
import Listingoverlaymalicule from '../molecules/Listingoverlaymalicule'
import ListingBtn from '../molecules/ListingBtn'
import Dashanalitic from '../molecules/Dashanalitic'

function Listingoverall() {
  return (
    <div className='main'>
        <Listingdelte />
        <div className='flex flex-col gap-[20px]'>
        <Listingoverlaymalicule/>
        <ListingBtn/>
        </div>
        <Dashanalitic/>
    </div>
  )
}

export default Listingoverall