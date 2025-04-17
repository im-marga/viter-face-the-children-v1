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
      answer: "Your payment is processed using secure methods to ensure safety."
    },
    {
      id: 3,
      question: "Can I update my card number using your website?",
      answer: "Yes, you can update your card number in your account settings."
    },
    {
      id: 4,
      question: "Will I receive personal updates from FTC and the child I pledge to on a regular basis?",
      answer: "Yes, you will receive regular updates."
    },
    {
      id: 5,
      question: "Can I make a pledge to more than one FTC Child?",
      answer: "Yes, you can make pledges to multiple children."
    },
    {
      id: 6,
      question: "Can I make a Partner Pledge for the entire monthly care of a child in the FTC program?",
      answer: "Yes, you can make a Partner Pledge for the child."
    },
    {
      id: 7,
      question: "How much does an FTC Child Partner Pledge Cost?",
      answer: "The cost can vary depending on the chosen program."
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
          <div key={id} className="grid grid-col-1 md:grid-cols-2 gap-10 md:justify-between items-center">
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