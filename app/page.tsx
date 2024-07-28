import React from 'react'
import Navs from '../components/Navs'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='w-full h-full flex justify-end items-end'>
      <Navs />
    </div>
  )
}

export default Page