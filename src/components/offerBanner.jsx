import React from 'react';

const OfferBanner = () => {
  return (
    <>
      {/* Keyframe animation for button */}
      <style>{`
        @keyframes wiggle {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }

        .wiggle-button {
          animation: wiggle 0.5s ease-in-out infinite;
        }
      `}</style>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '15px',
          borderRadius: '10px 10px 0 0',
          boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.1)',
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
        
          
          
        }}
      >
        {/* Left Side: Price and Countdown */}
        <div style={{ padding: '10px 20px', marginLeft: '15%' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#000' }}>
            FREE{' '}
            <span
              style={{
                textDecoration: 'line-through',
                color: 'crimson',
                fontSize: '22px',
              }}
            >
              ₹1999
            </span>
          </div>
          <div
            style={{
              fontSize: '14px',
              marginTop: '5px',
              fontWeight: '500',
              color: '#000',
            }}
          >
            Offer Ends in <span style={{ fontWeight: 'bold' }}>0:00</span> Mins
          </div>
        </div>

        {/* Right Side: Register Button */}
        <div style={{ padding: '10px 20px', marginRight: '15%' }}>
          <button
            className="wiggle-button"
            style={{
              background: 'linear-gradient(90deg, #FFC74B 0%, #E39600 100%)',
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: '600',
              color: '#1f1f1f',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              width: '160%',
            }}
          >
            Register Now
          </button>
        </div>
      </div>
    </>
  );
};

export default OfferBanner;
