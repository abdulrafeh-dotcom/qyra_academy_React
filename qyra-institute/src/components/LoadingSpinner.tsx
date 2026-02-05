import React from 'react';
import '../styles/Global.css';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  message = 'Loading...' 
}) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return { width: '20px', height: '20px' };
      case 'large':
        return { width: '40px', height: '40px' };
      default:
        return { width: '30px', height: '30px' };
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '1rem'
    }}>
      <div 
        className="loading" 
        style={{ 
          ...getSizeClass(),
          margin: '0 auto'
        }}
      />
      {message && (
        <p style={{ 
          color: 'var(--text-light)', 
          fontSize: '0.9rem',
          margin: 0 
        }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
