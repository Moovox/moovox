import React from 'react';

function ImageCard({ title, icon, imageUrl, alt, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 p-2 sm:p-4 ${className}`}>
      <span className="font-bold flex items-center gap-2 text-base sm:text-lg mb-1">
        {icon}
        {title}
      </span>
      <div className="rounded-lg overflow-hidden">
        <img src={imageUrl} alt={alt} className="w-full h-40 sm:h-48 object-cover" />
      </div>
    </div>
  );
}

export default ImageCard;
