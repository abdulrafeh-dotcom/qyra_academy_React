import React from 'react';
import '../styles/Global.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' }
  ];

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Courses', url: '/courses' },
    { name: 'Media', url: '/media' },
    { name: 'Dashboard', url: '/dashboard' }
  ];

  const courses = [
    'Quran Reading with Tajweed',
    'Quran Memorization (Hifz)',
    'Digital Marketing',
    'Graphic Design',
    'Video Editing',
    'Mathematics & Science'
  ];

  return (
    <footer className="footer" style={{ 
      backgroundColor: 'var(--text-dark)', 
      color: 'var(--secondary-color)',
      padding: '4rem 0 2rem'
    }}>
      <div className="container">
        <div className="footer-content">
          <div className="grid grid-4">
            {/* About Section */}
            <div className="footer-section">
              <h3 style={{ 
                color: 'var(--accent-color)', 
                marginBottom: '1.5rem',
                fontSize: '1.5rem'
              }}>
                Qyra Institute
              </h3>
              <p style={{ 
                lineHeight: '1.6', 
                marginBottom: '1.5rem',
                opacity: 0.9
              }}>
                Learn with Purpose. Grow with Knowledge. 
                Quality online education combining Islamic teachings with modern skills.
              </p>
              <div className="social-links">
                <h4 style={{ 
                  color: 'var(--secondary-color)', 
                  marginBottom: '1rem',
                  fontSize: '1rem'
                }}>
                  Follow Us
                </h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      title={social.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%',
                        color: 'var(--secondary-color)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        fontSize: '1.2rem'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                        e.currentTarget.style.color = 'var(--text-dark)';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.color = 'var(--secondary-color)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 style={{ 
                color: 'var(--accent-color)', 
                marginBottom: '1.5rem',
                fontSize: '1.2rem'
              }}>
                Quick Links
              </h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                margin: 0
              }}>
                {quickLinks.map((link) => (
                  <li key={link.name} style={{ marginBottom: '0.75rem' }}>
                    <a
                      href={link.url}
                      style={{
                        color: 'var(--secondary-color)',
                        textDecoration: 'none',
                        opacity: 0.8,
                        transition: 'all 0.3s ease',
                        fontSize: '0.95rem'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = 'var(--accent-color)';
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.paddingLeft = '5px';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = 'var(--secondary-color)';
                        e.currentTarget.style.opacity = '0.8';
                        e.currentTarget.style.paddingLeft = '0';
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Courses */}
            <div className="footer-section">
              <h4 style={{ 
                color: 'var(--accent-color)', 
                marginBottom: '1.5rem',
                fontSize: '1.2rem'
              }}>
                Popular Courses
              </h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                margin: 0
              }}>
                {courses.map((course) => (
                  <li key={course} style={{ marginBottom: '0.75rem' }}>
                    <a
                      href="/courses"
                      style={{
                        color: 'var(--secondary-color)',
                        textDecoration: 'none',
                        opacity: 0.8,
                        transition: 'all 0.3s ease',
                        fontSize: '0.95rem'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = 'var(--accent-color)';
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.paddingLeft = '5px';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = 'var(--secondary-color)';
                        e.currentTarget.style.opacity = '0.8';
                        e.currentTarget.style.paddingLeft = '0';
                      }}
                    >
                      {course}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 style={{ 
                color: 'var(--accent-color)', 
                marginBottom: '1.5rem',
                fontSize: '1.2rem'
              }}>
                Contact Info
              </h4>
              <div style={{ lineHeight: '1.8' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '0.75rem', fontSize: '1.2rem' }}>📧</span>
                  <span style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                    info@qyra-institute.com
                  </span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '0.75rem', fontSize: '1.2rem' }}>📞</span>
                  <span style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                    +1 (555) 123-4567
                  </span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '0.75rem', fontSize: '1.2rem' }}>📍</span>
                  <span style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                    Online - Worldwide
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '0.75rem', fontSize: '1.2rem' }}>🕐</span>
                  <span style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                    Mon-Sat: 9:00 AM - 8:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom" style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          marginTop: '3rem',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ 
            margin: 0,
            opacity: 0.8,
            fontSize: '0.9rem'
          }}>
            © {currentYear} Qyra Institute. All rights reserved. | 
            <a href="#" style={{ 
              color: 'var(--accent-color)', 
              textDecoration: 'none',
              margin: '0 0.5rem'
            }}>
              Privacy Policy
            </a> | 
            <a href="#" style={{ 
              color: 'var(--accent-color)', 
              textDecoration: 'none',
              margin: '0 0.5rem'
            }}>
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
