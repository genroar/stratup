import React from 'react'
import "../../app/globals.css"
import { useRouter } from 'next/router'
import { RxCross1 } from "react-icons/rx";

function ButtonCross() {

    const router = useRouter()

    const handleClose = () => {
        router.push("/")
    }

  return (
    <button className=' xl:shadow-top xl:w-[30px] xl:h-[30px] xl:flex xl:items-center xl:justify-center  lg:shadow-top lg:w-[30px] lg:h-[30px] lg:flex lg:items-center lg:justify-center  md:shadow-top md:w-[30px] md:h-[30px] md:flex md:items-center md:justify-center sm:shadow-top sm:w-[30px] sm:h-[30px] sm:flex sm:items-center sm:justify-center sm:rounded-full bg-white  ' onClick={handleClose}><RxCross1 /></button>
  )
}

export default ButtonCross