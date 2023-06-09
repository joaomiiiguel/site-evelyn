import React from 'react'
import Image from 'next/image'
import ImgAbout from '../../../assets/about.webp'
import { BsCheck2Circle } from "react-icons/bs";


const CardAbout = ({ Icon, v1, text, subtitle }) => {
    return (
        <div className='flex flex-col items-center min-w-[170px]'>
            <div className='flex flex-row items-end font-bold'>
                <p className='text-3xl'>+</p>
                <p className='text-4xl'>{v1}</p>
                <p>{text && text}</p>
            </div>
            <p className='text-sm uppercase font-semibold'>{subtitle}</p>
        </div>
    )
}

export default function AboutUs() {
    return (
        <div className='flex flex-col bg-primary-light w-screen md:h-[70vh] font-medium justify-around items-center pt-16 bgNoise'>
            <div className='flex flex-col w-10/12 justify-around items-center'>
                <div className='flex flex-col justify-around items-center md:flex-row'>
                    <div className='flex flex-col space-y-4 md:w-1/2'>
                        <p className='text-secondary text-3xl font-bold text-center md:text-left'>Evelyn Pinheiro</p>

                        <p className='text-secondary text-lg text-center md:text-left'>
                            Cientista social, Coach de vida e carreira, especialista em felicidade e palestrante.
                            <br /><br />
                            Trabalho direcionando mulheres a construção de uma vida próspera, abundante e feliz onde a realização pessoal e profissional acontecem simultaneamente.
                        </p>
                    </div>
                    <Image src={ImgAbout} width={600} alt='Mulher Sobreasda' className='w-screen my-[-30px] md:mx-[-10%] md:w-[50%]' />
                    <div className='flex flex-col space-y-2 md:w-1/2'>
                        <div className='flex flex-row text-secondary '>
                            <BsCheck2Circle className='text-2xl w-1/12' />
                            <p className='w-11/12'><strong>Mestre</strong> em Ciências Sociais</p>
                        </div>
                        <div className='flex flex-row text-secondary '>
                            <BsCheck2Circle className='text-2xl w-1/12' />
                            <p className='w-11/12'>Especialista em felicidade por <strong>Yale</strong></p>
                        </div>
                        {/* <div className='flex flex-row text-secondary '>
                    <BsCheck2Circle className='text-2xl w-1/12' />
                    </div>
                    <p className='w-11/12'><strong>+400mil em vendas</strong> de coach em 2022</p>
                    </div>
                    <div className='flex flex-row text-secondary '>
                    <BsCheck2Circle className='text-2xl w-1/12' />
                    <p className='w-11/12'><strong>+1mil horas</strong> de atendimento individual de coaching</p>
                    </div>
                    <div className='flex flex-row text-secondary '>
                    <BsCheck2Circle className='text-2xl w-1/12' />
                    <p className='w-11/12'><strong>+1mil</strong> alunas e clientes atingidas em <strong>+6 países</strong></p>
                </div> */}
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

                <div className='flex flex-col items-center justify-between bg-white w-9/12 z-30 md:flex-row mt-8 mb-[-10%] md:mb-[-3%] px-4 py-8 shadow-lg'>
                    <CardAbout v1={400} text={'Mil'} subtitle={'vendas em coach'} />
                    <CardAbout v1={'1.000'} text={'h'} subtitle={'atendimento individual'} />
                    <CardAbout v1={'1.000'} subtitle={'alunas'} />
                    <CardAbout v1={6} subtitle={'países'} />

                </div>
            </div>
        </div>
    )
}
