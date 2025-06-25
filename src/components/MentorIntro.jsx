import React from 'react';
import mentorImage from '../Assest/coah-img.webp'; // Ensure this path is correct

const MentorIntro = () => {
  return (
    <>
      {/* Animation styles */}
      <style>{`
        @keyframes wiggle {
          0% { transform: translateX(0); }
          15% { transform: translateX(-4px); }
          30% { transform: translateX(4px); }
          45% { transform: translateX(-4px); }
          60% { transform: translateX(4px); }
          75% { transform: translateX(-2px); }
          100% { transform: translateX(0); }
        }
        .wiggle {
          animation: wiggle 0.7s ease-in-out infinite;
        }
      `}</style>

      <div style={styles.container}>
        <h3 style={styles.subHeading}>MEET INDIA'S DIGITAL REFORMER & MENTOR</h3>
        <h2 style={styles.mainHeading}>Siddharth Rajsekar</h2>
        <div style={styles.contentWrapper}>
          <div style={styles.imageWrapper}>
            <img src={mentorImage} alt="Siddharth Rajsekar" style={styles.image} />
          </div>
          <div style={styles.textWrapper}>
            <p style={styles.paragraph}>
              Hi, I'm <span style={styles.orange}>Sidz</span> – a college drop-out, "musician turned{' '}
              <span style={styles.orange}>digital geek</span>", a spiritually grounded minimalist, father of 2,
              and husband of a loving wife.
            </p>
            <p style={styles.paragraph}>
              I founded the <span style={styles.orange}>Internet Lifestyle Hub</span> in 2018 to fix the broken
              education and employment system for good.
            </p>
            <p style={styles.paragraph}>
              Currently, I'm helping over 30,274+ coaches, teachers, and experts digitize their knowledge.{' '}
              <span style={styles.red}>I would love to help you next!</span>
            </p>
            <button style={styles.button} className="wiggle">
              Grab Your FREE Seat Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    background: 'radial-gradient(107.67% 107.67% at 50% 20.81%, #000B3E 0%, #020202 100%)',
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
    padding: '60px 20px',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: '18px',
    fontWeight: '500',
    textTransform: 'uppercase',
    marginBottom: '10px',
  },
  mainHeading: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#f85a40',
    marginBottom: '40px',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
  },
  imageWrapper: {
    flex: '1 1 300px',
    maxWidth: '400px',
    borderRadius: '30px',
    overflow: 'hidden',
    textAlign: 'center',
  },
  image: {
    width: '90%',
    height: 'auto',
    borderRadius: '30px',
  },
  textWrapper: {
    flex: '1 1 320px',
    textAlign: 'left',
    maxWidth: '500px',
  },
  paragraph: {
    fontSize: '15px',
    lineHeight: '1.8',
    marginBottom: '17px',
  },
  orange: {
    color: '#f85a40',
    fontWeight: '600',
  },
  red: {
    color: '#f85a40',
    fontWeight: '700',
  },
  button: {
    background: 'linear-gradient(49.12deg, #FFC74B 0%, #E39600 22%)',
    color: '#000',
    fontSize: '18px',
    padding: '14px 36px',
    border: 'none',
    borderRadius: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px',
    width: '100%',
  },
};

export default MentorIntro;
