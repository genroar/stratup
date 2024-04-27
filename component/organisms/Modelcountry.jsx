import Heading from '../atoms/Heading';
import Other from '../atoms/Other';

function Modelcountry({onSelcetCountry}) {
  const handleCountrySelect = (Country) => {
    onSelcetCountry(Country)
  }

  return (
    <div className='flex flex-col gap-[50px]'>
      <div className=' flex flex-col justify-center items-center gap-[20px]'>
        <div className='flex flex-col text-center text'>
          <Heading level='4'>Your country</Heading>
          <span className='text-[15px] font-normal'>Where are you located?</span>
          <span className='text-[13px] font-normal text-gray-900'>Select an option below</span>
        </div>
        <div className='image w-[360px] flex flex-wrap flex-row gap-[20px] justify-center items-center'>
         <button onClick={() => handleCountrySelect('Country1')} > <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
         <button onClick={() => handleCountrySelect('Country2')} > <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
         <button onClick={() => handleCountrySelect('Country3')} > <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
         <button onClick={() => handleCountrySelect('Country4')} > <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
         <button onClick={() => handleCountrySelect('Country5')} > <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
         <button onClick={() => handleCountrySelect('Country6')} > <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
         <button onClick={() => handleCountrySelect('Country7')} > <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
         <button onClick={() => handleCountrySelect('Country8')} > <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
        </div>
        <div className='button'>
          <Other parent='Other' child='umair'></Other>
        </div>
      </div>
    </div>
  )
}

export default Modelcountry


