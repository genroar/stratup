import React from 'react'
import CustomImage from '../atoms/CustomImage'
import Navigation from '../molecules/Navigation'
import HeaderRight from '../molecules/HeaderRight'

function Header() {
  return (
    <div className='flex w-full h-[70px] gap-[202px] header' >
        <CustomImage variant='logo' src='/assits/assits/image/header-logo.png' alt='logo' ></CustomImage>
        <Navigation />
        <HeaderRight />
    </div>
  )
}

export default Header
