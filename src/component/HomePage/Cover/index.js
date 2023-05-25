import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoWhatsapp } from "react-icons/io5";

import ImgMulher from '../../../assets/evelyn1.webp';
import assinatura from '../../../assets/logoCover.webp'

export default function Cover() {
  return (
    <div className='flex flex-col justify-center items-center w-10/12 pt-10 h-[90vh] bg-secondary text-primary-light space-x-4 md:items-end md:flex-row md:justify-around'>
      <div className='flex flex-col items-center justify-center space-y-8 md:space-y-16 md:h-[80vh]'>
        <Image src={assinatura} alt="assinatura" className='w-6/12 md:w-4/12'/>
        <p className='text-xl tracking-wide font-light text-right md:text-2xl md:tracking-widest'>
          A única consequência <br />
          de andar na direção
          certa é <br /><strong className='text-primary font-semibold'>chegar lá!</strong>
        </p>
        <Link
          href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+gostei+do+seu+trabalho.'}
          target="_blank"
          className='flex w-full md:w-1/2 py-2 px-10 bg-primary hover:brightness-125 text-secondary font-semibold text-center	items-center justify-center transition ease-in-out delay-150'>
          <p className='tracking-wide'>Fale comigo</p>
          <div className='ml-2'><IoLogoWhatsapp /></ div>
        </Link>
      </div>
      <Image src={ImgMulher} width={300} priority className='h-2/3 w-auto mt-4 md:h-[80%]' alt='Mulher Sobre'/>
    </div>
  )
}
