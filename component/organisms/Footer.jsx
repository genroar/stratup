import React from 'react'
import CustomImage from '../atoms/CustomImage'
import Paragraph from '../atoms/Paragraph'
import Input from '../atoms/Input'
import AnchorTag2 from '../atoms/Anchortag2'
function Footer() {
    return (
        <div className='main-footer '>
            <div className='footer  bg-gray-800 flex gap-[180px] py-[50px]'>
                <div className='strap flex flex-col gap-[20px] pl-[40px]'>
                    <div className='text-white'>
                        <CustomImage src='/assits/assits/image/footer.png' />
                        <p className='text-[18px] font-light leading-[25.67px] pt-[15px]'>Subscribe to recieve updates, acces to <br />exlusive deald and more</p>
                    </div>
                    <div className='flex relative'>
                        <div className='border-b-[1px] border-bg-white  w-[418px] text-white'><Input variant='five2' type='Email' children='E-mail' /></div>
                        <div className='absolute left-[407px]'><img src="/assits/assits/svg/greater.svg" alt="" /></div>
                    </div>
                </div>
                <div className='flex gap-[100px] '>
                    <div className='text-white flex flex-col gap-[15px]'>
                        <AnchorTag2>Home</AnchorTag2>
                        <AnchorTag2>About US</AnchorTag2>
                        <AnchorTag2>Contact</AnchorTag2>
                        <AnchorTag2>Blog</AnchorTag2>
                    </div>
                    <div className='text-white flex flex-col gap-[15px]'>
                        <AnchorTag2>Buy</AnchorTag2>
                        <AnchorTag2>Sell</AnchorTag2>
                        <AnchorTag2>Sourcing</AnchorTag2>
                        <AnchorTag2>Consign</AnchorTag2>
                    </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <span className='text-[20px] text-medium text-white'>Follow us</span>
                    <div className='flex flex-row gap-[10px]'>
                        <img src="/assits/assits/svg/facebook.svg" alt="" />
                        <img src="/assits/assits/svg/twiter.svg" alt="" />
                        <img src="/assits/assits/svg/insta.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer