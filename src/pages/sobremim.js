import React from 'react'
import Layout from '@/component/Layout'
import Image from 'next/image'
import ImgAbout from '../assets/aboutMe1.png'
import Link from 'next/link'


export default function SobreMim() {
  return (
    <Layout title={'Sobre Mim | Evelyn Pinheiro'}>
      <div className='flex flex-col min-h-screen w-screen items-center justify-center md:flex-row bg-black pt-24'>
        <Image src={ImgAbout} width={350} alt='Mulher Sobreasda' />
        <div className='flex flex-col px-[5%] md:w-1/2'>
          <p className='text-white text-3xl'><strong>Evelyn Pinheiro</strong></p>
          <p className='my-4 text-white'>
            Evelyn é uma capixaba que decidiu não aceitar a realidade como ela era. A primeira de sua família a ter mestrado. Aprendeu com as dores da vida, que não existe realidade, e sim, realidade&rdquo;S&rdquo; e que cada um é capaz de criar a vida que deseja experimentar enquanto caminha por esse planeta azul.<br/><br/>

            Cientista social, pedagoga e especialista em Felicidade por Yale, Evelyn dedica sua vida a transmitir conhecimento que transforma a vida pessoal e profissional de seus clientes, alunos e ouvintes em suas palestras.<br/><br/>
            A vida lhe deu uma realidade dura e difícil. Nascida na periferia, precisou parar de estudar para trabalhar e ajudar no sustento da casa e, aos vinte e três anos de idade, com um diploma de supletivo, decidiu que precisava começar a construir uma nova realidade para si e para os seus. Suas conquistas pessoais mostraram que não havia nada que, com disciplina e obstinação, não pudesse ser alcançado. Ao aprender isso, percebeu que essa verdade se aplica a todos os seres humanos: realidades são transformadas todos os dias através de uma nova decisão e um novo comportamento.<br/><br/>

            Ao longo de mais de 10 anos trabalhando com educação percebeu a oportunidade de levar seu conhecimento para a internet pela possibilidade de alcançar ainda mais pessoas. Hoje possui 5 produtos digitais, mais de 1.500 alunas online e mais de mil horas de atendimento individual de coaching, além de fazer palestras e treinamentos em grandes empresas.<br/><br/>

            Seu propósito de propósito de vida é orientar e direcionar pessoas na construção de novas realidades pessoais, profissionais e financeiras.
          </p>
        </div>
      </div>
      <div className='py-4 bg-black w-screen'>
        <p className='text-gray text-sm'>CERTIFICAÇÕES:</p>
      </div>
    </Layout>
  )
}
