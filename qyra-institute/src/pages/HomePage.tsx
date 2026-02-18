import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EducationalBook3D from '../components/EducationalBook3D';
import { 
  fadeInVariants, 
  slideUpVariants, 
  staggerContainer, 
  staggerItem,
  cardHover,
  buttonAnimation,
  floatingVariants
} from '../utils/animations';
import '../styles/Global.css';
import '../styles/Navbar.css';
import '../styles/Hero.css';

const HomePage: React.FC = () => {
  return (
    <motion.div 
      className="home-page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInVariants}
    >
      <Navbar currentPage="/" />
      <Hero />
      
      {/* Features Section with 3D Element */}
      <section className="section" style={{ backgroundColor: 'var(--background-light)' }}>
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={slideUpVariants}
            initial="initial"
            animate="animate"
          >
            Why Choose Qyra Institute?
          </motion.h2>
          
          <div className="grid grid-3" style={{ alignItems: 'center' }}>
            <motion.div
              variants={staggerItem}
              initial="initial"
              animate="animate"
              {...cardHover}
              className="card"
            >
              <motion.div 
                style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}
                variants={floatingVariants}
                animate="animate"
              >
                👨‍🏫
              </motion.div>
              <h3 style={{ color: 'var(--primary-color)' }}>Expert Instructors</h3>
              <p>Qualified and experienced teachers dedicated to your learning journey with personalized attention.</p>
            </motion.div>
            
            {/* 3D Book in the center */}
            <motion.div
              variants={staggerItem}
              initial="initial"
              animate="animate"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <EducationalBook3D />
            </motion.div>
            
            <motion.div
              variants={staggerItem}
              initial="initial"
              animate="animate"
              {...cardHover}
              className="card"
            >
              <motion.div 
                style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}
                variants={floatingVariants}
                animate="animate"
              >
                📚
              </motion.div>
              <h3 style={{ color: 'var(--primary-color)' }}>Comprehensive Curriculum</h3>
              <p>From Quran education with proper Tajweed to modern professional skills, all under one platform.</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-3" 
            style={{ marginTop: '2rem' }}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={staggerItem}
              {...cardHover}
              className="card"
            >
              <motion.div 
                style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}
                variants={floatingVariants}
                animate="animate"
              >
                🕐
              </motion.div>
              <h3 style={{ color: 'var(--primary-color)' }}>Flexible Learning</h3>
              <p>Online classes designed for all time zones with schedules that fit your lifestyle and commitments.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="grid grid-4 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { number: '1000+', label: 'Students Enrolled' },
              { number: '50+', label: 'Expert Instructors' },
              { number: '15+', label: 'Programs Available' },
              { number: '98%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
              >
                <motion.h2 
                  style={{ color: 'var(--primary-color)', fontSize: '2.5rem', fontWeight: '700' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h2>
                <p style={{ color: 'var(--text-light)' }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--primary-color)' }}>
        <div className="container text-center">
          <motion.h2 
            className="section-title" 
            style={{ color: 'var(--secondary-color)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Learning Journey?
          </motion.h2>
          <motion.p 
            style={{ color: 'var(--secondary-color)', fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of students who are already benefiting from our personalized online education. 
            Your first trial class is completely free!
          </motion.p>
          <motion.button 
            className="btn btn-accent" 
            style={{ fontSize: '1.1rem', padding: '15px 30px' }}
            {...buttonAnimation}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Start Your Free Trial
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
