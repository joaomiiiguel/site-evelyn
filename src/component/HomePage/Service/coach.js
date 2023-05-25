import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import TitleSession from '@/component/TitleSession'

import coachImg from '../../../assets/evelynCoach.webp'

export default function coach() {
    return (
        <div className='flex items-center justify-center pt-10 bgCoach min-h-[80vh]'>
            <div className='flex flex-col-reverse w-10/12 justify-center items-center md:flex-row md:items-center md:justify-between '>
                <Image src={coachImg} width={600} alt="mulher falando no microfone" className='w-full md:h-[80vh] md:w-auto' />
                <div className='px-4 md:w-[45%] text-left text-secondary font-medium md:pt-14 md:h-[80vh]'>
                    <div className='flex flex-col space-y-5'>
                        <TitleSession Title={'Programa de Coaching Individual'} SubTitle={'Alcance seus objetivos e transforme sua vida!'} Black />
                        <p className='text-justify'>
                            Meu programa de Coaching Individual pode ajudá-lo a conquistar seus objetivos na carreira, negócios ou vida pessoal. Com mais de mil horas de atendimentos comprovados, estou aqui para te ajudar.
                        </p>
                        <ul>
                            <li>&bull; Promoção no trabalho;</li>
                            <li>&bull; Aprovação em concurso público;</li>
                            <li>&bull; Aumento expressivo de faturamento em suas empresas;</li>
                            <li>&bull; Melhoria na eficácia e performance;</li>
                            <li>&bull; Relacionamentos amorosos e pessoais mais saudáveis;</li>
                            <li>&bull; Melhoria de hábitos para saúde, sono e perda de peso.</li>
                        </ul>
                    </div>

                    <Link
                        className='flex my-6 p-2 bg-secondary hover:brightness-125 text-white text-center items-center justify-center transition ease-in-out delay-150 uppercase'
                        href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+eu+tenho+interesse+sobre+o+seu+trabalho+de+coaching+individual.'}
                        target="_blank"
                    >
                        <p>Garanta sua Vaga</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
