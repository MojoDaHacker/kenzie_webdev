import React, { Suspense } from 'react'
import "../styles/globals.css"
// import 'rsuite/dist/rsuite-no-reset.min.css';
// import { CustomProvider } from 'rsuite'
import Hero from '../components/Hero'
import Back from '../components/Back'
import Navs from '../components/Navs';

type Props = {}

const Layout = async ({ children }: any) => {
  const playbackId = process.env.PLAYBACK_ID;
  return (
    <html lang="en" className="h-svh overflow-hidden">
      <body className='text-orange-300 bg-black relative h-full'>
        <div className='h-full flex flex-col relative z-10'>
          <div>
            <Back />
          </div>
          <main className='flex-1 overflow-auto'>
            {children}
          </main>
          <div className='w-full '>
            <div className='w-full h-full flex justify-end items-end p-6'>
              <Navs />
            </div>
          </div>
        </div>
        <div className='h-screen absolute top-0 w-full'>
          <Hero playbackId={playbackId} />
        </div>
        {/* <PrismicPreview repositoryName={repositoryName} /> */}
      </body>
    </html>
  );
}

export default Layout