import React from 'react';
import { motion } from 'framer-motion';
import styles from './GithubHero.module.css';

/**
 * GithubHero Component
 * A high-fidelity hero section inspired by GitHub's "Build for the future" landing page.
 * Features staggered animations, responsive design, and glassmorphic elements.
 */
const GithubHero: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Entrance easing from SKILL.md
      },
    },
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className={styles.heroContainer}>
      {/* Background Decorative Elements */}
      <div className={styles.backgroundEffects} aria-hidden="true">
        <div className={styles.grid} />
        <motion.div 
          className={styles.glow} 
          variants={glowVariants}
          animate="animate"
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.headline} variants={itemVariants}>
          The world's leading <br />
          AI-powered developer platform.
        </motion.h1>

        <motion.p className={styles.subheadline} variants={itemVariants}>
          GitHub is where over 100 million developers shape the future of software, 
          together. Build, collaborate, and ship code on a platform built for you.
        </motion.p>

        <motion.div className={styles.actions} variants={itemVariants}>
          <a href="#signup" className={styles.primaryBtn}>
            <span>Sign up for GitHub</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="currentColor" 
              aria-hidden="true"
            >
              <path d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L11.94 8 8.22 4.28a.75.75 0 010-1.06z" />
              <path d="M14.5 8a.75.75 0 01-.75.75H1.75a.75.75 0 010-1.5h12a.75.75 0 01.75.75z" />
            </svg>
          </a>
          <a href="#trial" className={styles.secondaryBtn}>
            Start a free enterprise trial
          </a>
        </motion.div>
      </motion.div>

      {/* Optional: Micro-ornament - Floating "Code" pill */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          padding: '8px 16px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          fontSize: '0.8rem',
          color: '#8b949e',
          fontFamily: 'monospace',
          zIndex: 5
        }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        git commit -m "innovation"
      </motion.div>
    </section>
  );
};

export default GithubHero;
