import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoWhatsapp } from "react-icons/io5";

import ImgMulher from '../../../assets/evelyn1.webp';
import assinatura from '../../../assets/ass.png'

export default function Cover() {
  return (
    <div className='flex flex-col justify-center items-center w-screen px-[10%] pt-10 md:items-end md:flex-row md:justify-around min-h-[95vh]  bg-secondary text-primary-light '>
      <div className='flex flex-col md:h-[80vh] justify-center'>
        <Image src={assinatura} alt="assinatura" className='mb-10'/>
        <p className='text-xl text-right md:text-3xl'>
          A única consequência <br />
          de andar na direção<br />
          certa é <strong className='text-primary'>chegar lá!</strong>
        </p>
        <Link
          href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+gostei+do+seu+trabalho.'}
          target="_blank"
          className='flex rounded-full mt-10 p-2 bg-primary hover:brightness-125 text-secondary font-semibold text-center	items-center justify-center transition ease-in-out delay-150'>
          <p>Fale comigo</p>
          <div className='ml-2'><IoLogoWhatsapp /></ div>
        </Link>
      </div>
      <Image src={ImgMulher} width={300} priority className='h-2/3 w-auto mt-4 md:h-[80%]' alt='Mulher Sobre'/>
    </div>
  )
}
