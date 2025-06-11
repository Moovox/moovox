import { HeartPulse } from "lucide-react";
import React from "react";

/**
 * Ícone de batimento cardíaco animado
 * @param {{ className?: string }} props
 */
function HeartBeatIcon({ className = "" }) {
  return (
    <span className={`relative flex items-center justify-center ${className}`}>
      <HeartPulse className="animate-heartbeat h-5 w-5 text-red-600 sm:h-6 sm:w-6" />
      <style>{`
        @keyframes heartbeat {
          0% { 
            transform: scale(1); 
            filter: brightness(1);
          }
          14% { 
            transform: scale(1.1); 
            filter: brightness(1.2);
          }
          28% { 
            transform: scale(0.95); 
            filter: brightness(0.9);
          }
          42% { 
            transform: scale(1.05); 
            filter: brightness(1.1);
          }
          70% { 
            transform: scale(1); 
            filter: brightness(1);
          }
          100% { 
            transform: scale(1); 
            filter: brightness(1);
          }
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s infinite ease-in-out;
          transform-origin: center;
          transition: all 0.1s ease;
        }
        .animate-heartbeat:hover {
          animation-duration: 1.2s;
        }
      `}</style>
    </span>
  );
}

export default HeartBeatIcon;
