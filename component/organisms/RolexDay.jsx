import CardSubmit from './CardSubmit'

function RolexDay() {
    return (
        <div className='xl:flex lg:flex md:block xl:px-[0px] lg:px-[0px] md:px-[20px] sm:px-[20px] px-[20px]     container gap-[30px]'>
            <div className='flex flex-col' >
                <div className='flex justify-between'>
                    <div className='py-[15px] xl:flex lg:flex md:block sm:block block '>
                      <div>  <span className='text-[24px] xl:font-normal lg:font-norma md:font-medium sm:font-medium font-medium  xl:text-gray-900 lg:text-gray-900 md:text-gray-600 sm:text-gray-500 text-gray-500'>Rolex, </span></div>
                      <div>  <span className='text-[24px] font-normal  text-gray-900'> Daytona</span></div>
                    </div>
                    <div className='xl:flex lg:flex md:block sm:block block xl:pt-[0px] lg:pt-[0px] md:pt-[25px] sm:pt-[25px] pt-[25px] text-right gap-[20px] items-center justify-center'>
                        <div><span className='text-[20px] font-semibold text-gray-900'>AED 5,500</span></div>
                        <div><span className='text-[13px] font-normal text-gray-900 text-opacity-50'>Negotiable</span></div>
                    </div>
                </div>
                <div className='card-image grid grid-cols-1 flex-col gap-[10px]'>
                    <img className='w-[100%]' src="/assits/assits/image/card.png" alt="" />
                    <div className='grid grid-cols-4 w-[100%]' >
                        <img className='' src="/assits/assits/image/card 1.png" alt="" />
                        <img className='' src="/assits/assits/image/card 2.png" alt="" />
                        <img className='' src="/assits/assits/image/card 3.png" alt="" />
                        <img className='' src="/assits/assits/image/card 4.png" alt="" />
                    </div>
                </div>
                <div className="description py-[20px] xl:flex lg:flex md:hidden sm:hidden hidden flex-col">
                    <div className='pb-[6px]'><span className='text-[20px] pb-[20px] font-medium text-gray-800'>Watch Description</span></div>
                    <div className=''><span className='text-[15px] font-light '>Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watches Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watchesStrap Up is a premier luxury watch concierge based in Dubai, offering a range</span></div>
                </div>
            </div>
            <div className='py-[70px]  '>
                <CardSubmit />
            </div>
        </div>
    )   
}

export default RolexDay;