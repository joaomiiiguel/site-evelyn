import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ImageBG from '../../../assets/evelyn3.webp'

export default function Imersao() {
    return (
        <div className='flex flex-col justify-center w-screen items-center md:flex-row '>
            <div className='px-4 md:w-[25%]'>
                <p className='font-bold text-2xl text-white mb-10'>Imersão WhatsApp de Milhões</p>
                <p className='text-white mb-16'>Eu quero que você trabalhe para ser rica e para isso, é importantíssimo aprender a vender com elegância. Nessa imersão, eu te ensino o meu método de vendas que me fez faturar mais de R$400 mil em 2022 apenas pelo whatsapp, mesmo tendo menos de 8 mil seguidores no instagram.
                    <br />
                    <br />
                    Os resultados das alunas em menos de uma semana após a imersão são extraordinários. Não perca a próxima turma!
                </p>
                <Link
                    href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+gostei+do+seu+trabalho.'}
                    target="_blank"
                    className='flex rounded-full my-2 p-2 bg-primary-dark hover:brightness-125 text-black text-center items-center justify-center transition ease-in-out delay-150'>
                    <p>Garantir minha vaga</p>
                </Link>
            </div>
            <Image src={ImageBG} alt="mulher falando no microfone" className='w-full md:w-1/4' />

        </div>
    )
}
