import React, { useState } from 'react';
import '../styles/Global.css';

interface Course {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  focus: string[];
  icon: string;
  description: string;
}

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const courses: Course[] = [
    // Quran & Islamic Education
    {
      id: 'noorani-qaida',
      title: 'Noorani Qaida',
      category: 'quran',
      level: 'Beginner',
      duration: '2-3 months',
      focus: ['Arabic Alphabet', 'Pronunciation', 'Basic Reading'],
      icon: '📖',
      description: 'Learn the fundamentals of Arabic reading and pronunciation'
    },
    {
      id: 'quran-tajweed',
      title: 'Quran Reading with Tajweed',
      category: 'quran',
      level: 'Beginner to Advanced',
      duration: '6-12 months',
      focus: ['Tajweed Rules', 'Proper Recitation', 'Fluency'],
      icon: '🕌',
      description: 'Master the art of Quranic recitation with proper Tajweed'
    },
    {
      id: 'quran-hifz',
      title: 'Quran Memorization (Hifz)',
      category: 'quran',
      level: 'Intermediate to Advanced',
      duration: '2-4 years',
      focus: ['Memorization', 'Revision', 'Retention'],
      icon: '💾',
      description: 'Comprehensive Quran memorization program with expert guidance'
    },
    {
      id: 'islamic-studies',
      title: 'Basic Islamic Studies',
      category: 'quran',
      level: 'Beginner',
      duration: '3-6 months',
      focus: ['Islamic Beliefs', 'Practices', 'Daily Life'],
      icon: '📿',
      description: 'Essential Islamic knowledge for daily living'
    },
    {
      id: 'tafseer',
      title: 'Quran Understanding & Tafseer',
      category: 'quran',
      level: 'Advanced',
      duration: '1-2 years',
      focus: ['Quranic Exegesis', 'Context', 'Application'],
      icon: '🔍',
      description: 'Deep understanding of Quranic verses and their meanings'
    },

    // Academic Subjects
    {
      id: 'mathematics',
      title: 'Mathematics',
      category: 'academic',
      level: 'All Levels',
      duration: 'Ongoing',
      focus: ['Problem Solving', 'Concepts', 'Applications'],
      icon: '🔢',
      description: 'Comprehensive mathematics education from basics to advanced'
    },
    {
      id: 'chemistry',
      title: 'Chemistry',
      category: 'academic',
      level: 'All Levels',
      duration: 'Ongoing',
      focus: ['Theory', 'Practical', 'Experiments'],
      icon: '⚗️',
      description: 'Interactive chemistry learning with practical applications'
    },
    {
      id: 'physics',
      title: 'Physics',
      category: 'academic',
      level: 'All Levels',
      duration: 'Ongoing',
      focus: ['Theory', 'Problem Solving', 'Real-world Applications'],
      icon: '⚛️',
      description: 'Understanding the fundamental principles of physics'
    },

    // Professional Courses
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      category: 'professional',
      level: 'Beginner to Advanced',
      duration: '3-6 months',
      focus: ['SEO', 'Social Media', 'Content Strategy'],
      icon: '📱',
      description: 'Master digital marketing strategies and tools'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      category: 'professional',
      level: 'Beginner to Advanced',
      duration: '4-8 months',
      focus: ['Design Principles', 'Software Skills', 'Portfolio'],
      icon: '🎨',
      description: 'Create stunning visual designs with professional tools'
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      category: 'professional',
      level: 'Beginner to Advanced',
      duration: '3-6 months',
      focus: ['Editing Software', 'Storytelling', 'Effects'],
      icon: '🎬',
      description: 'Professional video editing and production skills'
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      category: 'professional',
      level: 'Beginner to Intermediate',
      duration: '2-4 months',
      focus: ['Content Strategy', 'Writing', 'Multimedia'],
      icon: '✍️',
      description: 'Create engaging content for various platforms'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses', icon: '📚' },
    { id: 'quran', name: 'Quran & Islamic', icon: '🕌' },
    { id: 'academic', name: 'Academic', icon: '🎓' },
    { id: 'professional', name: 'Professional', icon: '💼' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <section className="section courses-section">
      <div className="container">
        <div className="courses-header text-center scroll-animate">
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
            Our Courses
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
            Choose from our comprehensive range of courses designed to help you grow 
            spiritually, academically, and professionally.
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter scroll-animate">
          <div className="grid grid-4" style={{ gap: '1rem', marginBottom: '3rem' }}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  padding: '1rem',
                  border: `2px solid ${selectedCategory === category.id ? 'var(--primary-color)' : 'var(--border-color)'}`,
                  borderRadius: '12px',
                  backgroundColor: selectedCategory === category.id ? 'var(--primary-color)' : 'var(--secondary-color)',
                  color: selectedCategory === category.id ? 'var(--secondary-color)' : 'var(--text-dark)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{category.icon}</div>
                <div>{category.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          <div className="grid grid-3">
            {filteredCourses.map((course, index) => (
              <div key={course.id} className="course-card scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card">
                  <div className="course-header">
                    <div style={{ 
                      fontSize: '3rem', 
                      color: 'var(--primary-color)', 
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      {course.icon}
                    </div>
                    <h3 style={{ color: 'var(--primary-color)', textAlign: 'center', marginBottom: '0.5rem' }}>
                      {course.title}
                    </h3>
                    <div className="course-meta" style={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      gap: '1rem',
                      marginBottom: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{ 
                        backgroundColor: 'var(--background-light)', 
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        color: 'var(--text-light)'
                      }}>
                        {course.level}
                      </span>
                      <span style={{ 
                        backgroundColor: 'var(--background-light)', 
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        color: 'var(--text-light)'
                      }}>
                        {course.duration}
                      </span>
                    </div>
                  </div>
                  
                  <p style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-light)' }}>
                    {course.description}
                  </p>
                  
                  <div className="course-focus">
                    <h4 style={{ 
                      color: 'var(--primary-color)', 
                      fontSize: '0.9rem', 
                      marginBottom: '0.5rem',
                      textAlign: 'center'
                    }}>
                      Course Focus:
                    </h4>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0,
                      margin: 0
                    }}>
                      {course.focus.map((item, idx) => (
                        <li key={idx} style={{ 
                          textAlign: 'center',
                          padding: '0.25rem 0',
                          fontSize: '0.9rem',
                          color: 'var(--text-dark)'
                        }}>
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <button className="btn btn-primary" style={{ width: '100%' }}>
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="courses-cta text-center scroll-animate" style={{ marginTop: '4rem' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
            Not sure which course is right for you?
          </h3>
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
            Our academic advisors are here to help you choose the perfect learning path.
          </p>
          <button className="btn btn-accent">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
