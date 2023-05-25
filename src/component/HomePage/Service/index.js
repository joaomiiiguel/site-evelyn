import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import palestra1 from '../../../assets/palestras.webp'
import TitleSession from '@/component/TitleSession';

import CoachComp from './coach';
import CartaComp from './carta';
import ClubeLivro from './clubeLivro';
// import ProsperarComp from './posperar';
// import VidaProdutiva from './vidaProdutiva';
// import Imersao from './Imersao';

export default function Service() {
    return (
        <div className='flex flex-col items-center text-center bg-secondary pt-6'>

            <div className='flex flex-col justify-between items-center w-10/12 pt-10 md:items-end md:flex-row min-h-[80vh] space-x-6'>
                <div className='flex flex-col w-full justify-start space-y-8 md:h-[80vh] md:pt-[5%] md:w-1/2'>
                    <TitleSession Title={'Palestras e Treinamentos'} SubTitle={'Inspire, desenvolva e motive sua equipe!'}/>
                    <p className='text-white md:text-left text-justify'>Com uma vasta experiência em palestras e treinamentos, tive a oportunidade de compartilhar meu conhecimento e expertise em empresas renomadas, como UNIMED e EDP Energias do Brasil. Meus temas incluem felicidade no trabalho, comunicação e eficácia, produtividade e qualidade de vida - áreas em que sou especialista. Agora é a chance da sua empresa se beneficiar dessas palestras ou treinamentos!
                        <br/><br/>
                        Invista no crescimento e no desenvolvimento da sua empresa hoje mesmo!</p>
                    <Link
                        href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+eu+tenho+interesse+sobre+o+seu+trabalho+de+palestras+e+treinamentos.'}
                        target="_blank"
                        className='flex my-2 p-2 bg-primary hover:brightness-125 text-white font-semibold text-center items-center justify-center transition ease-in-out delay-150 uppercase tracking-wider'>
                        <p>Garanta agora sua vaga</p>
                    </Link>
                </div>
                <Image src={palestra1} width={400} alt="mulher falando no microfone" className='w-5/6 md:w-5/12 mt-4' loading="lazy" />
            </div>

            <CoachComp />
            <CartaComp />
            <ClubeLivro />
        </div>
    )
}
