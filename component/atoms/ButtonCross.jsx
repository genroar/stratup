import React from 'react'
import { useRouter } from 'next/router'
import { RxCross1 } from "react-icons/rx";

function ButtonCross() {

    const router = useRouter()

    const handleClose = () => {
        router.push("/")
    }

  return (
    <button onClick={handleClose}><RxCross1 /></button>
  )
}

export default ButtonCross