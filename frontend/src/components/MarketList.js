import React from 'react';

const MarketList = ({ markets }) => {
  return (
    <div className="p-4 bg-gray-900 min-h-screen">
      <h1 className="text-2xl text-white font-bold mb-6">Political Markets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {markets.map((market, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl text-green-400 font-semibold">{market.electionName}</h2>
            <p className="text-gray-300 mt-2">Ends in: {market.endTime}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Place Bet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketList;
