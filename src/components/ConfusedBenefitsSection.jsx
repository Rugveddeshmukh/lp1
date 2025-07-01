import React, { useEffect, useState } from 'react';

const benefits = [
  {
    emoji: '🌟',
    text: <>The opportunity to turn your <strong>passion into a real business</strong> that brings <u>financial freedom</u> and lets you <u>live on your terms</u></>,
  },
  {
    emoji: '🌱',
    text: <>The <strong>ability to serve more people</strong> and make a bigger impact <u>without feeling burnt out</u></>,
  },
  {
    emoji: '🚀',
    text: <><strong>Top insider secrets</strong> that could take your online coaching business to <u>1 crore and beyond</u> faster than you could imagine</>,
  },
  {
    emoji: '🤝',
    text: <>Access to a <strong>powerful community of 30,000+ experts</strong> who are always ready to <u>support talent like you</u></>,
  },
  {
    emoji: '💡',
    text: <><strong>Exclusive strategies</strong> that will help you <u>work less, earn more</u>, and create a business that runs on <strong>autopilot</strong></>,
  },
  {
    emoji: '📋',
    text: <><strong>Chance to skip the trial and error</strong> and follow <u>a proven system</u> that’s already worked for hundreds of online coaches</>,
  },
];

const ConfusedBenefitsSection = () => {
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* CSS Animations */}
      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeSlideUp 0.6s ease-in-out forwards;
        }

        @keyframes wiggle {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }

        .wiggle {
          animation: wiggle 0.5s ease-in-out infinite;
        }
      `}</style>

      <div style={styles.container}>
        <h2 style={styles.heading}>Still Confused? Here’s What You’re Leaving Behind!</h2>

        <div style={styles.grid}>
          {benefits.map((item, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                opacity: animate ? 1 : 0,
                animationDelay: `${index * 0.2}s`,
              }}
              className={animate ? 'fade-in-up' : ''}
            >
              <span style={styles.emoji}>{item.emoji}</span>
              <p style={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>

        <button style={{
          ...styles.button,
          fontSize: isMobile ? '16px' : '20px',
          padding: isMobile ? '12px 30px' : '14px 40px',
          width: isMobile ? '90%' : '60%',
        }} className="wiggle">
          Grab Your FREE Seat Now
        </button>
      </div>
    </>
  );
};

const styles = {
  container: {
    background: 'radial-gradient(107.67% 107.67% at 50% 20.81%, #000B3E 0%, #020202 100%)',
    padding: '60px 20px',
    fontFamily: 'Poppins, sans-serif',
    color: '#fff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    maxWidth: '1000px',
    margin: '0 auto 40px',
  },
  card: {
    backgroundColor: '#162462',
    borderRadius: '16px',
    padding: '20px',
    textAlign: 'left',
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-start',
    transition: 'all 0.3s ease',
  },
  emoji: {
    fontSize: '20px',
    marginTop: '10px',
  },
  text: {
    fontSize: '15px',
    lineHeight: '1.6',
  },
  button: {
    background: 'linear-gradient(to right, #f8b500, #e68a00)',
    border: 'none',
    fontWeight: '700',
    color: '#000',
    borderRadius: '12px',
    marginTop: '20px',
    cursor: 'pointer',
    Width: '80%',
    animation: 'wiggle 1.5s ease-in-out infinite',
  }
};

export default ConfusedBenefitsSection;
