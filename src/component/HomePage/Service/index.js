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
        <div className='flex flex-col items-center text-center bg-secondary bgPalestra'>

            <div className='flex flex-col justify-center items-center md:max-w-[1000px] w-screen pt-10 md:items-end md:flex-row md:justify-around min-h-[80vh]'>
                <div className='flex flex-col w-5/6 justify-start space-y-8 md:space-y-20 md:h-[80vh] md:pt-14'>
                    <p className='font-bold text-2xl text-white '>Palestras e Treinamentos</p>
                    <p className='text-white text-justify '>Já palestrei em grandes empresas como UNIMED e EDP Energias do Brasil sobre os temas felicidade no trabalho, comunicação e eficácia, produtividade e qualidade de vida, nos quais sou especialista. A próxima empresa a receber a minha palestra, ou treinamento, pode ser a sua!</p>
                    <Link
                        href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+gostei+do+seu+trabalho.'}
                        target="_blank"
                        className='flex my-2 p-2 bg-primary hover:brightness-125 text-secondary font-semibold text-center items-center justify-center transition ease-in-out delay-150'>
                        <p>Faça seu orçamento</p>
                    </Link>
                </div>
                <Image src={palestra1} width={400} alt="mulher falando no microfone" className='w-5/6' loading="lazy"/>
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
