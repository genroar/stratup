import React from 'react'
import Notification from '../molecules/Notification'
import Watch from '../molecules/Watch'
function Notificationbar() {
  return (
    <div className='border border-opacity-10 w-[990px] rounded-[20px] py-[20px] px-[20px]'>
        <div className="text py-[20px]">
            <span className='text-[24px] font-medium'>Notifications</span>
        </div>
        <div className=" flex flex-col gap-[10px] w-[950px] rounded-[10px]">
            <div className=''><Notification/></div>
            <div><Watch/></div>
            <div><Watch/></div>
            <div><Notification/></div>
            <div><Notification/></div>
        </div>
    </div>
  )
}

export default Notificationbar