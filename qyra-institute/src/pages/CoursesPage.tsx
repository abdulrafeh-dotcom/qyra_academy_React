import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import '../styles/Global.css';

interface Course {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  focus: string[];
}

const CoursesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const courses: Course[] = [
    // Quran & Islamic Education
    {
      id: '1',
      title: 'Quran Reading with Tajweed',
      category: 'quran',
      level: 'Beginner to Advanced',
      duration: '6 months',
      focus: [
        'Proper Arabic pronunciation',
        'Tajweed rules and application',
        'Fluent Quran recitation',
        'Memorization techniques',
        'Understanding of Quranic Arabic'
      ]
    },
    {
      id: '2',
      title: 'Quran Memorization (Hifz)',
      category: 'quran',
      level: 'Intermediate to Advanced',
      duration: '2-3 years',
      focus: [
        'Systematic memorization approach',
        'Revision techniques',
        'Retention strategies',
        'Daily memorization schedule',
        'Spiritual guidance throughout'
      ]
    },
    {
      id: '3',
      title: 'Islamic Studies - Fundamentals',
      category: 'quran',
      level: 'Beginner',
      duration: '3 months',
      focus: [
        'Basic Islamic beliefs',
        'Five pillars of Islam',
        'Life of Prophet Muhammad (PBUH)',
        'Islamic ethics and morals',
        'Daily Islamic practices'
      ]
    },
    {
      id: '4',
      title: 'Arabic Language for Quran Understanding',
      category: 'quran',
      level: 'Beginner to Intermediate',
      duration: '4 months',
      focus: [
        'Basic Arabic grammar',
        'Quranic vocabulary',
        'Understanding Quranic verses',
        'Arabic reading and writing',
        'Conversational Arabic basics'
      ]
    },
    // Academic Subjects
    {
      id: '5',
      title: 'Mathematics - Foundation Level',
      category: 'academic',
      level: 'Grade 1-8',
      duration: '10 months',
      focus: [
        'Basic arithmetic operations',
        'Problem-solving techniques',
        'Mathematical reasoning',
        'Geometry fundamentals',
        'Real-world applications'
      ]
    },
    {
      id: '6',
      title: 'Science - General Science',
      category: 'academic',
      level: 'Grade 6-10',
      duration: '10 months',
      focus: [
        'Physics fundamentals',
        'Chemistry basics',
        'Biology concepts',
        'Scientific method',
        'Laboratory skills'
      ]
    },
    {
      id: '7',
      title: 'English Language & Literature',
      category: 'academic',
      level: 'All Levels',
      duration: '8 months',
      focus: [
        'Grammar and composition',
        'Reading comprehension',
        'Creative writing',
        'Literary analysis',
        'Communication skills'
      ]
    },
    {
      id: '8',
      title: 'Computer Science Fundamentals',
      category: 'academic',
      level: 'Beginner to Intermediate',
      duration: '6 months',
      focus: [
        'Programming basics',
        'Algorithmic thinking',
        'Web development fundamentals',
        'Computer hardware concepts',
        'Software applications'
      ]
    },
    // Professional Courses
    {
      id: '9',
      title: 'Digital Marketing Mastery',
      category: 'professional',
      level: 'Beginner to Advanced',
      duration: '3 months',
      focus: [
        'SEO and SEM strategies',
        'Social media marketing',
        'Content marketing',
        'Email marketing campaigns',
        'Analytics and reporting'
      ]
    },
    {
      id: '10',
      title: 'Graphic Design Professional',
      category: 'professional',
      level: 'Beginner to Advanced',
      duration: '4 months',
      focus: [
        'Adobe Photoshop mastery',
        'Illustrator techniques',
        'Design principles',
        'Brand identity creation',
        'Portfolio development'
      ]
    },
    {
      id: '11',
      title: 'Video Editing & Production',
      category: 'professional',
      level: 'Beginner to Intermediate',
      duration: '3 months',
      focus: [
        'Video editing software',
        'Storytelling techniques',
        'Audio editing',
        'Color correction',
        'YouTube optimization'
      ]
    },
    {
      id: '12',
      title: 'Web Development Bootcamp',
      category: 'professional',
      level: 'Beginner to Advanced',
      duration: '6 months',
      focus: [
        'HTML5 and CSS3',
        'JavaScript programming',
        'React.js framework',
        'Backend development',
        'Full-stack projects'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'quran', name: 'Quran & Islamic Education' },
    { id: 'academic', name: 'Academic Subjects' },
    { id: 'professional', name: 'Professional Courses' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="courses-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section courses-hero" style={{
        background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ color: 'white', marginBottom: '1rem' }}
          >
            Our Courses
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}
          >
            Discover our comprehensive range of courses designed to nurture both spiritual growth and professional excellence
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section category-filter" style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="category-buttons" style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: '2px solid var(--primary-color)',
                  backgroundColor: selectedCategory === category.id ? 'var(--primary-color)' : 'transparent',
                  color: selectedCategory === category.id ? 'white' : 'var(--primary-color)',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section courses-grid-section" style={{ padding: '2rem 0' }}>
        <div className="container">
          <motion.div 
            className="courses-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                className="course-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 12px 40px rgba(30, 58, 138, 0.15)'
                }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 4px 20px var(--shadow-light)',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="course-header" style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ 
                    color: 'var(--primary-color)', 
                    marginBottom: '0.5rem',
                    fontSize: '1.4rem'
                  }}>
                    {course.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <span style={{
                      backgroundColor: 'var(--primary-light)',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}>
                      {course.level}
                    </span>
                    <span style={{
                      backgroundColor: 'var(--accent-color)',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}>
                      {course.duration}
                    </span>
                  </div>
                </div>

                <div className="course-focus">
                  <h4 style={{ 
                    color: 'var(--text-dark)', 
                    marginBottom: '1rem',
                    fontSize: '1.1rem'
                  }}>
                    Course Focus:
                  </h4>
                  <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {course.focus.map((point, index) => (
                      <li key={index} style={{
                        padding: '0.5rem 0',
                        borderBottom: index < course.focus.length - 1 ? '1px solid var(--border-color)' : 'none',
                        color: 'var(--text-dark)',
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}>
                        <span style={{ 
                          color: 'var(--accent-color)', 
                          marginRight: '0.5rem',
                          fontWeight: 'bold'
                        }}>
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    marginTop: '1.5rem',
                    padding: '0.75rem'
                  }}
                >
                  Enroll Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
