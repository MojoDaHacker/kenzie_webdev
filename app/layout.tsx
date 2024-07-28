import React from 'react'
import "../styles/globals.css"
import Hero from '../components/Hero'
import Back from '../components/Back'

type Props = {}

const Layout = ({ children }: any) => {
  return (
    <html lang="en" className="h-auto md:h-screen">
      <body  className=' text-orange-300'>
        <Back />
        <Hero>
          {children}
        </Hero>
        {/* <PrismicPreview repositoryName={repositoryName} /> */}
      </body>
    </html>
  );
}

export default Layout