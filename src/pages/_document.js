import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Cientista social, Coach de vida e carreira, especialista em felicidade e palestrante. Trabalho direcionando mulheres a construção de uma vida próspera, abundante e feliz onde a realização pessoal e profissional acontecem simultaneamente." />
        <meta name="keywords" content="Coaching, Palestra, Vendas, Treinamentos, Palestrante, Promoção, Crescimento, profissional, Carreira" />
        <meta name="author" content="João Miguel" />
        <meta property="og:image" content="https://www.evelynpinheiro.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpalestras.e4303dd1.webp" data-head-react="true" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="200" />
        <meta property="og:url" content="https://www.evelynpinheiro.com.br/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
