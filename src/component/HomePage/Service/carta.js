import React from 'react'
import Form from 'react-bootstrap/Form';

export default function cartaComp() {
    return (
        <div className='flex flex-col justify-center px-[10%] md:pl-[15%] items-center w-screen md:items-center md:flex-row md:justify-start min-h-[80vh] bg-[#CEC3C7] bgCartaComp'>
            <div className='flex flex-col text-secondary px-8 py-10 my-8 rounded-xl shadow-lg space-y-4 bg-[#f3e7e9b2] md:w-1/2'>
                <p className='font-bold text-2xl'>CARTA DA EVELYN</p>
                <p className='font-semibold text-sm text-justify md:text-base'>Domingo é dia de receber &quot;A carta da Evelyn&quot;. Uma carta especial, que eu escrevo a todas as mulheres que têm o desejo de prosperar na carreira e na vida. Essa carta vai te deixar com o coração quentinho, cheia de inspiração e motivação para descobrir o seu potencial e conquistar os seus sonhos com ações consistentes semana a semana.</p>
                <p className='font-semibold text-left'>Cadastre-se na minha Newsletter digitando seu e-mail a seguir:</p>
                <Form className='flex flex-col justify-between space-y-4'>
                    <Form.Control type="text" placeholder="Digite seu nome" className='rounded p-4 text-xs font-semibold text-gray' />
                    <Form.Control type="email" placeholder="Digite seu email" className='rounded p-4 text-xs font-semibold text-gray' />
                    <button className='flex rounded bg-gradient-to-r from-background1 to-background2 hover:brightness-125	items-center justify-center transition ease-in-out delay-150' type="submit">
                        <p className='text-white font-bold py-4 text-xs md:text-base'>EU QUERO!</p>
                    </button>
                </Form>
            </div>
        </div>
    )
}