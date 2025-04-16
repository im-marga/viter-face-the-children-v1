import React from 'react'

const Banner = () => {
  return (
    <div className='mx-auto max-w-[1300px] w-full mt-24 px-4'>
      <div className="container">
        <div className="grid grid-col-1 md:grid-cols-2 gap-10 md:justify-between items-center">
        <div>
            <img src="img/about-banner.webp" alt="Banner" />
          </div>
          <div className='block-article max-w-[900px]'>
            <small className="uppercase line-4 text-[rgb(252,152,39)]">From Streets to Smiles</small>
            <h1 className='leading-tight font-semibold text-3xl md:text-5xl mb-7  text-gray-800'>Transform lives from the harsh reality of the streets to the warmth and comfort of genuine smiles</h1>
            <a href="#" className='px-4 py-2 bg-blue-400 text-white rounded-lg'>Sponsor Now</a>
          </div>
         
          
        </div>
      </div>
    </div>
  )
}

export default Banner