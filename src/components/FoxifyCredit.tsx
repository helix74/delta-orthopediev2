import React from 'react';
import Image from 'next/image';

interface FoxifyCreditProps {
  className?: string;
}

const FoxifyCredit: React.FC<FoxifyCreditProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center text-sm ${className}`}>
      <span>Designed by</span>
      <Image 
        src="/images/logo/foxify_logo.svg" 
        alt="Foxify Logo" 
        width={120} 
        height={24} 
        style={{ marginLeft: 8, marginTop: 2 }} 
      />
    </div>
  );
};

export default FoxifyCredit; 