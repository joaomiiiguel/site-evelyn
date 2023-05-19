import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function CartaComp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [state, setState] = useState('idle') /* 'idle' | 'success' | 'error' */

    const novoContato = {contact: {email: email, firstName: name}}


    // Configurações da requisição
    const url = 'https://evelynpinheiro.api-us1.com/api/3/contacts';
    const apiKey = '732e776d7b1d8efe23bf9f59deff72a8e79e43c2c0b93c48539b33c9985285a4c9ad2d56';

    // Configuração do cabeçalho da requisição
    const headers = {
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json',
        'Api-Token': apiKey
      }


    const subscribe = async (e) => {
        e.preventDefault();

        if (name.length < 2 && email.length < 8) {
            setState('error')
            setTimeout(() => {
                setState('idle')
            }, 3000);
        } else {
            axios.post(url, novoContato, { headers })
                .then(response => {
                    console.log('Novo contato criado com sucesso!');
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Erro ao criar novo contato:');
                    console.error(error);
                });
        }
    }

    return (
        <div className='flex flex-col justify-center items-center w-screen md:items-center md:flex-row md:justify-start min-h-[80vh] bg-[#CEC3C7] bgCartaComp'>
            <div className='flex flex-col w-10/12 text-secondary px-8 py-10 my-8 shadow-lg space-y-4 bg-[#f3e7e9b2] md:w-1/2 md:ml-[10%]'>
                <p className='font-bold text-2xl'>CARTA DA EVELYN</p>
                <p className='font-semibold text-sm text-justify md:text-base'>Domingo é dia de receber &quot;A carta da Evelyn&quot;. Uma carta especial, que eu escrevo a todas as mulheres que têm o desejo de prosperar na carreira e na vida. Essa carta vai te deixar com o coração quentinho, cheia de inspiração e motivação para descobrir o seu potencial e conquistar os seus sonhos com ações consistentes semana a semana.</p>
                <p className='font-semibold text-left'>Cadastre-se na minha Newsletter digitando seu e-mail a seguir:</p>
                <Form className='flex flex-col justify-between space-y-4' onSubmit={subscribe}>
                    <Form.Control type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} className='p-4 text-xs font-semibold text-gray' />
                    <Form.Control type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} className='p-4 text-xs font-semibold text-gray' />
                    <button className='flex bg-gradient-to-r from-background1 to-background2 hover:brightness-125	items-center justify-center transition ease-in-out delay-150' type="submit">
                        <p className='text-white font-bold py-4 text-xs md:text-base'>EU QUERO!</p>
                    </button>
                </Form>
                {state === 'idle' && <p className='m-0 p-0 text-xs font-semibold bg-green py-2 opacity-0'>asdasd</p>}
                {state === 'success' && <p className='m-0 p-0 text-xs font-semibold bg-green py-2 transition ease-in delay-700'>E-mail cadastrado com sucesso!</p>}
                {state === 'error' && <p className='m-0 p-0 text-xs font-semibold bg-red py-2 transition ease-in-out delay-700'>Preencha todos os campos corretamente</p>}


            </div>
        </div>
    )
}