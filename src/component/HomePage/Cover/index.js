import React from 'react'
import Image from 'next/image'
import ButtonComp from '@/component/ButtonComp'
import { IoLogoWhatsapp } from "react-icons/io5";

import ImgMulher from '../../../assets/mulherCapa.webp'

export default function Cover() {
  return (
    <div className='flex flex-col justify-end items-center h-[90vh] w-screen bg-white md:flex-row md:justify-center'>
      <div>
        <p className='text-xl text-right md:text-2xl'>
          A única consequência <br />
          de andar na direção<br />
          certa é <strong className='text-primary-dark'>chegar lá</strong>
        </p>
        <ButtonComp name={'Fale com Evelyn'} icon={<IoLogoWhatsapp />}/>
      </div>
      <Image src={ImgMulher} className='h-2/3 w-auto md:h-[90%] md:mt-20' alt='Mulher Sobre' />
    </div>
  )
}
