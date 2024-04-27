
function Notification() {
  return (
    <div className='notification-main cursor-pointer hover:bg-profiletext hover:bg-opacity-10 px-[5px] rounded-[10px] w-[950px]'>
        <div className='notification-inner flex items-center gap-[200px] w-[950px]'>
             <div className='image-notificaion'>
                <div className='relative` flex gap-[10px]'>
                    <img src="/assits/assits/image/not.png" alt="" />
                    <div className='absolute top-[26px] left-[22px]'><img src="/assits/assits/svg/Group 86.svg" alt="" /></div>
                    <div className='flex items-center '><span className='text-[15px] font-medium'>New offer</span></div>
                </div>
             </div>
             <div className='text'>
                <span className='text-[13px] font-medium'>offered a price to buy a watch!</span>
             </div>
        </div>
    </div>
  )
}

export default Notification