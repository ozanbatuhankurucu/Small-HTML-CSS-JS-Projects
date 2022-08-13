import React from 'react'
import { Helmet } from 'react-helmet'
import BlurryLoading from './BlurryLoading'

export function Wrapper() {
  return (
    <>
      <Helmet>
        <title>Blurry Loading</title>
      </Helmet>
      <div className='flex justify-center items-center h-screen w-screen bg-black'>
        <BlurryLoading />
      </div>
    </>
  )
}

export default Wrapper
