import React from 'react'
import Layout from '@/component/Layout'
import Image from 'next/image'
import ImgAbout from '../assets/aboutMe1.png'
import Link from 'next/link'


export default function SobreMim() {
  return (
    <Layout title={'Sobre Mim | Evelyn Pinheiro'}>
      <div className='flex flex-col min-h-screen w-screen items-center justify-center md:flex-row bg-black pt-24'>
        <div className='flex flex-col w-1/2 md:w-1/4'>
          <p className='text-white text-xl'>Olá! Eu sou <strong>Evelyn</strong></p>
          <p className='my-4 text-white'>
            Sou Coach e cientista social. Trabalho há 2 anos vendendo apenas pela internet, convertendo clientes através do whatsapp todos os dias.
          </p>
        </div>
        <Image src={ImgAbout} width={350} alt='Mulher Sobreasda' />
      </div>
      <div className='py-4 bg-black w-screen'>
        <p className='text-gray text-sm'>CERTIFICAÇÕES:</p>
      </div>
    </Layout>
  )
}
