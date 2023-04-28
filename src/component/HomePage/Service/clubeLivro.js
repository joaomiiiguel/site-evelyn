import React from 'react'
import Image from 'next/image'
import ImgAbout from '../../../assets/evelyn2.webp'
import { BsCheck2Circle } from "react-icons/bs";


export default function ClubeLivro() {
    return (
        <div className='flex flex-col justify-center items-center w-screen px-[10%] py-6  min-h-[80vh] bg-primary-light bgNoise'>
            <p className='text-secondary text-2xl font-bold text-center md:text-left'>Comunidade Literária de Milhões</p>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='flex flex-col w-full space-y-4 md:w-[25%]'>
                    <p className='text-secondary text-lg text-center md:text-left'>
                        O clube do livro nasceu da minha vontade e da minha irmã, de papear sobre livros, trocar ideias, experiências e espalhar conhecimentos.<br /><br />
                        Em 3 edições juntas, já levamos conhecimentos para mais de +200 alunas, com os temas: relacionamento, prosperidade e carreira, vendas e comunicação.
                    </p>
                </div>
                <Image src={ImgAbout} width={700} alt='Mulher Sobreasda' className='my-2 md:w-[20%]' />
                <div className='flex flex-col w-full space-y-2 md:w-[25%] text-left '>
                    <div className='flex flex-row text-secondary '>
                        <BsCheck2Circle className='text-2xl w-1/12' />
                        <p className='w-11/12'>3 meses por clube</p>
                    </div>
                    <div className='flex flex-row text-secondary '>
                        <BsCheck2Circle className='text-2xl w-1/12' />
                        <p className='w-11/12'>Encontros quinzenais ao vivo</p>
                    </div>
                    <div className='flex flex-row text-secondary '>
                        <BsCheck2Circle className='text-2xl w-1/12' />
                        <p className='w-11/12'>Aulas gravadas</p>
                    </div>
                    <div className='flex flex-row text-secondary '>
                        <BsCheck2Circle className='text-2xl w-1/12' />
                        <p className='w-11/12'>Grupo no WhatsApp</p>
                    </div>
                    <div className='flex flex-row text-secondary '>
                        <BsCheck2Circle className='text-2xl w-1/12' />
                        <p className='w-11/12'>Instagram fechado com conteúdos exclusivos</p>
                    </div>
                    <div className='flex flex-row text-secondary '>
                        <BsCheck2Circle className='text-2xl w-1/12' />
                        <p className='w-11/12'>Comunidade privada para alunas</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
