import React, { useEffect, useState } from 'react';

const LearnSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerStyle = {
    background: 'radial-gradient(107.67% 107.67% at 50% 20.81%, #000B3E 0%, #020202 100%)',
    color: '#fff',
    padding: '60px 20px',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif'
  };

  const headingStyle = {
    fontSize: isMobile ? '26px' : '35px',
    fontWeight: '700',
    marginBottom: '20px'
  };

  const highlightStyle = {
    color: '#f85a40'
  };

  const descriptionStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '40px'
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '40px'
  };

  const cardStyle = {
    backgroundColor: '#18215c',
    borderRadius: '16px',
    padding: '30px 20px',
    width: '280px',
    textAlign: 'left',
    position: 'relative',
    opacity: 0,
    animationName: 'fadeInUp',
    animationDuration: '1s',
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards'
  };

  const labelStyle = {
    position: 'absolute',
    top: '0px',
    left: '5px',
    backgroundColor: '#f1e400',
    color: '#000',
    fontWeight: '600',
    borderRadius: '10px 0px 10px',
    padding: '2px 10px'
  };

  const cardTitleStyle = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#f85a40',
    marginBottom: '10px'
  };

  const cardTextStyle = {
    fontSize: '15px',
    fontWeight: '500',
    color: '#fff'
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

  const cardData = [
    {
      label: 'Secret #1',
      title: 'Find Your Niche',
      text: 'Uncover your most profitable niche in just 10 minutes with my powerful AI tool – no expertise needed'
    },
    {
      label: 'Secret #2',
      title: 'Design Digital Products',
      text: 'Create high-value, high-profit courses that people will pay premium prices for – using my foolproof “ChatGPT Prompts”'
    },
    {
      label: 'Secret #3',
      title: 'Get Autopilot Sales',
      text: "Get my 'Video Money Funnel' to attract premium buyers 24/7 and grow your tribe."
    }
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>
        What You Will Learn in <span style={highlightStyle}>90 Minutes!</span>
      </h2>
      <p style={descriptionStyle}>
        Picture this: a knowledge business that cranks out sales for your video courses and digital products 24/7—even while you’re catching some Z’s. <br />
        It’s time to stop trading hours for rupees and start raking in dough around the clock!
      </p>

      <div style={cardContainerStyle}>
        {cardData.map((card, i) => (
          <div key={i} style={{ ...cardStyle, animationDelay: `${i * 0.2}s` }}>
            <div style={labelStyle}>{card.label}</div>
            <div style={cardTitleStyle}>{card.title}</div>
            <div style={cardTextStyle}>{card.text}</div>
          </div>
        ))}
      </div>

      <button style={buttonStyle} aria-label="Grab your free seat now">
        Grab Your FREE Seat Now
      </button>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

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

export default LearnSection;
