import React, { useState, useEffect } from 'react';

const videos = [
  {
    title: 'Shruti Chaudhary Testimonial',
    url: 'https://www.youtube.com/embed/Pjr2NsgY3oc',
  },
  {
    title: 'Riddhi Deorah Testimonial',
    url: 'https://www.youtube.com/embed/0t96AQMO7u0',
  },
  {
    title: 'Aparna Ganesh Testimonial',
    url: 'https://www.youtube.com/embed/Nwm4sGEw9Rs',
  },
  {
    title: 'Archit Mishra Testimonial',
    url: 'https://www.youtube.com/embed/Ew6B-u-tJmo',
  },
  {
    title: 'Mahesh Hasaramani Testimonial',
    url: 'https://www.youtube.com/embed/y1B3K4LBDrk',
  },
  {
    title: 'Sakshi Chandraakar Testimonial',
    url: 'https://www.youtube.com/embed/iknsRS-b2ZM',
  },
];

const SuccessStories = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Animation style */}
      <style>{`
        @keyframes wiggle {
          0% { transform: translateX(0); }
          15% { transform: translateX(-5px); }
          30% { transform: translateX(5px); }
          45% { transform: translateX(-4px); }
          60% { transform: translateX(4px); }
          75% { transform: translateX(-2px); }
          100% { transform: translateX(0); }
        }

        .wiggle {
          animation: wiggle 0.8s ease-in-out infinite;
        }
      `}</style>

      <div style={styles.container}>
        <h2 style={styles.title}>
          <span style={styles.highlight}>Stories of</span> Success
          <div style={styles.underline}></div>
        </h2>

        <div style={styles.grid}>
          {videos.map((video, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.videoWrapper}>
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={styles.video}
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            className="wiggle"
            style={{
              background: 'linear-gradient(49.12deg, #FFC74B 0%, #E39600 22%)',
              color: 'black',
              fontSize: isMobile ? '16px' : '20px',
              padding: isMobile ? '12px 30px' : '14px 40px',
              border: 'none',
              borderRadius: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: isMobile ? '90%' : '80%',
            }}
          >
            Join Now For FREE!
          </button>
        </div>
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
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '40px',
  },
  highlight: {
    color: '#f85a40',
  },
  underline: {
    width: '80px',
    height: '3px',
    backgroundColor: '#f85a40',
    margin: '10px auto 0',
    borderRadius: '4px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
  },
  card: {
    backgroundColor: '#0a1a48',
    borderRadius: '20px',
    padding: '10px',
    width: '100%',
    maxWidth: '320px',
    boxShadow: '0 0 12px rgba(0, 0, 0, 0.3)',
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    borderRadius: '12px',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '12px',
  },
};

export default SuccessStories;
