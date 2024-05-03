import { useRouter } from 'next/router'
import OrderDropdown from '../atoms/OrderDropdown'
import Product from '../molecules/Product'
import Worksinput from '../molecules/Worksinput'

function BuyList() {
  const router = useRouter();

  const handleProductClick = () => {
    router.push('/RolexDay');
  }
  return (
    <div className='flex flex-col gap-[10px] container'>
      <div className='flex gap-[20px] items-center justify-between pt-[30px] pb-[10px]'>
        <Worksinput inputClass=' w-full xl:w-[77%]' />
        <OrderDropdown />
      </div>
      <div className='gap-[20px] flex flex-wrap'>
        <Product
          
          productClass=' w-[48%] lg:w-[31.8%] cursor-pointer shadow-top' src='/assits/assits/image/home recent 1.png ' FlagSrc='/assits/assits/image/UAE.png' 
          ProductTitle='Rolex'
          Date='Datejust'
          Year='2017'
          YearStatus='New'
          ProductPrice='AED 5,500'
          ProductCategory='Negotiable' />
        <Product
          onClick={handleProductClick}
          productClass='w-[48%] cursor-pointer lg:w-[31.8%] shadow-top' src='/assits/assits/image/home recent 1.png ' FlagSrc='/assits/assits/image/UAE.png'
          ProductTitle='Rolex'
          Date='Datejust'
          Year='2017'
          YearStatus='New'
          ProductPrice='AED 5,500'
          ProductCategory='Negotiable' />
        <Product
          onClick={handleProductClick}
          productClass='w-[48%] cursor-pointer lg:w-[31.8%] shadow-top' src='/assits/assits/image/home recent 2.png ' FlagSrc='/assits/assits/image/UAE.png'
          ProductTitle='Rolex'
          Date='Datejust'
          Year='2017'
          YearStatus='New'
          ProductPrice='AED 5,500'
          ProductCategory='Negotiable' />
        <Product
          onClick={handleProductClick}
          productClass='w-[48%] cursor-pointer lg:w-[31.8%] shadow-top' src='/assits/assits/image/home recent 4.png ' FlagSrc='/assits/assits/image/UAE.png'
          ProductTitle='Rolex'
          Date='Datejust'
          Year='2017'
          YearStatus='New'
          ProductPrice='AED 5,500'
          ProductCategory='Negotiable' />
        <Product
          onClick={handleProductClick}
          productClass='w-[48%] cursor-pointer lg:w-[31.8%] shadow-top' src='/assits/assits/image/home recent 2.png ' FlagSrc='/assits/assits/image/UAE.png'
          ProductTitle='Rolex'
          Date='Datejust'
          Year='2017'
          YearStatus='New'
          ProductPrice='AED 5,500'
          ProductCategory='Negotiable' />
        <Product
          onClick={handleProductClick}
          productClass='w-[48%] cursor-pointer lg:w-[31.8%] shadow-top' src='/assits/assits/image/home recent 4.png ' FlagSrc='/assits/assits/image/UAE.png'
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
