import React from 'react';
import '../styles/Global.css';

const About: React.FC = () => {
  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-header text-center scroll-animate">
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
              Qyra Institute – Learn with Purpose. Grow with Knowledge.
            </h2>
            <div style={{ 
              width: '80px', 
              height: '4px', 
              backgroundColor: 'var(--accent-color)', 
              margin: '0 auto 2rem',
              borderRadius: '2px'
            }}></div>
          </div>

          <div className="about-description scroll-animate">
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              color: 'var(--text-dark)',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 3rem'
            }}>
              Qyra Institute is an online learning platform dedicated to quality Quran education 
              alongside essential modern skills. We combine authentic Islamic teachings with academic 
              and professional courses to prepare learners for both Dunya and Akhirah.
            </p>
          </div>

          <div className="grid grid-3 about-grid">
            <div className="about-card scroll-animate">
              <div className="about-icon">
                <div style={{ 
                  fontSize: '3rem', 
                  color: 'var(--primary-color)', 
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>🎯</div>
              </div>
              <h3 style={{ color: 'var(--primary-color)', textAlign: 'center', marginBottom: '1rem' }}>
                Our Mission
              </h3>
              <p style={{ textAlign: 'center', lineHeight: '1.6' }}>
                To provide accessible, affordable, and high-quality online education that builds 
                strong faith, sharp minds, and practical skills for the modern world.
              </p>
            </div>

            <div className="about-card scroll-animate">
              <div className="about-icon">
                <div style={{ 
                  fontSize: '3rem', 
                  color: 'var(--primary-color)', 
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>🤝</div>
              </div>
              <h3 style={{ color: 'var(--primary-color)', textAlign: 'center', marginBottom: '1rem' }}>
                Our Commitment
              </h3>
              <p style={{ textAlign: 'center', lineHeight: '1.6' }}>
                At Qyra Institute, we are committed to honesty, excellence, and continuous improvement. 
                We aim to build long-term trust with students and parents through quality education 
                and transparent practices.
              </p>
            </div>

            <div className="about-card scroll-animate">
              <div className="about-icon">
                <div style={{ 
                  fontSize: '3rem', 
                  color: 'var(--primary-color)', 
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>🌟</div>
              </div>
              <h3 style={{ color: 'var(--primary-color)', textAlign: 'center', marginBottom: '1rem' }}>
                Our Vision
              </h3>
              <p style={{ textAlign: 'center', lineHeight: '1.6' }}>
                To become a leading online academy that seamlessly integrates Islamic education with 
                modern skills, creating well-rounded individuals who excel in both spiritual and worldly endeavors.
              </p>
            </div>
          </div>

          <div className="why-choose-section" style={{ marginTop: '4rem' }}>
            <h3 className="section-title scroll-animate">Why Choose Us?</h3>
            <div className="grid grid-2 why-choose-grid">
              <div className="why-choose-item scroll-animate">
                <div className="why-choose-content">
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '1rem'
                  }}>
                    <div style={{ 
                      fontSize: '2rem', 
                      color: 'var(--accent-color)', 
                      marginRight: '1rem',
                      minWidth: '40px'
                    }}>✓</div>
                    <h4 style={{ color: 'var(--primary-color)', margin: 0 }}>
                      Qualified and experienced instructors
                    </h4>
                  </div>
                </div>
              </div>

              <div className="why-choose-item scroll-animate">
                <div className="why-choose-content">
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '1rem'
                  }}>
                    <div style={{ 
                      fontSize: '2rem', 
                      color: 'var(--accent-color)', 
                      marginRight: '1rem',
                      minWidth: '40px'
                    }}>✓</div>
                    <h4 style={{ color: 'var(--primary-color)', margin: 0 }}>
                      Quran-focused learning with proper Tajweed
                    </h4>
                  </div>
                </div>
              </div>

              <div className="why-choose-item scroll-animate">
                <div className="why-choose-content">
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '1rem'
                  }}>
                    <div style={{ 
                      fontSize: '2rem', 
                      color: 'var(--accent-color)', 
                      marginRight: '1rem',
                      minWidth: '40px'
                    }}>✓</div>
                    <h4 style={{ color: 'var(--primary-color)', margin: 0 }}>
                      Academic and skill-based courses under one platform
                    </h4>
                  </div>
                </div>
              </div>

              <div className="why-choose-item scroll-animate">
                <div className="why-choose-content">
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '1rem'
                  }}>
                    <div style={{ 
                      fontSize: '2rem', 
                      color: 'var(--accent-color)', 
                      marginRight: '1rem',
                      minWidth: '40px'
                    }}>✓</div>
                    <h4 style={{ color: 'var(--primary-color)', margin: 0 }}>
                      Flexible online classes for all time zones
                    </h4>
                  </div>
                </div>
              </div>

              <div className="why-choose-item scroll-animate">
                <div className="why-choose-content">
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '1rem'
                  }}>
                    <div style={{ 
                      fontSize: '2rem', 
                      color: 'var(--accent-color)', 
                      marginRight: '1rem',
                      minWidth: '40px'
                    }}>✓</div>
                    <h4 style={{ color: 'var(--primary-color)', margin: 0 }}>
                      Honest, student-centered learning environment
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
