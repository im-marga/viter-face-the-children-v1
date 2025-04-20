import React from 'react';

const Form = () => {
  return (
    <div className="mx-auto max-w-[1300px] w-full mt-24 px-4 mt-24">
      <div className="grid grid-col-1 md:grid-cols-2 gap-10 md:justify-between">
      <div className="content flex flex-col space-y-4 pr-8">
        <p className="text-[13px] text-[#FC9827] font-semibold uppercase tracking-wide">
          Frequently Asked Question</p>
          <h2 className="text-2xl lg:text-3xl lg:leading-tight lg:leading-snug font-bold text-[#3A8CC9]">
            Can’t find what you <br /> are looking for?</h2>
            <p className="text-[15px] text-[#2C2C2C] leading-relaxed">
               If your questions is not listed above, you can use <br />
               the form to send directly to us your questions
               </p></div>

        <form className="bg-[#f7f9fc] p-6 rounded-lg shadow-sm space-y-5">
          {["Name", "Email", "Phone", "Subject"].map((field, index) => (
            <div key={index} className="relative">
              <label className="absolute -top-2 left-4 px-1 bg-[#f7f9fc] text-sm text-blue-400">
                {field}
              </label>
              <input
                type={field === "Email" ? "email" : "text"}
                required
                className="w-full border border-blue-200 rounded-md py-2.5 px-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-300"
              />
            </div>
          ))}

          {/* Message */}
          <div className="relative">
            <label className="absolute -top-2 left-4 px-1 bg-[#f7f9fc] text-sm text-blue-400">
              Message
            </label>
            <textarea
              required
              rows="5"
              className="w-full h-[200px] border border-blue-200 rounded-md py-2.5 px-4 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-300 resize-none"
            />
          </div>

          {/* Fake reCAPTCHA placeholder */}
          <div className="bg-white border border-gray-300 rounded-md p-4">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 border border-black"></div>
              <span className="text-sm">I'm not a robot</span>
            </div>
            <p className="text-[10px] text-right text-gray-400 mt-2">reCAPTCHA<br />Privacy - Terms</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#FED7AA] text-white font-semibold rounded-md px-6 py-2 text-sm hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
