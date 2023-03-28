import React from 'react'
import Image from 'next/image'

import ImgMulher from '../../../assets/mulherCapa.webp'

export default function Cover() {
  return (
    <div className='flex flex-col justify-end items-center h-[90vh] w-screen bg-white'>

      <p className='text-2xl text-right'>
        A única consequência <br/>
        de andar na direção<br/>
        certa é <strong className='text-primary-dark'>chegar lá</strong>
        </p>
      <Image src={ImgMulher} width={400} alt='Mulher Sobre' />
    </div>
  )
}
