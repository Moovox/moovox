import React from 'react';

function MessageCard({ title, message, className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 p-2 sm:p-4 ${className}`}>
      <span className="font-bold text-base sm:text-lg mb-1">{title}</span>
      <div className="text-[#7c5a3a] text-center text-xs sm:text-base">{message}</div>
    </div>
  );
}

export default MessageCard;
