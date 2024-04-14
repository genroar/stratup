import React from 'react'
import AnchorTag from '../atoms/Anchortag'
import Link from 'next/link'

function Navigation() {
  return (
<<<<<<< HEAD
    <div className='flex  h-[20px] text-gray-300 text-[16px] font-normal gap-[30px] ' >
      <Link href='/buy'>Buy</Link>
=======
    <div className='flex  h-[20px] gap-[30px] ' >
      <Link href='/buy'></Link>
>>>>>>> fc298d79642f07bd59211e6bcda80187166603be
      <Link href='/sell'>Sell</Link>
      <Link href='/sources'>Sources</Link>
      <Link href='/consign'>Consign</Link>
      <Link href='/about'>About Us</Link>
      <Link href='/blog'>Blog</Link>
    </div>
  )
}

export default Navigation
