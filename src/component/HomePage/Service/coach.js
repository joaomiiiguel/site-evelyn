import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import coachImg from '../../../assets/coach.webp'

export default function coach() {
    return (
        <div className='flex flex-col pt-10 text-center justify-end items-end bg-secondary-light min-h-[80vh] bgNoise'>

            <div className='flex flex-col justify-center w-screen items-end md:flex-row '>
                <Image src={coachImg} width={600} alt="mulher falando no microfone" className='w-full md:h-[80vh] md:w-auto' />
                <div className='px-4 md:w-[35%] text-left text-secondary font-medium md:pb-10'>
                    <p className='font-bold text-2xl text-secondary mb-6'>Programa de Coach Individual</p>
                    <p>
                        Se você tem dificuldade de alcançar seus objetivos sozinha, seja em relação à sua carreira, negócio ou vida pessoal, precisa de clareza e direcionamento para andar na direção certa para alcançar os seus objetivos, eu vou te direcionar através de uma metodologia comprovada em mais de mil horas de atendimentos.
                        <br /><br />
                        Resultados dos meus clientes:
                        <br /><br />
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


                    <br /><br />
                    <p>Coaching transforma a vida e você também pode ter essa transformação na sua.</p>

                    <Link
                        href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+gostei+do+seu+trabalho.'}
                        target="_blank"
                        className='flex rounded-full my-2 p-2 bg-secondary hover:brightness-125 text-white text-center items-center justify-center transition ease-in-out delay-150'>
                        <p>Garanta sua Vaga</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}
