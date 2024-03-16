import React from 'react'
import AnchorTag from '../atoms/Anchortag'

function Navigation() {
  return (
    <div className='flex w-[437px] h-[20px] gap-[30px] ' >
      <AnchorTag>Buy</AnchorTag>
      <AnchorTag>Sell</AnchorTag>
      <AnchorTag>Sources</AnchorTag>
      <AnchorTag>Consign</AnchorTag>
      <AnchorTag>About Us</AnchorTag>
      <AnchorTag>Blog</AnchorTag>
    </div>
  )
}

export default Navigation
