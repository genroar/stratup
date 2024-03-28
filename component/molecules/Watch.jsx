import React from 'react'

function Watch() {
  return (
    <div className='w-[990px] '>
        <div className='watch flex items-center gap-[100px] w-[950px]'>
            <div className="watch-image flex items-center gap-[10px]">
                <img src="/assits/assits/image/watch.png" alt="" />
                <div><span className='text-[15px] font-medium'>You created a new listing</span></div>
            </div>
            <div>
                <span className='text-[13px] font-medium'>Rolex...</span>
            </div>
        </div>
    </div>
  )
}

export default Watch