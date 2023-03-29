import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMenu, IoClose } from 'react-icons/io5';
import { Drawer, Button, Box, List, ListItem, Divider, ListItemButton } from '@mui/material';

import Logo from '../../../assets/LogoEvelyn.png'

export default function Navbar() {
  const [showModalMenu, setShowModalMenu] = useState(false)
  const [width, setWidth] = useState();

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <div className='flex flex-row items-center w-screen justify-between px-[10%] py-6 fixed top-0 bg-white'>
      <Image src={Logo} alt="Logo Exemplo" height={30} />

      {width > 700 ?
        <div className='flex flex-row'>
          <Link href={'#'} className="p-2"><p className='font-bold'>SOBRE MIM</p></Link>
          <Link href={'#'} className="p-2"><p className='font-bold'>SERVIÇOS</p></Link>
          <Link href={'#'} className="p-2"><p className='font-bold'>DICAS</p></Link>
          <Link href={'#'} className="p-2"><p className='font-bold'>CONTATO</p></Link>
        </div>
        :
        <>
          <Button onClick={() => setShowModalMenu(true)} >
            <IoMenu color='#000' size={25} />
          </Button>
          <Drawer
            anchor='right'
            open={showModalMenu}
            onClose={() => setShowModalMenu(false)}
          >
            <Box
              sx={{ width: 350 }}
              className='flex flex-col items-center mt-24'
              role="presentation"
              onClick={() => setShowModalMenu(true)}
              onKeyDown={() => setShowModalMenu(false)}
            >
              <p className='font-bold text-2xl text-gray'>Menu</p>
              <Divider />
              <ListItem className='flex flex-col'>
                <ListItemButton className='w-full px-6'>
                  <Link href={'#'} className="p-2"><p className='font-bold'>SOBRE MIM</p></Link>
                </ListItemButton>
                <ListItemButton className='w-full px-6'>
                  <Link href={'#'} className="p-2"><p className='font-bold'>SERVIÇOS</p></Link>
                </ListItemButton>
                <ListItemButton className='w-full px-6'>
                  <Link href={'#'} className="p-2"><p className='font-bold'>DICAS</p></Link>
                </ListItemButton>
                <ListItemButton className='w-full px-6'>
                  <Link href={'#'} className="p-2"><p className='font-bold'>CONTATO</p></Link>
                </ListItemButton>
              </ListItem>

              {/* <div className='flex fixed flex-col bg-white w-screen h-screen inset-0 items-center pt-6'>
                <div className='flex w-screen justify-end pr-10'>
                  <a onClick={() => setShowModalMenu(false)}><IoClose size={30} /></a>
                </div>
                <div className='flex flex-col items-center mt-10'>
                  <Link href={'#'} className="p-2"><p className='font-bold'>SOBRE MIM</p></Link>
                  <Link href={'#'} className="p-2"><p className='font-bold'>SERVIÇOS</p></Link>
                  <Link href={'#'} className="p-2"><p className='font-bold'>DICAS</p></Link>
                  <Link href={'#'} className="p-2"><p className='font-bold'>CONTATO</p></Link>
                </div>
              </div> */}
            </Box>
          </Drawer>
        </>

      }

      {/* {showModalMenu &&
        <div className='flex fixed flex-col bg-white w-screen inset-0 items-center pt-6'>
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
      } */}
    </div>
  )
}
