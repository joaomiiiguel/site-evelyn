import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import Footer from './Footer'

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Cientista social, Coach de vida e carreira, especialista em felicidade e palestrante. Trabalho direcionando mulheres a construção de uma vida próspera, abundante e feliz onde a realização pessoal e profissional acontecem simultaneamente."/>
      </Head>
      <div className='flex flex-col justify-center items-center'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}
