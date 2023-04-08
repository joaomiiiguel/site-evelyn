import React from 'react'
import Image from 'next/image'
import ImgAbout from '../../../assets/about.webp'
import { BsCheck2Circle } from "react-icons/bs";


export default function AboutUs() {
    return (
        <div className='flex flex-col bg-secondary-light px-10 w-screen min-h-[80vh] font-medium justify-center items-center py-16 md:flex-row'>
            <div className='flex flex-col space-y-4 md:w-[25%]'>
                <p className='text-secondary text-2xl font-bold text-center md:text-left'>Evelyn Pinheiro</p>
                <p className='text-secondary text-lg text-center md:text-left'>
                    Cientista social, Coach de vida e carreira, especialista em felicidade e palestrante.<br /><br />
                    Trabalho direcionando mulheres a construção de uma vida próspera, abundante e feliz onde a realização pessoal e profissional acontecem simultaneamente.
                </p>
            </div>
            <Image src={ImgAbout} width={600} alt='Mulher Sobreasda' className='w-screen my-[-30px] md:mx-[-90px] md:w-[50%]' />
            <div className='flex flex-col space-y-2 md:w-[25%] '>
                <div className='flex flex-row text-secondary '>
                    <BsCheck2Circle className='text-2xl w-1/12' />
                    <p className='w-11/12'><strong>Mestre</strong> em Ciências Sociais</p>
                </div>
                <div className='flex flex-row text-secondary '>
                    <BsCheck2Circle className='text-2xl w-1/12' />
                    <p className='w-11/12'>Especialista em felicidade por <strong>Yale</strong></p>
                </div>
                <div className='flex flex-row text-secondary '>
                    <BsCheck2Circle className='text-2xl w-1/12' />
                    <p className='w-11/12'><strong>+400mil em vendas</strong> de coach em 2022</p>
                </div>
                <div className='flex flex-row text-secondary '>
                    <BsCheck2Circle className='text-2xl w-1/12' />
                    <p className='w-11/12'><strong>+1mil horas</strong> de atendimento individual de coaching</p>
                </div>
                <div className='flex flex-row text-secondary '>
                    <BsCheck2Circle className='text-2xl w-1/12' />
                    <p className='w-11/12'><strong>+1mil</strong> alunas e clientes atingidas em <strong>+6 países</strong></p>
                </div>
                <div className='flex flex-row text-secondary '>
                    <BsCheck2Circle className='text-2xl w-1/12' />
                    <p className='w-11/12'><strong>Criadora do método WhatsApp de Milhões</strong>, responsável por multiplicar o faturamento de diversas alunas</p>
                </div>
                <div className='flex flex-row text-secondary '>
                    <BsCheck2Circle className='text-2xl w-1/12' />
                    <p className='w-11/12'> <strong>Co-fundadora da Comunidade Literária de Milhões</strong>, o clube do livro que já levou conhecimento e transformou a vida de mais de 200 alunas</p>
                </div>
            </div>

        </div>
    )
}
