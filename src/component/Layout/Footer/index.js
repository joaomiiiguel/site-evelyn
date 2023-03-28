import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsInstagram, BsWhatsapp, BsYoutube, BsLinkedin } from "react-icons/bs";

import LogoBranca from '../../../assets/LogoBranca.png'

export default function Footer() {
  return (
    <div className='flex h-[20vh] bg-gray-dark w-screen flex-col justify-around items-center py-6'>
      <div className='flex flex-row w-1/3 justify-around'>
        <Link href={'#'} ><BsInstagram color='#FFF'/></Link>
        <Link href={'#'} ><BsWhatsapp color='#FFF'/></Link>
        <Link href={'#'} ><BsYoutube color='#FFF'/></Link>
        <Link href={'#'} ><BsLinkedin color='#FFF'/></Link>
      </div>
      <div className='flex flex-row'>
        <Link href={'#'} className="p-2"><p className='font-bold opacity-50 text-gray-light text-sm'>SOBRE MIM</p></Link>
        <Link href={'#'} className="p-2"><p className='font-bold opacity-50 text-gray-light text-sm'>SERVIÇOS</p></Link>
        <Link href={'#'} className="p-2"><p className='font-bold opacity-50 text-gray-light text-sm'>DICAS</p></Link>
        <Link href={'#'} className="p-2"><p className='font-bold opacity-50 text-gray-light text-sm'>CONTATO</p></Link>
      </div>
      <Image src={LogoBranca} alt="Logo Exemplo" height={30} />
      <p className='text-white opacity-10 font-bold text-xs'>Copyright © 2023 - Evelyn Pinheiro. Todos os direitos reservados.</p>
    </div>
  )
}
