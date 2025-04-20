import React from 'react'

const Vision = () => {
  return (
    <div className="mx-auto w-full mt-24 px-4">
    <div className="container mx-auto max-w-7xl flex justify-between items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="-order-1 md:order-2 lg:order-2">
          <img src="img/about-vision.webp" alt="Services"/>
        </div>
        <div className="block-article">
          <small className='uppercase tracking-wider text-[rgb(252,152,39)]'>Vision</small>
          <h2 className='leading-tight font-semibold text-3xl text-blue-400 mb-4'>Empowering Change, Inspiring Purpose</h2>
          <p className='mb-7 text-gray-700'>
          A nationwide network of child care centers committed to the advocacy, protection, care and development of abandoned, abused, or dangerously neglected children.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Vision