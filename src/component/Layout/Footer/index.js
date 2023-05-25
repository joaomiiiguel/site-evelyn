import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsInstagram, BsWhatsapp, BsYoutube, BsLinkedin } from "react-icons/bs";

import LogoBranca from '../../../assets/logoCover.webp'


export default function Footer() {
  return (
    <div className='flex w-10/12 h-[30vh] bg-gray-dark flex-col justify-around items-center py-6'>
      <div className='flex flex-row w-1/3 justify-around md:w-1/6'>
        <Link href={'https://www.instagram.com/aevelynpinheiro/'} target="_blank" aria-label="Instagram Logo"><BsInstagram color='#FFF'/></Link>
        <Link href={'https://wa.me/5527992567192'} target="_blank" aria-label="Whatsapp Logo"><BsWhatsapp color='#FFF'/></Link>
        <Link href={'https://www.youtube.com/channel/UCe5tBmC03ehS_fjFPi-E9Jg'} target="_blank" aria-label="Youtube Logo"><BsYoutube color='#FFF'/></Link>
        <Link href={'https://www.linkedin.com/in/evelyn-camila-pinheiro-28589495/'} target="_blank" aria-label="Linkedin Logo"><BsLinkedin color='#FFF'/></Link>
      </div> 
      
      <Image src={LogoBranca} alt="Logo Exemplo" height={50} />
      <p className='text-white opacity-20 text-xs text-center'>Copyright © 2023 - Evelyn Pinheiro. Todos os direitos reservados.</p>
    </div>
  )
}
