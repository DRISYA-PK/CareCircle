import React from 'react';

interface DonateButtonProps {
  onClick?: () => void;
  className?: string;
}

const DonateButton: React.FC<DonateButtonProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-4 
        bg-[#E2B4A3] hover:bg-[#2d8c84] 
        text-white font-bold text-xl 
        px-1 py-1 
        rounded-xl 
        shadow-[0_4px_10px_rgba(0,0,0,0.3)] 
        transition-all active:scale-95
        ${className}
      `}
    >
      <span>Donate Now</span>
      
      {/* Hand & Heart Icon Container */}
      <div className="relative flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-3 h-3"
        >
          {/* Simple heart and hand representation */}
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </button>
  );
};

export default DonateButton;