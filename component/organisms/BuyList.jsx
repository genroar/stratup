import { useRouter } from 'next/router'
import OrderDropdown from '../atoms/OrderDropdown'
import Product from '../molecules/Product'
import Worksinput from '../molecules/Worksinput'
import { FaFilter } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

function BuyList() {
  const router = useRouter();

  const handleProductClick = () => {
    router.push('/RolexDay');
  }
  return (

    
    // fillter ha is ma 


    <div className='gap-[10px]'>
      <div className='xl:flex lg:flex md:flex block gap-[20px] items-center justify-between pt-[30px] pb-[10px]'>
        <div className='xl:pb-[0] lg:pb-[0] md:pb-[0] sm:pb-[0] pb-[20px]'><Worksinput inputClass=' w-full xl:w-[77%]' /></div>
        <div className='flex gap-[20px] pb-[10px]'>
          <div className='filter  bg-gray-700 w-full p-[10px] rounded-[30px] xl:hidden lg:hidden md:hidden sm:hidden block'>
            <div className='flex justify-between '>
              <div><h3 className='text-[13px] text-white'>Filters</h3></div>
              <div>
                <FaFilter className='text-white' />
              </div>
            </div>
          </div>
          <OrderDropdown />
        </div>
      </div>
      <div className='clear flex gap-[8px] pb-[10px] xl:hidden lg:hidden md:hidden sm:hidden'>
        <div className='flex w-[83px] p-[5px] border-[1px] border-gray-700 rounded-[30px] justify-between '>
          <h3 className='text-[13px]'>Baltic</h3>
          <RxCross1 />
        </div>
        <div className='flex w-[83px] p-[5px] border-[1px] border-gray-700 rounded-[30px] justify-between'>
          <h3 className='text-[13px]'>Bovet</h3>
          <RxCross1 />
        </div>
        <div className='flex w-[96px] p-[5px] border-[1px] border-gray-700 rounded-[30px] justify-between'>
          <h3 className='text-[13px]'>Clear all</h3>
          <RxCross1 />
        </div>
      </div>

      <div className='gap-[20px] grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2  flex-wrap'>
        <Product
          productClass='cursor-pointer shadow-top' src='/assits/assits/image/home recent 1.png ' FlagSrc='/assits/assits/image/UAE.png'
          ProductTitle='Rolex'
          Date='Datejust'
          Year='2017'
          YearStatus='New'
          ProductPrice='AED 5,500'
          ProductCategory='Negotiable' />
        <Product
          onClick={handleProductClick}
          productClass=' cursor-pointer  shadow-top' src='/assits/assits/image/home recent 1.png ' FlagSrc='/assits/assits/image/UAE.png'
          ProductTitle='Rolex'
          Date='Datejust'
          Year='2017'
          YearStatus='New'
          ProductPrice='AED 5,500'
          ProductCategory='Negotiable' />
        <Product
          onClick={handleProductClick}
          productClass=' cursor-pointer  shadow-top' src='/assits/assits/image/home recent 2.png ' FlagSrc='/assits/assits/image/UAE.png'
          ProductTitle='Rolex'
          Date='Datejust'
          Year='2017'
          YearStatus='New'
          ProductPrice='AED 5,500'
          ProductCategory='Negotiable' />
        <Product
          onClick={handleProductClick}
          productClass=' cursor-pointer  shadow-top' src='/assits/assits/image/home recent 4.png ' FlagSrc='/assits/assits/image/UAE.png'
          ProductTitle='Rolex'
          Date='Datejust'
          Year='2017'
          YearStatus='New'
          ProductPrice='AED 5,500'
          ProductCategory='Negotiable' />
        <Product
          onClick={handleProductClick}
          productClass=' cursor-pointer  shadow-top' src='/assits/assits/image/home recent 2.png ' FlagSrc='/assits/assits/image/UAE.png'
          ProductTitle='Rolex'
          Date='Datejust'
          Year='2017'
          YearStatus='New'
          ProductPrice='AED 5,500'
          ProductCategory='Negotiable' />
        <Product
          onClick={handleProductClick}
          productClass=' cursor-pointer  shadow-top' src='/assits/assits/image/home recent 4.png ' FlagSrc='/assits/assits/image/UAE.png'
          ProductTitle='Rolex'
          Date='Datejust'
          Year='2017'
          YearStatus='New'
          ProductPrice='AED 5,500'
          ProductCategory='Negotiable' />
      </div>
    </div>
  )
}

export default BuyList;
