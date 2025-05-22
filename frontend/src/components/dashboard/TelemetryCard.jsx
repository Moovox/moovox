import React from 'react';

function TelemetryCard({ title, icon, animal, temperature, heartRate, lastUpdate, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 p-2 sm:p-4 ${className}`}>
      <span className="font-bold flex items-center gap-2 text-base sm:text-lg mb-1">
        {icon}
        {title}
      </span>
      <div className="bg-white text-[#3e2c1a] rounded-lg p-2 sm:p-4 text-center text-xs sm:text-base">
        <div><b>Animal:</b> {animal}</div>
        <div><b>Temperatura Corporal:</b> {temperature}</div>
        <div><b>Frequência Cardíaca:</b> {heartRate}</div>
        <div><b>Último Registro:</b> {lastUpdate}</div>
      </div>
    </div>
  );
}

export default TelemetryCard;
