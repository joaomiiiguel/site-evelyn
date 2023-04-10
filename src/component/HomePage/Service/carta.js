import React from 'react'
import Form from 'react-bootstrap/Form';

export default function cartaComp() {
    return (
        <div className='bg-[#CEC3C7] py-24  flex justify-center items-center bgCartaComp'>
            <div className='flex flex-col bg-[#f3e7e98b] w-1/2 text-secondary px-10 py-12 rounded-xl shadow-lg space-y-4'>
                <p className='font-bold text-2xl'>CARTA DA EVELYN</p>
                <p className='font-semibold text-justify'>Domingo é dia de receber &quot;A carta da Evelyn&quot;. Uma carta especial, que eu escrevo a todas as mulheres que têm o desejo de prosperar na carreira e na vida. Essa carta vai te deixar com o coração quentinho, cheia de inspiração e motivação para descobrir o seu potencial e conquistar os seus sonhos com ações consistentes semana a semana.</p>
                <p className='font-semibold text-left'>Cadastre-se na minha Newsletter digitando seu e-mail a seguir:</p>
                <Form className='flex flex-col justify-between space-y-4'>
                    <Form.Control type="text" placeholder="Digite seu nome" className='rounded-full p-4 text-xs font-semibold text-gray' />
                    <Form.Control type="email" placeholder="Digite seu email" className='rounded-full p-4 text-xs font-semibold text-gray' />
                    <button className='flex rounded-full bg-gradient-to-r from-background1 to-background2 hover:brightness-125	items-center justify-center transition ease-in-out delay-150' type="submit">
                        <p className='text-white font-bold py-4 text-xs md:text-base'>EU QUERO!</p>
                    </button>
                </Form>
            </div>
        </div>
    )
}
