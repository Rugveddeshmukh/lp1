import React, { useState } from 'react';

const faqs = [
  {
    question: 'What will I learn in this workshop?',
    answer:
      "In 90 minutes, you will learn how to find a profitable niche using AI, how to design digital products, and how to get autopilot sales. It's the same system used by India's top digital coaches to go from scratch to multiple crores in revenues.",
  },
  {
    question: 'Who is this workshop ideal for?',
    answer:
      'This workshop is ideal for anyone who values FREEDOM, FAMILY, and SERVICE to society. If you are a working professional, entrepreneur, coach, trainer, consultant, work-from-home parent, or a homemaker who wants to make a fortune teaching what you love, this workshop is for you.',
  },
  {
    question: 'Date and time of the workshop?',
    answer: 'These workshops happen on different days of the week and at different times. Please check this page details for the workshop date and time.',
  },
  {
    question: 'Are the provided resources free?',
    answer: 'Yes! I provide all resources for free. When you attend this webinar LIVE, you will get my A.I Niche Clarity Tool + ChatGPT Launch Prompts that can help you get started with speed!',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      {/* Animations */}
      <style>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            max-height: 500px;
          }
        }

        .accordion-body-animate {
          animation: slideDown 0.3s ease-out forwards;
        }

        @keyframes wiggle {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }

        .wiggle {
          animation: wiggle 0.6s ease-in-out infinite;
        }
      `}</style>

      <div style={styles.container}>
        <h2 style={styles.heading}>
          Frequently Asked <span style={styles.highlight}>Questions</span>
        </h2>
        <p style={styles.subtext}>All your burning questions answered.</p>

        <div style={styles.accordionWrapper}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <div
                style={{
                  ...styles.accordionHeader,
                  backgroundColor: index === activeIndex ? '#f85a40' : '#1c213c',
                }}
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span style={styles.icon}>{index === activeIndex ? '−' : '+'}</span>
              </div>
              {index === activeIndex && (
                <div style={styles.accordionBody} className="accordion-body-animate">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <button style={styles.button} className="wiggle">Grab Your FREE Seat Now</button>
      </div>
    </>
  );
};

const styles = {
  container: {
    background: 'radial-gradient(107.67% 107.67% at 50% 20.81%, #000B3E 0%, #020202 100%)',
    padding: '60px 20px',
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center',
    
  },
  heading: {
    fontSize: '28px',
    fontWeight: '700',
  },
  highlight: {
    color: '#f85a40',
  },
  subtext: {
    fontSize: '16px',
    marginBottom: '30px',
    color: '#ccc',
  },
  accordionWrapper: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'left',
  },
  accordionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
    color: '#fff',
    transition: 'background-color 0.3s ease',
  },
  icon: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  accordionBody: {
    backgroundColor: '#252b4a',
    padding: '16px 20px',
    borderRadius: '8px',
    fontSize: '15px',
    lineHeight: '1.6',
  },
  button: {
    marginTop: '40px',
    background: 'linear-gradient(49.12deg, #FFC74B 0%, #E39600 22%)',
    color: '#000',
    fontSize: '18px',
    padding: '14px 40px',
    border: 'none',
    borderRadius: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '75%',
   
  },
};

export default FAQSection;
