import { useRouter } from 'next/router'
import Link from 'next/link'
import OrderDropdown from '../atoms/OrderDropdown'
import Product from '../molecules/Product'
import Worksinput from '../molecules/Worksinput'

function BuyList() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/card')         
  }
 
  return (
    <div className='flex flex-col gap-[10px] container'>
      <div className='flex gap-[20px] items-center justify-between pt-[30px] pb-[10px]'> 
        <Worksinput inputClass=' w-full lg:w-[75%]' />
        <OrderDropdown />     
      </div>
      <div className='gap-[20px] flex  flex-wrap'> 
          <Product productClass=' w-[48%] lg:w-[31.9%] shadow-top' />
          <Product productClass='w-[48%] lg:w-[31.9%] shadow-top' />
          <Product productClass='w-[48%] lg:w-[31.9%] shadow-top' />
          <Product productClass='w-[48%] lg:w-[31.9%] shadow-top' />
          <Product productClass='w-[48%] lg:w-[31.9%] shadow-top' />
          <Product  productClass='w-[48%] lg:w-[31.9%] shadow-top' />
      </div>
    </div>
  )
}

export default BuyList;
