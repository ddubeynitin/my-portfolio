import React from "react";

const QuoteCard = ({ quote, setShowQuote }) => {

  return (

      <div className="w-[50%] text-sm absolute top-[40vh] lg:top-[40vh] z-11 left-25 lg:left-80 rounded-2xl p-4 shadow-lg shadow-pink-500/50 ">
        <button
          className="text-white text-2xl w-10 h-10 absolute -top-5 -right-5 rounded-full bg-blue-500 m-3 font-bold"
          onClick={() => {
            setShowQuote(false);
          }}
        >
          X
        </button>

        <p className="font-sans font-bold lg:w-50 w-full text-center text-yellow-500 p-1 rounded-lg shadow-md shadow-pink-500/50">
          Quote of the Day
        </p>
        <div className="mt-2 font-bold font-sans text-white text-center lg:text-lg">
            {quote.quote}{quote.author ? ` - ${quote.author}` : ''}
        </div>
      </div>

  );
};

export default QuoteCard;
