import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <React.Fragment>
    <script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/wet-en.js"></script>
      <Component {...pageProps} />
      </React.Fragment>
}

export default MyApp
