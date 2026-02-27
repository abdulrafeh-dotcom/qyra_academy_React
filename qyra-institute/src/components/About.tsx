import React from 'react';
import '../styles/Global.css';
import atifImage from '../assets/atif-riaz.jpg';
import amnaImage from '../assets/amna-idrees.jpg';
import abdulImage from '../assets/abdul-rafeh.jpg';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content text-center scroll-animate">
            <h1 className="hero-title">About Us</h1>
            <p className="hero-subtitle">Welcome to Qyra Institute</p>
            <p className="hero-description">
              At Qyra Institute, we believe education is most powerful when it nurtures both Deen and Duniya. 
              Our goal is to provide authentic Islamic education while equipping students with modern skills, 
              shaping confident, disciplined, and value-driven learners.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-content scroll-animate">
            <h2 className="section-title">Our Vision</h2>
            <p className="vision-text">
              To raise a generation of learners who are spiritually grounded, morally upright, and fully 
              prepared to thrive in today's fast-changing world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content scroll-animate">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              At Qyra Institute, our mission is to provide authentic Islamic education while equipping 
              students with modern skills. We nurture strong character, confidence, and faith, helping 
              learners apply Islamic values in daily life and succeed in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="leadership-section">
        <div className="container">
          <div className="leadership-header scroll-animate">
            <h2 className="section-title">Our Leadership</h2>
          </div>
          <div className="leadership-grid grid grid-3">
            <div className="leadership-card scroll-animate">
              <div className="leader-image">
                <img 
                  src={atifImage} 
                  alt="Atif Riaz Shahid" 
                  className="leader-photo"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="leader-avatar hidden">ARS</div>
              </div>
              <h3 className="leader-name">Atif Riaz Shahid</h3>
              <p className="leader-title">Chairman & CEO</p>
              <p className="leader-description">
                Brings over 12 years of experience in education, communication, and digital media, 
                guiding the institute's strategy and operations.
              </p>
            </div>

            <div className="leadership-card scroll-animate">
              <div className="leader-image">
                <img 
                  src={amnaImage} 
                  alt="Amna Idrees" 
                  className="leader-photo"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="leader-avatar hidden">AI</div>
              </div>
              <h3 className="leader-name">Amna Idrees</h3>
              <p className="leader-title">Co-Founder & Academic Director</p>
              <p className="leader-description">
                Holds a Master's in Islamic Studies, a Master's in Arabic, and has completed 8 years 
                of Dars-e-Nizami. An expert in Qur'an, Tajweed, and Tafseer, she oversees academic 
                curriculum and teacher training.
              </p>
            </div>

            <div className="leadership-card scroll-animate">
              <div className="leader-image">
                <img 
                  src={abdulImage} 
                  alt="Abdul Rafeh" 
                  className="leader-photo"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="leader-avatar hidden">AR</div>
              </div>
              <h3 className="leader-name">Abdul Rafeh</h3>
              <p className="leader-title">Software Engineer (IT Head)</p>
              <p className="leader-description">
                Leads the digital operations at Qyra Institute, managing the website and technical 
                systems. With expertise in modern web technologies, he ensures smooth performance, 
                security, and an enhanced online learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Qyra Institute Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-content scroll-animate">
            <h2 className="section-title">Why Choose Qyra Institute</h2>
            <p className="why-choose-description">
              Qyra Institute combines expert Islamic teaching with modern, engaging methods. Our qualified 
              tutors guide students in Qur'an, Tajweed, and Tafseer, providing personalized attention and 
              holistic development. We focus on spiritual growth, moral values, and practical skills, 
              creating learners who thrive in both Deen and Duniya.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
