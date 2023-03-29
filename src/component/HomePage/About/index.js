import React from 'react'
import Image from 'next/image'
import ImgAbout from '../../../assets/aboutMe1.png'
import Link from 'next/link'

export default function AboutUs() {
    return (
        <div className='flex flex-col min-h-[50vh] bg-black w-screen justify-center items-center pt-24 md:flex-row'>
            <div className='flex flex-col w-1/2 md:w-1/4'>
                <p className='text-white text-xl'>Olá! Eu sou <strong>Evelyn</strong></p>
                <p className='my-4 text-white'>
                    Sou Coach e cientista social. Trabalho há 2 anos vendendo apenas pela internet, convertendo clientes através do whatsapp todos os dias.
                </p>
                <Link
                    href={'/sobremim'}
                    className='flex rounded-full my-2 p-2 bg-gradient-to-r from-background1 to-background2 hover:brightness-125 text-white text-center	items-center justify-center transition ease-in-out delay-150'>
                    <p>Saiba mais</p>
                </Link>
            </div>
            <Image src={ImgAbout} width={350} alt='Mulher Sobreasda' />
        </div>
    )
}
