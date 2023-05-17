import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Script from 'next/script'

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Cientista social, Coach de vida e carreira, especialista em felicidade e palestrante. Trabalho direcionando mulheres a construção de uma vida próspera, abundante e feliz onde a realização pessoal e profissional acontecem simultaneamente." />
        <meta name="keywords" content="Coaching, Palestra, Vendas, Treinamentos, Palestrante, Promoção, Crescimento, profissional, Carreira" />
        <meta name="author" content="João Miguel" />
        <meta property="og:image" content="https://www.evelynpinheiro.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.ee99ce1b.webp&w=640&q=75" data-head-react="true" />

      </Head>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-260RCJD2QS', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      />
      <div className='flex flex-col justify-center items-center'>
        {children}
        <Footer />
      </div>
    </div>
  )
}
