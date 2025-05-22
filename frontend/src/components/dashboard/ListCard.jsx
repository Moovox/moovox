import React from 'react';

function ListCard({ title, items = [], className = '' }) {
  return (
    <div className={`flex flex-col gap-2 p-2 sm:p-4 ${className}`}>
      <span className="font-bold text-base sm:text-lg mb-1">{title}</span>
      <div className="flex flex-col gap-2">
        {items.map((item, idx) => (
          <div key={idx} className="bg-[#a97c50] rounded-lg p-1 sm:p-2 text-white text-center text-xs sm:text-base">{item}</div>
        ))}
      </div>
    </div>
  );
}

export default ListCard;
