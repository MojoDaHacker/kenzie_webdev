import React, { Suspense } from 'react'
import "../styles/globals.css"
import 'rsuite/dist/rsuite-no-reset.min.css';
import { CustomProvider } from 'rsuite'
import Hero from '../components/Hero'
import Back from '../components/Back'

type Props = {}

const Layout = async ({ children }: any) => {

  return (
    <html lang="en" className="h-auto md:h-screen">
      <body className=' text-orange-300'>
        <CustomProvider>
          <Back />
          <Hero>
            {children}
          </Hero>
          {/* <PrismicPreview repositoryName={repositoryName} /> */}
        </CustomProvider>
      </body>
    </html>
  );
}

export default Layout