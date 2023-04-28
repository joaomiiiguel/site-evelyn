import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ImgProsp from '../../../assets/ProspImg.webp'

export default function ProsperarComp() {
    return (
        <div className='flex flex-col w-full items-center text-center font-medium py-10 px-[10%] md:px-[15%] bg-gradient-to-r from-[#f3e7e9] to-[#e3eeff] min-h-[80vh]'>
            <p className='font-bold text-2xl text-secondary mb-10'>Prosperar</p>
            <div className='flex flex-col justify-around w-full items-center md:flex-row space-y-6'>
                <div className='px-4 text-left text-secondary md:w-[40%]'>
                    <p>
                        O guia prático para alcançar a prosperidade e conquistar uma vida mais feliz e lucrativa
                        <br /><br />
                        Entenda o que existe além de uma mentalidade próspera e saiba como quebrar as suas crenças limitantes, vencer a procrastinação e agir em busca da prosperidade real, mesmo que você se sinta paralisada ou não saiba por onde começar.
                        <br /><br />
                        Se você:
                    </p>

                    <ul className='font-bold'>
                        <li>&bull; Quer acabar com a mentalidade de escassez;</li>
                        <li>&bull; Quer vencer a procrastinação;</li>
                        <li>&bull; Quer ser mais constante;</li>
                        <li>&bull; Quer viver relacionamentos prósperos;</li>
                        <li>&bull; Quer transformar a sua vida financeira;</li>
                        <li>&bull; Quer se sentir orgulhosa de si e do que conquistou;</li>
                        <li>&bull; Quer aprender a ser persistente;</li>
                        <li>&bull; Quer melhorar sua autoestima e se sentir mais segura;</li>
                        <li>&bull; Quer realizar os seus sonhos;</li>
                    </ul>


                    <br /><br />
                    <p>O Prosperar é o programa certo para você.</p>

                    <Link
                        href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+gostei+do+seu+trabalho.'}
                        target="_blank"
                        className='flex rounded my-2 p-2 bg-secondary hover:brightness-125 text-white text-center items-center justify-center transition ease-in-out delay-150'>
                        <p>Eu quero prosperar</p>
                    </Link>
                </div>
                <Image src={ImgProsp} width={600} alt="mulher falando no microfone" className='w-full md:w-1/2' />
            </div>
        </div>
    )
}
