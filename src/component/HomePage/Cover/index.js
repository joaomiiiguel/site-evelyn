import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoWhatsapp } from "react-icons/io5";

import ImgMulher from '../../../assets/mulherCapa.webp';

export default function Cover() {
  return (
    <div className='flex flex-col justify-end items-center h-[90vh] w-screen bg-white md:flex-row md:justify-center'>
      <div>
        <p className='text-xl text-right md:text-2xl'>
          A única consequência <br />
          de andar na direção<br />
          certa é <strong className='text-primary-dark'>chegar lá</strong>
        </p>
        <Link
          href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+gostei+do+seu+trabalho.'}
          target="_blank"
          className='flex rounded-full my-2 p-2 bg-gradient-to-r from-background1 to-background2 hover:brightness-125 text-white text-center	items-center justify-center transition ease-in-out delay-150'>
          <p>Fale com Evelyn</p>
          <div className='ml-2'><IoLogoWhatsapp /></ div>
        </Link>
      </div>
      <Image src={ImgMulher} className='h-2/3 w-auto md:h-[90%] md:mt-20' alt='Mulher Sobre' />
    </div>
  )
}
