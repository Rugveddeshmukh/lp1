import React, { useEffect, useState } from 'react';
import coach1 from '../Assest/dinaz-vervatwala.webp';
import coach2 from '../Assest/shruti-chaudhary.webp';
import coach3 from '../Assest/riddhi-deorah.webp';
import coach4 from '../Assest/sriram-benur.webp';
import coach5 from '../Assest/mudit-saxena.webp';
import coach6 from '../Assest/twinkle-lalwani.webp';
import coach7 from '../Assest/karthikeyan.webp';
import coach8 from '../Assest/rahul-raghuwanshi.webp';
import coach9 from '../Assest/sweta-samota.webp';
import coach10 from '../Assest/johncey-george.webp';
import coach11 from '../Assest/pallavi-walia-raj.webp';
import coach12 from '../Assest/prakhar-kulshrestha.webp';

const experts = [
  { img: coach1, name: 'Dinaz Vervatwala', role: 'Health & Fitness Coach', badge: '9500+ members\n10 CR+ earnings' },
  { img: coach2, name: 'Shruti Chaudhary', role: 'Mindset Coach', badge: 'Engineer to Coach\n9.5Cr Revenue' },
  { img: coach3, name: 'Riddhi Deorah', role: 'Parenting Coach', badge: '4000+ Moms\n7-Digit Revenue' },
  { img: coach4, name: 'Sriram Benur', role: 'YouTube Coach', badge: 'YouTuber to Coach\nMade 4Cr' },
  { img: coach5, name: 'Mudit Saxena', role: 'Global CXO Leadership Coach', badge: 'Global CXO Turns Coach\nEarns Over 2Cr' },
  { img: coach6, name: 'Twinkle Lalwani', role: 'Psychologist Coach', badge: 'Crossed 1.35Cr In\n18 Months' },
  { img: coach7, name: 'Karthikeyan', role: 'Productivity Coach', badge: 'Earns Over\n2 Crore' },
  { img: coach8, name: 'Rahul Raghuwanshi', role: 'Founder: Thinking Machines', badge: '1 Cr in Revenue\nFirst Year' },
  { img: coach9, name: 'Sweta Samota', role: 'Book Publishing Coach', badge: 'Built 4K+ Authors\nMade 3 Cr' },
  { img: coach10, name: 'Johncey George', role: 'Leadership Coach', badge: 'From 1:1 to Group\nCrossed 1 Cr' },
  { img: coach11, name: 'Pallavi Walia Raj', role: 'Communication Coach', badge: 'Celebrity Emcee\nFrom 0 to 1 Cr' },
  { img: coach12, name: 'Prakhar Kulshrestha', role: 'Affiliate Marketing Coach', badge: '0 to 50 Lacs\nWith Affiliate Marketing' },
];

const ExpertsSection = () => {
  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>
        <span style={styles.highlight}>150+ Experts</span> Went from 0 to 1Cr+
      </h2>

      <div style={styles.gridContainer}>
        {experts.map((expert, index) => (
          <div key={index} style={styles.card}>
            <img src={expert.img} alt={expert.name} style={styles.image} />
            <div style={styles.name}>{expert.name}</div>
            <div style={styles.role}>{expert.role}</div>
            <div style={styles.badge}>{expert.badge}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button className="animated-button" style={styles.button}>
          Join Now For FREE!
        </button>
      </div>

      <style>{`
        @keyframes wiggle {
          0% { transform: translateX(0); }
          15% { transform: translateX(-3px); }
          30% { transform: translateX(3px); }
          45% { transform: translateX(-3px); }
          60% { transform: translateX(3px); }
          75% { transform: translateX(-1px); }
          100% { transform: translateX(0); }
        }

        .animated-button {
          animation: wiggle 1.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

const styles = {
  section: {
    backgroundColor: '#050829',
    padding: '40px 20px',
    fontFamily: 'outfit, sans-serif',
    color: '#fff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '30px',
  },
  highlight: {
    color: '#f85a40',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  card: {
    backgroundColor: '#111b5c',
    borderRadius: '16px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 0 8px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '12px',
  },
  name: {
    color: '#f8b500',
    fontSize: '16px',
    fontWeight: '600',
    marginTop: '10px',
  },
  role: {
    fontSize: '12px',
    fontWeight: '600',
    margin: '4px 0 10px',
  },
  badge: {
    backgroundColor: '#f85a40',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '12px',
    whiteSpace: 'pre-line',
    lineHeight: '1.4',
    marginTop: 'auto',
  },
  button: {
    background: 'linear-gradient(49.12deg, #FFC74B 0%, #E39600 22%)',
    color: 'black',
    fontSize: '18px',
    padding: '14px 40px',
    border: 'none',
    borderRadius: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    maxWidth: '300px',
    width: '100%',
  },
};

export default ExpertsSection;
