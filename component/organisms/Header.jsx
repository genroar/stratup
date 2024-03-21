import React from 'react'
import '..//../app/globals.css'
import CustomImage from '../atoms/CustomImage'
import Navigation from '../molecules/Navigation'
import HeaderRight from '../molecules/HeaderRight'

function Header() {
  return (
    <div className='flex w-full py-[15px] header items-center px-[50px]  h-[65px] justify-between  ' >
        <div>
        <CustomImage variant='logo' src='/assits/assits/image/header-logo.png' alt='logo' ></CustomImage>
        </div>
        <div>
        <Navigation />
        </div>
        <div>
        <HeaderRight />
        </div>
    </div>
  )
}

export default Header
