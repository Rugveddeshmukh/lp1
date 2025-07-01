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

        @media (max-width: 768px) {
          .offer-container {
            flex-direction: column;
            text-align: center;
            gap: 10px;
            padding: 15px 10px;
          }

          .offer-left, .offer-right {
            margin: 0;
          }

          .offer-button {
            width: 100% !important;
          }
        }
      `}</style>

      <div
        className="offer-container"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 40px',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          boxShadow: '0 -1px 10px rgba(0, 0, 0, 0.15)',
          zIndex: 9999,
          flexWrap: 'wrap',
          
        }}
      >
        {/* Left Side: Price and Countdown */}
        <div className="offer-left" style={{ padding: '10px 0',marginLeft:'10%' }}>
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
        <div className="offer-right" style={{ padding: '10px 0',marginRight:'10%' }}>
          <button
            className="wiggle-button offer-button"
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
              width: '270px',
              
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
