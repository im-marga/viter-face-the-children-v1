import React from 'react';

const Banner = () => {
  return (
    <div className='mx-auto w-full mt-24 px-4'>
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <div className="grid grid-col-1 md:grid-cols-2 gap-10 md:justify-between items-center">
          <div className='block-article max-w-[900px]'>
            <small className="uppercase text-[rgb(252,152,39)] mb-2">Creating Opportunity</small>
            <h1 className='md:leading-tight lg:leading-snug font-bold text-3xl md:text-3xl lg:text-5xl mb-8 text-gray-800'>
              Making a difference for abandoned, abused, or dangerously neglected children
            </h1>
            <a href="#" className='px-4 py-2 text-sm bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition duration-300'>Sponsor Now</a>
          </div>
          <div className="flex justify-center justify-end -order-1 md:order-2">
            <img src="images/h-banner.webp" alt="Banner" className="mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;