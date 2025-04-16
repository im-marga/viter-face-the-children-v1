import React from 'react';

const Section = () => {
  return (
    <div className="mx-auto max-w-[1300px] w-full mt-24 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="mb-6 md:mb-0">
            <img src="images/h-about.webp" alt="About Us" />
          </div>
          <div className="block-article max-w-[500px]">
            <small className='uppercase tracking-wider text-[rgb(252,152,39)]'>Who We Are</small>
            <h2 className='leading-tight font-semibold text-3xl text-blue-400 mb-4'>Let's Share to Change a Life Today</h2>
            <p className='mb-7 text-gray-700'>
              When we come together as a community, our collective efforts can lead to monumental changes. By fostering a culture of sharing, we not only help those in immediate need but also build a foundation of support and compassion that benefits everyone.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-2">
                <p className="!leading-none !text-[clamp(20px,_6vw,_40px)] !mb-0 font-bold text-accent text-[rgb(252,152,39)]">20 <span className='text-2xl'>+</span></p>
                <span className='text-xs'>Years Experience</span>
              </div>
              <div className="p-2">
                <p className="!leading-none !text-[clamp(20px,_6vw,_40px)] !mb-0 font-bold text-accent text-[rgb(252,152,39)]">10 <span className='text-2xl'>+</span></p>
                <span className='text-xs'>Volunteers</span>
              </div>
              <div className="p-2">
                <p className="!leading-none !text-[clamp(20px,_6vw,_40px)] !mb-0 font-bold text-accent text-[rgb(252,152,39)]">30 <span className='text-2xl'>+</span></p>
                <span className='text-xs'>Resident Child</span>
              </div>
              <div className="p-2">
                <p className="!leading-none !text-[clamp(20px,_6vw,_40px)] !mb-0 font-bold text-accent text-[rgb(252,152,39)]">10 <span className='text-2xl'>+</span></p>
                <span className='text-xs'>Non-Resident Child</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;