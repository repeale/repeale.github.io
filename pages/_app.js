import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
