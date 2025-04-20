import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";

const Questions = () => {
  const [activeQuestionId, setActiveQuestionId] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Can I communicate with the child I have made a Pledge to?",
      answer: "Yes. You can email them, but all communication is monitored by FTC management."
    },
    {
      id: 2,
      question: "How can you make sure our payment is secure?",
      answer: "Our online donation transaction is a secure SSL encrypted payment using Stripe payment processor with the best-in-class security tools and practices to maintain a high level of security."
    },
    {
      id: 3,
      question: "Can I update my card number using your website?",
      answer: "Yes. You can change it on your account settings. Login to your donor console"
    },
    {
      id: 4,
      question: "Will I receive personal updates from FTC and the child I pledge to on a regular basis?",
      answer: "Yes, you will receive regular updates about the progress and developments of our program. Additionally, from time to time you will receive communications directly from the child you sponsor."
    },
    {
      id: 5,
      question: "Can I make a pledge to more than one FTC Child?",
      answer: "Yes. We welcome your pledges to as many children as possible!"
    },
    {
      id: 6,
      question: "Can I make a Partner Pledge for the entire monthly care of a child in the FTC program?",
      answer: "Yes. But the full-care sponsorship of a child in our program is limited to $200 monthly. Therefore, if a child has current sponsorship pledges, the website will allow only the remaining balance necessary for full-care coverage."
    },
    {
      id: 7,
      question: "How much does an FTC Child Partner Pledge Cost?",
      answer: "You can partner with us by sponsoring a child for as little as $20 monthly. You can also select higher sponsorship amounts if the child has remaining full-care needs. Please see the options presented for a selected child on the sponsorship page."
    }
  ];

  const handleQuestionClick = (id) => {
    setActiveQuestionId(activeQuestionId === id ? null : id);
  };

  return (
    <div className='mx-auto max-w-[1300px] w-full mt-24 px-4'>
      <div className="container">
        <div className="text-center">
          <small className="uppercase tracking-wider text-[rgb(252,152,39)]">
            your questions, our clarity
          </small>
          <h1 className='leading-tight font-semibold text-3xl md:text-5xl mb-7 text-gray-800'>
            Our Commitment to Child Development
          </h1>
        </div>
        {questions.map(({ id, question, answer }) => (
          <div key={id} className="grid grid-col-1 md:grid-cols-2 gap-10 md:justify-between">
            <div>
              <h2 onClick={() => handleQuestionClick(id)} className={`flex justify-between items-center cursor-pointer text-lg text-gray-600 mt-2 hover:bg-blue-400 hover:text-white rounded-lg p-2 mb-2  ${activeQuestionId === id ? 'border rounded-lg border-blue-500 text-blue-500' : 'border-gray-300'}`}>
                {`${id.toString().padStart(2, '0')}  ${question}`} <FaChevronRight />
              </h2>
            </div>
            {activeQuestionId === id && (
              <div>
                <p className={`border rounded p-2 mb-2 border-blue-500 mt-2`}>{answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;