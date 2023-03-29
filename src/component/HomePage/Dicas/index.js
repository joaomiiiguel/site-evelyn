import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import CardImg1 from '../../../assets/dicasCard1.png'
import CardImg2 from '../../../assets/dicasCard2.png'
import CardImg3 from '../../../assets/dicasCard3.png'

export default function Dicas() {
    return (
        <div className='text-center pt-10'>
            <p className='text-primary-dark'>FICA LIGADO</p>
            <p className='font-bold text-2xl text-secondary mb-10'>Dicas da Evelyn</p>

            <div className='flex flex-col items-center md:flex-row'>
                <Link className='m-6 rounded-3xl overflow-hidden' href={'#'}>
                    <Image src={CardImg1} alt="dicas do card 1" />
                    <p className='flex justify-center items-center text-lg font-bold text-white p-4 bg-gradient-to-r from-background1 to-background2'>PODCAST</p>
                </Link>
                <Link className='m-6 rounded-3xl overflow-hidden' href={'#'}>
                    <Image src={CardImg2} alt="dicas do card 2" />
                    <p className='flex justify-center items-center text-lg font-bold text-white p-4 bg-gradient-to-r from-background1 to-background2'>FILMES</p>
                </Link>
                <Link className='m-6 rounded-3xl overflow-hidden' href={'#'}>
                    <Image src={CardImg3} alt="dicas do card 3" />
                    <p className='flex justify-center items-center text-lg font-bold text-white p-4 bg-gradient-to-r from-background1 to-background2'>LIVROS</p>
                </Link>
            </div>
        </div>
    )
}
