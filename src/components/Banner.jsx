import React, { useEffect, useState } from 'react';

const FreeMasterclass = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          margin: 0,
          fontFamily: 'Arial, sans-serif',
          background: 'linear-gradient(to bottom, #020024 100%, #090979 30%, #000000 100%)',
          color: 'white',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', padding: isMobile ? '30px 15px' : '40px 20px' }}>
          <div
            style={{
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              borderRadius: '40px',
              padding: '12px 20px',
              fontSize: '15px',
              fontWeight: '500',
              display: 'inline-block',
              background: 'transparent',
              letterSpacing: '0.5px',
            }}
          >
            90-Min FREE Workshop
          </div>

          <h1 style={{ fontSize: isMobile ? '26px' : isTablet ? '30px' : '36px', lineHeight: 1.4 }}>
            Learn How We Attracted <span style={{ color: '#fa513a' }}> 1,911+ </span>
            <br />
            <span style={{ color: '#fa513a' }}> Customers </span> (81.24 L Revenue) In Just A
            <br />
            Few Weeks On <span style={{ color: '#fa513a' }}> Total Autopilot Using AI </span>
            <br />- Without Any Office!
          </h1>
          <p style={{ fontSize: '15px', marginTop: '10px' }}>
            Whether your goal is ₹1L, ₹5L or ₹10L/month — it’s not just about income, it’s about freedom,
            peace, and the life you truly deserve<br/> — even if you’re starting from zero. It's time to turn your passion into profit!
          </p>
        </div>

        {/* Main Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0 20px 40px',
            gap: '40px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Video */}
          <div
            style={{
              flex: 1,
              minWidth: '300px',
              maxWidth: isMobile ? '100%' : '600px',
              textAlign: 'center',
            }}
          >
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
              <iframe
                src="https://www.youtube.com/embed/tKmtebtz3SI"
                title="Free Masterclass Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '70%',
                  height: '70%',
                  borderRadius: '12px',
                  marginLeft: '20%',
                }}
              />
            </div>
          </div>

          {/* Right Info Boxes */}
          <div style={{ flex: 1, minWidth: '300px', padding: '10px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: '20px',
              }}
            >
              {[
                 { icon: '📆', label: 'Date', value: '25-June' },        
                 { icon: '🕒', label: 'Time', value: '11:00 AM' },        
                 { icon: '🗣️', label: 'Language', value: 'English' },     
                 { icon: '⏳', label: 'Duration', value: '90 Mins' }       
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '20px',
                    padding: '15px',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <span style={{ fontSize: '24px', color: '#fbbc04', marginRight: '10px' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '14px' }}>{item.label}</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button
                className="wiggle-button"
                style={{
                  background: 'linear-gradient(to right, #f8b500, #e68a00)',
                  color: 'black',
                  fontSize: isMobile ? '18px' : '20px',
                  padding: isMobile ? '12px 30px' : '14px 40px',
                  border: 'none',
                  borderRadius: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  width: isMobile ? '100%' : '90%',
                }}
              >
                Grab Your FREE Seat Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeMasterclass;
