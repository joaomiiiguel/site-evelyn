import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Cientista social, Coach de vida e carreira, especialista em felicidade e palestrante. Trabalho direcionando mulheres a construção de uma vida próspera, abundante e feliz onde a realização pessoal e profissional acontecem simultaneamente." />
        <meta name="keywords" content="Coaching, Palestra, Vendas, Treinamentos, Palestrante, Promoção, Crescimento, profissional, Carreira" />
        <meta name="author" content="João Miguel" />
        <meta property="og:image" content='../assets/capaMeta.webp' data-head-react="true" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-260RCJD2QS"
        strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-260RCJD2QS');
      `}
      </Script>
      <Script id='activehosted' type="text/javascript">
        {
          `(function (e, t, o, n, p, r, i) { e.visitorGlobalObjectAlias = n; e[e.visitorGlobalObjectAlias] = e[e.visitorGlobalObjectAlias] || function () { (e[e.visitorGlobalObjectAlias].q = e[e.visitorGlobalObjectAlias].q || []).push(arguments) }; e[e.visitorGlobalObjectAlias].l = (new Date).getTime(); r = t.createElement("script"); r.src = o; r.async = true; i = t.getElementsByTagName("script")[0]; i.parentNode.insertBefore(r, i) })(window, document, "https://diffuser-cdn.app-us1.com/diffuser/diffuser.js", "vgo"); vgo('setAccount', '26861870');vgo('setTrackByDefault', true);vgo('process')`
        }
      </Script>
      <Component {...pageProps} />
    </>
  )
}
