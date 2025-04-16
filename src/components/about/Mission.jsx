import React from 'react'

const Mission = () => {
  return (
    <div className="mx-auto max-w-[1300px] w-full mt-24 px-4">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="mb-6 md:mb-0">
          <img src="img/about-mission.webp" alt="About Us" />
        </div>
        <div className="block-article max-w-[500px]">
          <small className='uppercase tracking-wider text-[rgb(252,152,39)]'>Mission</small>
          <h2 className='leading-tight font-semibold text-3xl text-blue-400 mb-4'>Transforming Dreams into Reality</h2>
          <p className='mb-7 text-gray-700'>
          FTC mission is to make a difference in the lives of street children by rescuing, protecting, and caring for those that are abandoned, abused, or dangerously neglected (AADN). We are making a difference in the lives of children in need through child care programs and centers that provide full time protection and care, academic and spiritual development, and dedicated staff committed to the long term welfare and development of AADN children. We are committed to doing all that is necessary to guide them into adulthood as young men and women who may lead successful adult lives.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Mission