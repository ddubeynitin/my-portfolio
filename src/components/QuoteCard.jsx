import React from "react";
import { FaPen } from "react-icons/fa";

const QuoteCard = ({ quote, setShowQuote }) => {

  return (

      <div className="w-[50%] text-sm absolute top-[40vh] lg:top-[40vh] z-11 left-25 lg:left-80 rounded-lg p-4 shadow-lg shadow-black ">
        <button
          className="text-white text-lg w-10 h-10 absolute animate-ping -top-5 -right-5 border rounded-full bg-transparent m-3 font-bold hover:bg-red-600 hover:border-0 transition-colors flex items-center justify-center"
          onClick={() => {
            setShowQuote(false);
          }}
        >
          X
        </button>

        <p className="font-barlow  lg:w-50 w-full flex gap-2 justify-center items-center text-white p-1 rounded-lg">
          Quote for the day  : <FaPen className="animate-pulse" />
          
        </p>
        <hr className="border-t opacity-50 my-2"/>
        <div className="mt-2 font-bold font-barlow text-white text-center lg:text-lg">
            {quote.quote}{quote.author ? ` - ${quote.author}` : ''}
        </div>
      </div>

  );
};

export default QuoteCard;
