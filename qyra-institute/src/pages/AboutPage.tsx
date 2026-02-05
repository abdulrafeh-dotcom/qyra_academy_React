import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import '../styles/Global.css';
import '../styles/Navbar.css';

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="about-page">
      <Navbar currentPage="/about" />
      <About />
    </div>
  );
};

export default AboutPage;
