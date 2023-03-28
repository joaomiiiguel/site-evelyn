import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Form from 'react-bootstrap/Form';


import Card1 from '../../../assets/card1.png'
import Card2 from '../../../assets/card2.png'
import Card3 from '../../../assets/card3.png'

export default function Service() {
    return (
        <div className='text-center pt-10'>
            <p className='text-primary-dark'>COMEÇE POR AQUI</p>
            <p className='font-bold text-2xl text-secondary mb-10'>Como eu posso te ajudar</p>

            <div className='flex flex-col items-center'>
                <Link className='flex flex-col items-center transition ease-in-out delay-300 hover:opacity-70 mb-10 w-1/2' href={'#'}>
                    <Image src={Card1} alt="Imagem capa do curso" className='shadow-2xl ' />
                    <p className='font-bold bg-secondary-light py-4 px-8 w-max rounded-full mt-[-30px] shadow-2xl'>CURSO</p>
                </Link>
                <Link className='flex flex-col items-center transition ease-in-out delay-300 hover:opacity-70 mb-10 w-1/2' href={'#'}>
                    <Image src={Card2} alt="Imagem capa do curso" className='shadow-2xl ' />
                    <p className='font-bold bg-secondary-light py-4 px-6 w-max rounded-full mt-[-30px] shadow-2xl'>PALESTRAS</p>
                </Link>
                <Link className='flex flex-col items-center transition ease-in-out delay-300 hover:opacity-70 mb-10 w-1/2' href={'#'}>
                    <Image src={Card3} alt="Imagem capa do curso" className='shadow-2xl ' />
                    <p className='font-bold bg-secondary-light py-4 px-6 w-max rounded-full mt-[-30px] shadow-2xl'>COACHING INDIVIDUAL</p>
                </Link>
            </div>

            <div className='bg-gray-dark px-[15%] py-10 flex flex-col justify-around'>
                <p className='text-white font-bold text-2xl'>CARTA DA EVELYN</p>
                <p className='text-white text-justify mt-4'>Cartas para ser uma fonte inspiradora de encorajamento diário para ajudá-lo a alcançar seus objetivos e superar desafios.</p>
                <Form className='flex justify-between mt-6'>
                    <Form.Control type="email" placeholder="Digite seu email" className='rounded-full px-4 w-2/3 mr-2 text-xs font-semibold text-gray'/>
                    <button className='flex w-1/3 rounded-full p-4 bg-gradient-to-r from-background1 to-background2 hover:brightness-125 text-white text-center	items-center justify-center transition ease-in-out delay-150  text-sm font-semibold' type="submit">
                        EU QUERO
                    </button>
                </Form>
            </div>
        </div>
    )
}
