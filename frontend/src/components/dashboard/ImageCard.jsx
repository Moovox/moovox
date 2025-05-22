import React, { useState } from 'react';

function ImageCard({ title, icon, imageUrl, alt, className = '' }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className={`flex flex-col gap-2 p-2 sm:p-4 ${className}`}>
      <span className="font-bold flex items-center gap-2 text-base sm:text-lg mb-1">
        {icon}
        {title}
      </span>
      <div className="rounded-lg overflow-hidden relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse z-10">
            <span className="text-gray-400 text-xs">Carregando mapa...</span>
          </div>
        )}
        <img
          src={imageUrl}
          alt={alt}
          className={`w-full h-40 sm:h-48 object-cover transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setLoading(false)}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default ImageCard;
