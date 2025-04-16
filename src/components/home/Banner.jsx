import React from 'react';

const Banner = () => {
  return (
    <div className='mx-auto max-w-[1300px] w-full mt-24 px-4'>
      <div className="container">
     
        <div className="grid grid-col-1 md:grid-cols-2 gap-10 md:justify-between items-center">
        <div className="flex justify-center justify-end -order-1 md:order-2">
            <img src="images/h-banner.webp" alt="Banner" />
          </div>
          <div className='block-article max-w-[900px]'>
            <small className="uppercase line-4 text-[rgb(252,152,39)]">Creating Opportunity</small>
            <h1 className='leading-tight font-semibold text-3xl md:text-5xl mb-7  text-gray-800'>Making a difference for abandoned, abused, or dangerously neglected children</h1>
            <a href="#" className='px-4 py-2 bg-blue-400 text-white rounded-lg'>Sponsor Now</a>
          </div>
         
          
        </div>
      </div>
    </div>
  );
}

export default Banner;