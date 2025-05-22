import { HeartPulse } from 'lucide-react';
import React from 'react';

/**
 * Ícone de batimento cardíaco animado
 * @param {{ className?: string }} props
 */
function HeartBeatIcon({ className = '' }) {
  return (
    <span className={`relative flex items-center justify-center ${className}`}>
      <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 animate-pulse-heart" />
      <style>{`
        @keyframes pulse-heart {
          0%, 100% { transform: scale(1); }
          10% { transform: scale(1.1); }
          20% { transform: scale(0.95); }
          30% { transform: scale(1.05); }
          40% { transform: scale(0.97); }
          50% { transform: scale(1.1); }
          60% { transform: scale(0.92); }
          70% { transform: scale(1.05); }
          80% { transform: scale(0.97); }
          90% { transform: scale(1.1); }
        }
        .animate-pulse-heart {
          animation: pulse-heart 1.2s infinite cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </span>
  );
}

export default HeartBeatIcon;
