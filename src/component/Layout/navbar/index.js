import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5';
import Modal from 'react-bootstrap/Modal';

import Logo from '../../../assets/LogoEvelyn.png'

export default function Navbar() {
  const [showModalMenu, setShowModalMenu] = useState(false)
  return (
    <div className='flex flex-row items-center w-screen justify-between px-[10%] py-6 fixed top-0 bg-white'>
      <Image src={Logo} alt="Logo Exemplo" height={30} />
      <div className='flex flex-row sm:hidden md:flex'>
        <Link href={'#'} className="p-2"><p className='font-bold'>SOBRE MIM</p></Link>
        <Link href={'#'} className="p-2"><p className='font-bold'>SERVIÇOS</p></Link>
        <Link href={'#'} className="p-2"><p className='font-bold'>DICAS</p></Link>
        <Link href={'#'} className="p-2"><p className='font-bold'>CONTATO</p></Link>
      </div>
      <a onClick={() => setShowModalMenu(true)} className='md:hidden'>
        <IoMenu size={25} />
      </a>

      {showModalMenu &&
        <div className='flex fixed flex-col bg-white w-screen h-screen inset-0 items-center pt-6'>
          <div className='flex w-screen justify-end pr-10'>
            <a onClick={() => setShowModalMenu(false)}><IoClose size={30} /></a>
          </div>
          <div className='flex flex-col items-center mt-10'>
            <Link href={'#'} className="p-2"><p className='font-bold'>SOBRE MIM</p></Link>
            <Link href={'#'} className="p-2"><p className='font-bold'>SERVIÇOS</p></Link>
            <Link href={'#'} className="p-2"><p className='font-bold'>DICAS</p></Link>
            <Link href={'#'} className="p-2"><p className='font-bold'>CONTATO</p></Link>
          </div>
        </div>
      }
    </div>
  )
}
