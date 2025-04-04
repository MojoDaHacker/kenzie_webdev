import React, { Suspense } from 'react'
import "../styles/globals.css"
import 'rsuite/dist/rsuite-no-reset.min.css';
import { CustomProvider } from 'rsuite'
import Hero from '../components/Hero'
import Back from '../components/Back'
import Navs from '../components/Navs';

type Props = {}

const Layout = async ({ children }: any) => {
  return (
    <html lang="en" className="h-auto md:h-screen">
      <body className=' text-orange-300 relative'>
        <CustomProvider>
          <div className='grid grid-cols-4'>
            <div className='hidden'>Hello</div>
            <div className='col-span-4'>
              {children}
            </div>
          </div>
          <div className='absolute left-0 bottom-0 z-10 w-full '>
            <div className='w-full h-full flex justify-end items-end p-6'>
              <Navs />
            </div>
          </div>
          {/* <Back /> */}
          {/* <PrismicPreview repositoryName={repositoryName} /> */}
        </CustomProvider>
      </body>
    </html>
  );
}

export default Layout