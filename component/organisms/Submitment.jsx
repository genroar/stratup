import AnchorTag from '../atoms/Anchortag';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';

function Submitment({onSelectSub}) {
  const handleSubSlect = (sub) => {
    onSelectSub(sub)
  }
  

  return (
 <div className="flex flex-col items-center justify-center pt-[150px]">
     <div className="flex flex-col items-center justify-center">
      <div className='flex flex-col gap-[20px]  w-[360px]'>
        <div className='text-center'><Heading level='4'>Our management fees are</Heading></div>
        <div className='w-[360px] rounded-[20px] shadow-sm text-center flex flex-col gap-[10px] py-[20px]'> 
            <span className='text-[15px] font-normal text-gray-900'>500 AED for watches below 10k</span>
            <span className='text-[15px] font-normal text-gray-900'>1,000 AED for watches below 100k</span>
            <span className='text-[15px] font-normal text-gray-900'>1,500 AED for watches below 200k</span>
            <span className='text-[15px] font-normal text-gray-900'>1.8% for watches above 200ks</span>
        </div>
        <div className='w-[360px] h-[40px] rounded-[20px] bg-gray-600 bg-opacity-20 text-center flex justify-center items-center'>
            <a className='text-[15px] font-medium underline	' href="#">Terms & Conditions</a>
        </div>
        <div className='flex  gap-[10px]'>
            <input type="checkbox" />
            <span className='text-[13px] font-normal'>I accept the <AnchorTag>Terms & Conditions</AnchorTag></span>
        </div>
        <div>
            <Button onClick={() => handleSubSlect('Submit')} variant='primary'>Submit</Button>
        </div>
    </div>
  </div>
 </div>
  )
}

export default Submitment