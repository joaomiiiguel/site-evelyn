import React from 'react'
import Image from 'next/image'
import ImgAbout from '../../../assets/evelyn2.webp'
import { BsCheck2Circle } from "react-icons/bs";
import TitleSession from '@/component/TitleSession';
import Link from 'next/link';


export default function ClubeLivro() {
    return (
        <div className='flex items-center justify-center pt-10 min-h-[80vh]'>
            <div className='flex flex-col-reverse w-10/12 justify-center items-center md:flex-row md:items-center md:justify-between '>
                <Image src={ImgAbout} width={700} alt='Mulher Sobreasda' className='my-2 md:w-1/2' />
                <div className='px-4 md:w-[45%] text-left text-secondary md:pt-14 md:h-[80vh]'>
                    <div className='flex flex-col space-y-5'>
                        <TitleSession Title={'Comunidade Literária de Milhões'} SubTitle={'Junte-se ao Nosso Clube do Livro!'} />
                        <p className='text-white text-justify md:text-left'>
                            Nosso clube do livro nasceu no desejo de criar um espaço para compartilhar nossa paixão pelos livros, trocar ideias e experiências, e disseminar conhecimento. Ao longo de três edições emocionantes, tivemos o prazer de envolver mais de 200 alunas em nossa jornada.
                        </p>
                        <div className='flex flex-col w-full space-y-2 text-left'>
                            <div className='flex flex-row text-white '>
                                <BsCheck2Circle className='text-2xl w-1/12' />
                                <p className='w-11/12'>3 meses por clube</p>
                            </div>
                            <div className='flex flex-row text-white '>
                                <BsCheck2Circle className='text-2xl w-1/12' />
                                <p className='w-11/12'>Encontros quinzenais ao vivo</p>
                            </div>
                            <div className='flex flex-row text-white '>
                                <BsCheck2Circle className='text-2xl w-1/12' />
                                <p className='w-11/12'>Aulas gravadas</p>
                            </div>
                            <div className='flex flex-row text-white '>
                                <BsCheck2Circle className='text-2xl w-1/12' />
                                <p className='w-11/12'>Grupo no WhatsApp</p>
                            </div>
                            <div className='flex flex-row text-white '>
                                <BsCheck2Circle className='text-2xl w-1/12' />
                                <p className='w-11/12'>Instagram fechado com conteúdos exclusivos</p>
                            </div>
                            <div className='flex flex-row text-white '>
                                <BsCheck2Circle className='text-2xl w-1/12' />
                                <p className='w-11/12'>Comunidade privada para alunas</p>
                            </div>
                        </div>
                    </div>

                    <Link
                        className='flex my-6 p-2 bg-primary hover:brightness-125 text-secondary text-center items-center justify-center transition ease-in-out delay-150 uppercase font-medium'
                        href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+gostei+do+seu+trabalho.'}
                        target="_blank"
                    >
                        <p>Inscreva-se agora mesmo</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
