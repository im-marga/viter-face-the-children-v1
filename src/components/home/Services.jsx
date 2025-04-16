import React from 'react';

const Services = () => {
  return (
    <div className="mx-auto max-w-[1300px] w-full mt-24 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="-order-1 md:order-2 lg:order-2">
            <img src="images/h-service.webp" alt="Services"/>
          </div>
          <div className="block-article max-w-[500px]">
            <small className='uppercase tracking-wider text-[rgb(252,152,39)]'>Our Solutions</small>
            <h2 className='leading-tight font-semibold text-3xl text-blue-400 mb-4'>Services We Provide</h2>
            <p className='mb-7 text-gray-700'>
              Making a difference in the lives of children can be simplified into a few essential actions focused on their overall well-being. Here are the things we provide for our children.
            </p>
            <a href="#" className='inline-block px-6 py-3 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500 transition duration-300'>
              Learn More
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Services;