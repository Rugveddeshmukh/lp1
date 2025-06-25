import React from 'react';
import hallOfFameImage from '../Assest/coches-img-1.webp'; // Update the path as needed

const HallOfFameSection = () => {
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
    color: '#fff',
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '40px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.4',
  };

  const imageStyle = {
    width: '80%',
    maxWidth: '1000px',
    borderRadius: '30px',
    margin: '0 auto',
    display: 'block',
  };

  const buttonStyle = {
    background: 'linear-gradient(to right, #f8b500, #e68a00)',
    border: 'none',
    padding: '14px 40px',
    fontSize: '16px',
    fontWeight: '700',
    color: '#000',
    borderRadius: '12px',
    marginTop: '40px',
    cursor: 'pointer',
    width: '78%',
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

      {/* Button with animation */}
      <button style={buttonStyle}>Grab Your FREE Seat Now</button>

      {/* Animation CSS */}
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
