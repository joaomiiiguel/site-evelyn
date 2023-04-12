import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


import palestra1 from '../../../assets/palestras.webp'

import CoachComp from './coach';
import CartaComp from './carta';
import ProsperarComp from './posperar';
import ClubeLivro from './clubeLivro';
import VidaProdutiva from './vidaProdutiva';
import Imersao from './Imersao';

export default function Service() {
    return (
        <div className='flex flex-col text-center bg-secondary'>

            <div className='flex flex-col justify-center items-center w-screen px-[10%] pt-10 md:items-end md:flex-row md:justify-around min-h-[80vh] bgPalestra'>
                <div className='flex flex-col md:w-[40%] md:h-[80vh] justify-center'>
                    <p className='font-bold text-2xl text-white mb-10'>Palestras e Treinamentos</p>
                    <p className='text-white mb-16 text-justify '>Já palestrei em grandes empresas como UNIMED e EDP Energias do Brasil sobre os temas felicidade no trabalho, comunicação e eficácia, produtividade e qualidade de vida, nos quais sou especialista. A próxima empresa a receber a minha palestra, ou treinamento, pode ser a sua!</p>
                    <Link
                        href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+gostei+do+seu+trabalho.'}
                        target="_blank"
                        className='flex rounded-full my-2 p-2 bg-primary hover:brightness-125 text-secondary font-semibold text-center items-center justify-center transition ease-in-out delay-150'>
                        <p>Faça seu orçamento</p>
                    </Link>
                </div>
                <Image src={palestra1} width={400} alt="mulher falando no microfone" className='w-auto' loading="lazy"/>

            </div>

            <CoachComp />
            <CartaComp />
            <ProsperarComp />
            <ClubeLivro />
            <VidaProdutiva />
            <Imersao/>
        </div>
    )
}
