import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Script from 'next/script'

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='flex flex-col justify-center items-center'>
        {children}
        <Footer />
      </div>
    </div>
  )
}
