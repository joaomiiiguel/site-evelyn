import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';


export default function CartaComp() {


    return (
        <div className='flex flex-col justify-center items-center w-screen md:items-center md:flex-row md:justify-start min-h-[80vh] bg-[#CEC3C7] bgCartaComp'>
            <div className='flex flex-col w-10/12 text-secondary px-8 py-10 my-8 shadow-lg space-y-4 bg-[#f3e7e9b2] md:w-4/12 md:ml-[10%]'>
                <p className='font-bold text-2xl'>CARTA DA EVELYN</p>
                <p className='font-semibold text-sm text-justify md:text-base'>Domingo é dia de receber &quot;A carta da Evelyn&quot;. Uma carta especial, que eu escrevo a todas as mulheres que têm o desejo de prosperar na carreira e na vida. Essa carta vai te deixar com o coração quentinho, cheia de inspiração e motivação para descobrir o seu potencial e conquistar os seus sonhos com ações consistentes semana a semana.</p>
                <p className='font-semibold text-left'>Cadastre-se na minha Newsletter digitando seu e-mail a seguir:</p>

                <iframe title='form' src='https://evelynpinheiro.activehosted.com/f/1' height={240} ></iframe>
            </div>
        </div>
    )
}