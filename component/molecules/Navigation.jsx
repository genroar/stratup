import React from 'react'
import AnchorTag from '../atoms/Anchortag'
import Link from 'next/link'

function Navigation() {
  return (
    <div className='flex  h-[20px] text-gray-300 text-[16px] font-normal gap-[30px] ' >
      <Link href='/buy'>Buy</Link>
      <Link href='/sell'>Sell</Link>
      <Link href='/sources'>Sources</Link>
      <Link href='/consign'>Consign</Link>
      <Link href='/about'>About Us</Link>
      <Link href='/blog'>Blog</Link>
    </div>
  )
}

export default Navigation
