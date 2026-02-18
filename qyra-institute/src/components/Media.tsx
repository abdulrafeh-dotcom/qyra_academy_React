import React from 'react';
import '../styles/Global.css';

const Media: React.FC = () => {
  const socialMediaLinks = [
    {
      name: 'YouTube',
      icon: '📺',
      url: '#',
      description: 'Watch our educational videos and tutorials'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: '#',
      description: 'Follow us for daily updates and inspiration'
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: '#',
      description: 'Join our community and stay connected'
    }
  ];

  const videoContent = [
    {
      id: 1,
      title: 'Introduction to Qyra Institute',
      thumbnail: '🎬',
      duration: '3:45',
      description: 'Learn about our mission and what makes us different'
    },
    {
      id: 2,
      title: 'Quran Learning Demo Class',
      thumbnail: '🕌',
      duration: '5:20',
      description: 'Experience our one-to-one Quran teaching method'
    },
    {
      id: 3,
      title: 'Digital Marketing Course Preview',
      thumbnail: '💻',
      duration: '4:15',
      description: 'Get a glimpse of our professional skills training'
    },
    {
      id: 4,
      title: 'Student Success Stories',
      thumbnail: '🌟',
      duration: '6:30',
      description: 'Hear from our students about their learning journey'
    }
  ];

  return (
    <section className="section media-section">
      <div className="container">
        <div className="media-header text-center scroll-animate">
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
            Media & Resources
          </h2>
          <div style={{ 
            width: '80px', 
            height: '4px', 
            backgroundColor: 'var(--accent-color)', 
            margin: '0 auto 2rem',
            borderRadius: '2px'
          }}></div>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-light)', 
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Explore our video content, tutorials, and join our growing community 
            on social media platforms.
          </p>
        </div>

        {/* Video Gallery Section */}
        <div className="video-gallery scroll-animate">
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem', textAlign: 'center' }}>
            Featured Videos
          </h3>
          <div className="grid grid-2">
            {videoContent.map((video, index) => (
              <div key={video.id} className="video-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card">
                  <div className="video-thumbnail" style={{
                    backgroundColor: 'var(--background-light)',
                    borderRadius: '12px',
                    padding: '3rem',
                    textAlign: 'center',
                    marginBottom: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                      {video.thumbnail}
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: 'var(--accent-color)',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: 'var(--text-dark)',
                      boxShadow: '0 4px 20px var(--shadow-medium)'
                    }}>
                      ▶
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: 'var(--secondary-color)',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.85rem'
                    }}>
                      {video.duration}
                    </div>
                  </div>
                  
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                    {video.title}
                  </h4>
                  <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
                    {video.description}
                  </p>
                  <button className="btn btn-outline" style={{ width: '100%' }}>
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="social-media-section" style={{ marginTop: '4rem' }}>
          <div className="social-header text-center scroll-animate">
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>
              Connect With Us
            </h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
              Follow us on social media for daily updates, educational content, and community engagement
            </p>
          </div>

          <div className="grid grid-3">
            {socialMediaLinks.map((social, index) => (
              <div key={social.name} className="social-card scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card text-center" style={{ 
                  padding: '2rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div style={{ 
                    fontSize: '4rem', 
                    color: 'var(--primary-color)', 
                    marginBottom: '1rem'
                  }}>
                    {social.icon}
                  </div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                    {social.name}
                  </h4>
                  <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                    {social.description}
                  </p>
                  <a 
                    href={social.url}
                    className="btn btn-primary"
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section scroll-animate" style={{ 
          marginTop: '4rem',
          backgroundColor: 'var(--primary-color)',
          borderRadius: '16px',
          padding: '3rem',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>
            Stay Updated
          </h3>
          <p style={{ color: 'var(--secondary-color)', marginBottom: '2rem', opacity: 0.9 }}>
            Subscribe to our newsletter for the latest updates, and educational content
          </p>
          <form className="newsletter-form" style={{ 
            display: 'flex', 
            gap: '1rem',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-control"
              style={{ flex: 1 }}
              required
            />
            <button type="submit" className="btn btn-accent">
              Subscribe
            </button>
          </form>
        </div>

        {/* Upcoming Events */}
        <div className="upcoming-events scroll-animate" style={{ marginTop: '4rem' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem', textAlign: 'center' }}>
            Upcoming Events & Webinars
          </h3>
          <div className="grid grid-2">
            <div className="event-card card">
              <div style={{ 
                backgroundColor: 'var(--background-light)', 
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>📅</div>
                <div style={{ fontWeight: '600', color: 'var(--primary-color)' }}>
                  December 15, 2024
                </div>
                <div style={{ color: 'var(--text-light)' }}>
                  3:00 PM - 4:30 PM
                </div>
              </div>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                Free Quran Learning Workshop
              </h4>
              <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
                Join our free workshop to learn the basics of Quran reading with Tajweed
              </p>
              <button className="btn btn-outline" style={{ width: '100%' }}>
                Register Now
              </button>
            </div>

            <div className="event-card card">
              <div style={{ 
                backgroundColor: 'var(--background-light)', 
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>🎯</div>
                <div style={{ fontWeight: '600', color: 'var(--primary-color)' }}>
                  December 20, 2024
                </div>
                <div style={{ color: 'var(--text-light)' }}>
                  5:00 PM - 6:30 PM
                </div>
              </div>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                Digital Marketing Career Session
              </h4>
              <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
                Explore career opportunities in digital marketing with industry experts
              </p>
              <button className="btn btn-outline" style={{ width: '100%' }}>
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
