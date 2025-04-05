// src/components/Header.js
import React from 'react';

const Header = ({ amount, currency, recipientName }) => {
  return (
    <div className="text-center p-4 bg-white rounded-lg shadow-md">
      <div className="text-2xl font-bold mb-1">{amount} {currency}</div>
      <div className="text-lg text-gray-600">{recipientName}</div>
      <button className="mt-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
        <i className="fas fa-th-large"></i> General
      </button>
    </div>
  );
};

export default Header;
