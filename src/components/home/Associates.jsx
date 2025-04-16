import React from 'react';

const Associates = () => {
  return (
    <div className="mx-auto max-w-[1300px] w-full mt-24 py-10 px-4">
      <div className="container">
        <div className="text-center mb-8">
          <small className='uppercase tracking-wider text-[rgb(252,152,39)]'>Trusted Affiliates</small>
          <h2 className='leading-tight font-semibold text-3xl text-blue-400 mb-4'>Our Advocacy Associates</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="flex justify-center">
            <img src="images/logo-fwc.png" alt="FWC Logo" className="max-auto" />
          </div>
          <div className="flex justify-center">
            <img src="images/logo-fbs.png" alt="FBS Logo" className="max-auto" />
          </div>
          <div className="flex justify-center">
            <img src="images/logo-fca.png" alt="FCA Logo" className="max-auto" />
          </div>
          <div className="flex justify-center">
            <img src="images/logo-ftw.png" alt="FTW Logo" className="max-auto" />
          </div>
          <div className="flex justify-center">
            <img src="images/logo-pfm.png" alt="PFM Logo" className="max-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Associates;