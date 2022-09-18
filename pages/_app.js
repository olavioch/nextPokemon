import '../styles/globals.css'
import Container from '../components/Container'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Script id='google-analytics' strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MPB4HJX');`}
      </Script>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
