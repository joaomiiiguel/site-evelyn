import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoWhatsapp } from "react-icons/io5";

import ImgMulher from '../../../assets/home1.webp';

export default function Cover() {
  return (
    <div className='flex flex-col justify-center mt-20 md:mt-10 items-center h-[80vh] w-screen bg-gradient-to-r from-[#f3e7e9] to-[#e3eeff] md:items-end md:flex-row md:justify-center'>
      <div className='flex flex-col h-full justify-center md:mr-6'>
        <p className='text-xl text-right md:text-3xl'>
          A única consequência <br />
          de andar na direção<br />
          certa é <strong className='text-primary-dark'>chegar lá!</strong>
        </p>
        <Link
          href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+gostei+do+seu+trabalho.'}
          target="_blank"
          className='flex rounded-full my-2 p-2 bg-gradient-to-r from-background1 to-background2 hover:brightness-125 text-white text-center	items-center justify-center transition ease-in-out delay-150'>
          <p>Fale comigo</p>
          <div className='ml-2'><IoLogoWhatsapp /></ div>
        </Link>
      </div>
      <Image src={ImgMulher} width={300} priority className='h-2/3 w-auto md:h-[80%] md:mt-20' alt='Mulher Sobre'/>
    </div>
  )
}
