import React, { useEffect, useState } from 'react';
import hallOfFameImage from '../Assest/coches-img-1.webp'; // Ensure the path is correct

const HallOfFameSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sectionStyle = {
    background: 'radial-gradient(107.67% 107.67% at 50% 20.81%, #000B3E 0%, #020202 100%)',
    padding: '60px 20px',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
    color: '#ffffff',
  };

  const subtitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '10px',
  };

  const titleStyle = {
    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
    fontWeight: '700',
    marginBottom: '40px',
    maxWidth: '800px',
    marginInline: 'auto',
    lineHeight: '1.4',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '1000px',
    borderRadius: '30px',
    margin: '0 auto 40px',
    display: 'block',
  };

  const buttonStyle = {
    background: 'linear-gradient(to right, #f8b500, #e68a00)',
    border: 'none',
    fontSize: isMobile ? '16px' : '20px',
    padding: isMobile ? '12px 30px' : '14px 40px',
    fontWeight: '700',
    color: '#000',
    borderRadius: '12px',
    marginTop: '20px',
    cursor: 'pointer',
    width: isMobile ? '90%' : '60%',
    maxWidth: '350%',
    animation: 'wiggle 1.5s ease-in-out infinite',
  };

  return (
    <div style={sectionStyle}>
      <p style={subtitleStyle}>Learn from the Coach of Coaches</p>
      <h3 style={titleStyle}>
        Did You Know? India’s Top Digital Coaches All Trained by Siddharth Rajsekar!
      </h3>

      <img
        src={hallOfFameImage}
        alt="Hall of Fame Awards"
        style={imageStyle}
      />

      <button style={buttonStyle}>Grab Your FREE Seat Now</button>

      <style>
        {`
          @keyframes wiggle {
            0% { transform: translateX(0); }
            15% { transform: translateX(-4px); }
            30% { transform: translateX(4px); }
            45% { transform: translateX(-4px); }
            60% { transform: translateX(4px); }
            75% { transform: translateX(-2px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

export default HallOfFameSection;
