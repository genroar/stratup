import React from 'react';
import Link from 'next/link';

function Navigation() {

  

  const fontSize = 'xl:text-[16px] lg:text-[16px] text-[32px] xl:text-gray-300 lg:text-gray-300 text-gray-900 leading-[40px]'
  return (

    <div className='xl:flex lg:flex block text-gray-300 text-[16px] items-center font-normal gap-[30px]'>
      <ul className='xl:flex lg:flex xl:gap-[30px]  lg:gap-[13px]'>
        <li className=""><Link className={fontSize} href='/buy'>Buy</Link></li>
        <li className=""><Link className={fontSize} href='/sell'>Sell</Link></li>
        <li className=""><Link className={fontSize} href='/sources'>Sources</Link></li>
        <li className=""><Link className={fontSize} href='/consign'>Consign</Link></li>
        <li className=""><Link className={fontSize} href='/about'>About Us</Link></li>
        <li className=""><Link className={fontSize} href='/blog'>Blog</Link></li>
      </ul>

    </div>
  );
}

export default Navigation;
