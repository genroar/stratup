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
<<<<<<< HEAD
    <div className='flex flex-col  gap-[10px] container' >
        <div className='flex gap-[35px] items-center pt-[30px] pb-[10px]' > 
            <Worksinput inputClass='  w-[75%]'/>
            <OrderDropdown/>     
        </div>
        <div className='gap-[20px] flex flex-wrap ' > 
          <Product productClass={'w-[31.9%] shadow-top '}/>
          <Product productClass={'w-[31.9%] shadow-top '}/>
          <Product productClass={'w-[31.9%] shadow-top '}/>
          <Product productClass={'w-[31.9%] shadow-top '}/>
          <Product productClass={'w-[31.9%] shadow-top '}/>
          <Product productClass={'w-[31.9%] shadow-top '}/>
        </div>
=======
    <div className='flex flex-col gap-[10px] container'>
      <div className='flex gap-[20px] items-center justify-between pt-[30px] pb-[10px]'> 
        <Worksinput inputClass=' w-full lg:w-[75%]' />
        <OrderDropdown />     
      </div>
      <div className='gap-[20px] flex flex-wrap'> 
          <Product productClass=' w-[48%] lg:w-[31.9%] shadow-top' />
          <Product productClass='w-[48%] lg:w-[31.9%] shadow-top' />
          <Product productClass='w-[48%] lg:w-[31.9%] shadow-top' />
          <Product productClass='w-[48%] lg:w-[31.9%] shadow-top' />
          <Product productClass='w-[48%] lg:w-[31.9%] shadow-top' />
          <Product  productClass='w-[48%] lg:w-[31.9%] shadow-top' />
      </div>
>>>>>>> 12e75e351bb442981343af7419e5ee1fc7c8ddf9
    </div>
  )
}

export default BuyList;
