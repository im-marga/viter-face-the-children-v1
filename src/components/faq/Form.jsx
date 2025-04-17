import React from 'react';

const Form = () => {
  return (
    <div className="mx-auto max-w-[1300px] w-full mt-24 px-4">
      <div className="container">
        <div className="grid grid-col-1 md:grid-cols-2 gap-10 md:justify-between">
          <div className="mt-4">
            <small className="uppercase tracking-wider text-[rgb(252,152,39)]">
              frequently asked question
            </small>
            <h2 className='leading-tight font-semibold text-3xl text-blue-400 mb-4'>Can't find what you are looking for?</h2>
            <p>If your questions are not listed above, you can use the form to send directly to us your questions</p>
          </div>
          
          <form className='bg-white p-8 rounded-lg shadow-lg'>
            <div className="mb-4">
              <label className='block text-gray-700 font-semibold mb-2'>Name</label>
              <input 
                type="text" 
                className='border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                
              />
            </div>
            <div className="mb-4">
              <label className='block text-gray-700 font-semibold mb-2'>Email</label>
              <input 
                type="email" 
                className='border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                
              />
            </div>
            <div className="mb-4">
              <label className='block text-gray-700 font-semibold mb-2'>Phone</label>
              <input 
                type="text" 
                className='border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                
              />
            </div>
            <div className="mb-4">
              <label className='block text-gray-700 font-semibold mb-2'>Subject</label>
              <input 
                type="text" 
                className='border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                
              />
            </div>
            <div className="mb-4">
              <label className='block text-gray-700 font-semibold mb-2'>Message</label>
              <textarea 
                className='border border-gray-300 rounded-lg p-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500' 
              />
            </div>
            <button className='bg-blue-700 text-white font-semibold rounded-lg py-2 w-full hover:bg-blue-800 transition duration-300'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;