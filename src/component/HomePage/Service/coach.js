import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import coachImg from '../../../assets/coach.webp'

export default function coach() {
    return (
        <div className='flex flex-col-reverse justify-center items-center w-screen px-[10%] md:px-[15%] pt-10 md:items-end md:flex-row md:justify-around min-h-[80vh] bg-primary-light bgNoise'>
            <Image src={coachImg} width={600} alt="mulher falando no microfone" className='w-full md:h-[80vh] md:w-auto' />
            <div className='px-4 md:w-[45%] text-left text-secondary font-medium md:pt-14 md:h-[80vh]'>
                <div className='flex flex-col space-y-5'>
                    <p className='font-bold text-2xl text-secondary mb-6 mt-6'>Programa de Coach Individual</p>
                    <p>
                        Eu posso te ajudar a alcançar seus objetivos na carreira, negócios ou vida pessoal com minha metodologia comprovada em mais de mil horas de atendimentos.
                    </p>
                    <p>
                        Resultados dos meus clientes:
                    </p>
                    <ul>
                        <li>&bull;	Promoção no trabalho;</li>
                        <li>&bull; Aprovação em concurso público;</li>
                        <li>&bull; Aumento expressivo de faturamento em suas empresas;</li>
                        <li>&bull; Melhoria na eficácia e performance, com resultados duplicados;</li>
                        <li>&bull; Melhores relacionamentos amorosos e pessoais;</li>
                        <li>&bull; Melhoria de hábitos para saúde, sono e perda de peso.</li>
                    </ul>
                    <p>Coaching transforma a vida e você também pode ter essa transformação na sua.</p>
                </div>

                <Link
                    className='flex my-6 p-2 bg-secondary hover:brightness-125 text-white text-center items-center justify-center transition ease-in-out delay-150'
                    href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+gostei+do+seu+trabalho.'}
                    target="_blank"
                    >
                    <p>Garanta sua Vaga</p>
                </Link>
            </div>
        </div>
    )
}
