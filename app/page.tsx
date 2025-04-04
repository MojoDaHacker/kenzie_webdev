import React from 'react'
import Navs from '../components/Navs'
import Hero from '../components/Hero'

type Props = {}

const Page = (props: Props) => {
  const playbackId = process.env.PLAYBACK_ID;
  return (
    <div>
      <div>
        <Hero playbackId={playbackId} />
      </div>
      <div>
        <p>I offer services for drone videography/photography, web development, and marketing.</p>
        <div className='min-h-144'></div>
        <div className='min-h-144'></div>
        <div className='min-h-144'></div>
      </div>
    </div>
  )
}

export default Page