import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import coachImg from '../../../assets/coach.webp'

export default function coach() {
    return (
        <div className='flex flex-col-reverse justify-center items-center w-screen px-[10%] pt-10 md:items-end md:flex-row md:justify-around min-h-[80vh] bg-primary-light bgNoise'>
            <Image src={coachImg} width={600} alt="mulher falando no microfone" className='w-full md:h-[80vh] md:w-auto' />
            <div className='px-4 md:w-[45%] text-left text-secondary font-medium md:pb-10'>
                <div className='flex flex-col space-y-5'>
                    <p className='font-bold text-2xl text-secondary mb-6 mt-6'>Programa de Coach Individual</p>
                    <p>
                        Se você tem dificuldade de alcançar seus objetivos sozinha, seja em relação à sua carreira, negócio ou vida pessoal, precisa de clareza e direcionamento para andar na direção certa para alcançar os seus objetivos, eu vou te direcionar através de uma metodologia comprovada em mais de mil horas de atendimentos.
                    </p>
                    <p>
                        Resultados dos meus clientes:
                    </p>
                    <ul>
                        <li>&bull;	Promoção no trabalho;</li>
                        <li>&bull; Aprovação em concurso público;</li>
                        <li>&bull; Aumento expressivo de faturamento em suas empresas;</li>
                        <li>&bull; Melhora e resgate de autoestima, autonomia e realização pessoal e profissional;</li>
                        <li>&bull; Eficácia e alta performance dobrando resultados previamente alcançados;</li>
                        <li>&bull; Maior satisfação com a vida e com o trabalho;</li>
                        <li>&bull; Melhores relacionamentos amorosos e pessoais;</li>
                        <li>&bull; Implementação de hábitos mais saudáveis, melhora na qualidade do sono e também de perda de peso.</li>
                    </ul>
                    <p>Coaching transforma a vida e você também pode ter essa transformação na sua.</p>
                </div>

                <Link
                    className='flex rounded-full my-6 p-2 bg-secondary hover:brightness-125 text-white text-center items-center justify-center transition ease-in-out delay-150'
                    href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+gostei+do+seu+trabalho.'}
                    target="_blank"
                    >
                    <p>Garanta sua Vaga</p>
                </Link>
            </div>
        </div>
    )
}
