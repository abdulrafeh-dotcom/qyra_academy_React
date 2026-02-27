import React from 'react';
import { motion } from 'framer-motion';
import { 
  slideUpVariants, 
  scaleVariants, 
  staggerContainer,
  staggerItem,
  buttonAnimation,
  floatingVariants
} from '../utils/animations';
import '../styles/Global.css';

const Hero: React.FC = () => {
  const handleFreeTrial = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle free trial form submission
    console.log('Free trial form submitted');
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            variants={slideUpVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem' }}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {["Learn with Purpose.", "Grow with Knowledge."].map((text, index) => (
                <motion.span
                  key={index}
                  variants={staggerItem}
                  style={{ display: 'inline-block', marginRight: '0.5rem' }}
                >
                  {text}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p 
              style={{ 
                color: 'var(--secondary-color)', 
                fontSize: '1.2rem', 
                lineHeight: '1.8',
                marginBottom: '2rem',
                opacity: 0.95
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.95, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Qyra Institute offers personalized, one-to-one online classes for Islamic education and modern skills. 
              Our expert instructors guide you step by step, 
              helping you master your goals faster while balancing faith, knowledge, and practical skills. 
              Start your free trial today and experience learning designed just for you.
            </motion.p>
          </motion.div>

          <motion.div 
            className="hero-form-container"
            variants={scaleVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="hero-form-card"
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3 
                style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Start Your Journey Today
              </motion.h3>
              <motion.form 
                onSubmit={handleFreeTrial} 
                className="hero-form"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.div className="form-group" variants={staggerItem}>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control"
                      required
                    />
                  </motion.div>
                </motion.div>
                <motion.div className="form-group" variants={staggerItem}>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control"
                      required
                    />
                  </motion.div>
                </motion.div>
                <motion.div className="form-group" variants={staggerItem}>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="form-control"
                      required
                    />
                  </motion.div>
                </motion.div>
                <motion.div className="form-group" variants={staggerItem}>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <select className="form-control" required>
                      <option value="">Select Interest</option>
                      <option value="quran">Quran & Islamic Education</option>
                      <option value="academic">Academic Subjects</option>
                      <option value="professional">Professional Skills</option>
                    </select>
                  </motion.div>
                </motion.div>
                <motion.button 
                  type="submit" 
                  className="btn btn-accent" 
                  style={{ width: '100%' }}
                  {...buttonAnimation}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Start Free Trial Today
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
