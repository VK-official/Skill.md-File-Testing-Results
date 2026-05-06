import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, Code, Users, Ship } from 'lucide-react';
import './Hero.css';

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="hero-section">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="grid-overlay" />
        <motion.div 
          className="glow-orb glow-1"
          variants={glowVariants}
          animate="animate"
        />
        <motion.div 
          className="glow-orb glow-2"
          variants={glowVariants}
          animate="animate"
        />
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-icon"><Github size={14} /></span>
            <span className="badge-text">GitHub Universe 2024 is live</span>
            <ArrowRight size={14} className="badge-arrow" />
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Where the world <br />
            <span className="gradient-text">builds software</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            The largest and most advanced development platform in the world. 
            Build, collaborate, and ship code with the power of AI.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a free trial
            </motion.button>
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign up for GitHub
            </motion.button>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <Code size={18} />
              <span>100M+ Repos</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <Users size={18} />
              <span>90M+ Developers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <Ship size={18} />
              <span>4M+ Organizations</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
