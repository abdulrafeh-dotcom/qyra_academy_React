import React, { useState } from 'react';
import '../styles/Global.css';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'teacher';
}

interface Course {
  id: string;
  title: string;
  students: number;
  status: 'active' | 'inactive';
  category: string;
}

interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  progress: number;
  joinDate: string;
}

const Dashboard: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [activeTab, setActiveTab] = useState('overview');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Mock data
  const mockCourses: Course[] = [
    { id: '1', title: 'Quran Reading with Tajweed', students: 45, status: 'active', category: 'Quran' },
    { id: '2', title: 'Digital Marketing', students: 32, status: 'active', category: 'Professional' },
    { id: '3', title: 'Mathematics', students: 28, status: 'active', category: 'Academic' },
    { id: '4', title: 'Graphic Design', students: 25, status: 'inactive', category: 'Professional' }
  ];

  const mockStudents: Student[] = [
    { id: '1', name: 'Ahmed Hassan', email: 'ahmed@email.com', course: 'Quran Reading', progress: 75, joinDate: '2024-01-15' },
    { id: '2', name: 'Fatima Al-Rashid', email: 'fatima@email.com', course: 'Digital Marketing', progress: 60, joinDate: '2024-01-20' },
    { id: '3', name: 'Mohammed Ali', email: 'mohammed@email.com', course: 'Mathematics', progress: 85, joinDate: '2024-01-10' },
    { id: '4', name: 'Aisha Khan', email: 'aisha@email.com', course: 'Graphic Design', progress: 45, joinDate: '2024-01-25' }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app, this would authenticate with backend
    if (loginForm.email && loginForm.password) {
      setCurrentUser({
        id: '1',
        name: 'Admin User',
        email: loginForm.email,
        role: 'admin'
      });
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setLoginForm({ email: '', password: '' });
  };

  if (!isLoggedIn) {
    return (
      <section className="section" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        backgroundColor: 'var(--background-light)'
      }}>
        <div className="container">
          <div className="login-container" style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div className="card" style={{ padding: '3rem' }}>
              <div className="text-center" style={{ marginBottom: '2rem' }}>
                <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                  Admin Dashboard
                </h2>
                <p style={{ color: 'var(--text-light)' }}>
                  Login to access the admin panel
                </p>
              </div>

              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="admin@qyra.com"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Login to Dashboard
                </button>
              </form>

              <div style={{ 
                marginTop: '2rem', 
                padding: '1rem', 
                backgroundColor: 'var(--background-light)', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>
                  <strong>Demo Credentials:</strong><br />
                  Email: admin@qyra.com<br />
                  Password: any password
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section dashboard-section">
      <div className="container">
        {/* Dashboard Header */}
        <div className="dashboard-header" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '2rem',
          padding: '1rem',
          backgroundColor: 'var(--secondary-color)',
          borderRadius: '12px',
          boxShadow: '0 4px 20px var(--shadow-light)'
        }}>
          <div>
            <h2 style={{ color: 'var(--primary-color)', margin: 0 }}>
              Admin Dashboard
            </h2>
            <p style={{ color: 'var(--text-light)', margin: 0 }}>
              Welcome back, {currentUser?.name}
            </p>
          </div>
          <button 
            onClick={handleLogout}
            className="btn btn-outline"
          >
            Logout
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="dashboard-tabs" style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem',
          borderBottom: '2px solid var(--border-color)',
          paddingBottom: '0'
        }}>
          {['overview', 'courses', 'students', 'reports', 'media'].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '1rem 1.5rem',
                border: 'none',
                backgroundColor: 'transparent',
                color: activeTab === tab ? 'var(--primary-color)' : 'var(--text-light)',
                borderBottom: activeTab === tab ? '3px solid var(--accent-color)' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                textTransform: 'capitalize',
                transition: 'all 0.3s ease'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="dashboard-content">
          {activeTab === 'overview' && (
            <div className="overview-tab">
              <div className="grid grid-4">
                <div className="card text-center">
                  <h3 style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>130</h3>
                  <p style={{ color: 'var(--text-light)' }}>Total Students</p>
                </div>
                <div className="card text-center">
                  <h3 style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>12</h3>
                  <p style={{ color: 'var(--text-light)' }}>Active Courses</p>
                </div>
                <div className="card text-center">
                  <h3 style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>8</h3>
                  <p style={{ color: 'var(--text-light)' }}>Instructors</p>
                </div>
                <div className="card text-center">
                  <h3 style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>95%</h3>
                  <p style={{ color: 'var(--text-light)' }}>Satisfaction Rate</p>
                </div>
              </div>

              <div className="grid grid-2" style={{ marginTop: '2rem' }}>
                <div className="card">
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                    Recent Activity
                  </h4>
                  <div>
                    <div style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--border-color)' }}>
                      <div style={{ fontWeight: '500', color: 'var(--text-dark)' }}>
                        New student enrolled: Ahmed Hassan
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                        2 hours ago
                      </div>
                    </div>
                    <div style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--border-color)' }}>
                      <div style={{ fontWeight: '500', color: 'var(--text-dark)' }}>
                        Course completed: Basic Islamic Studies
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                        5 hours ago
                      </div>
                    </div>
                    <div style={{ padding: '0.75rem 0' }}>
                      <div style={{ fontWeight: '500', color: 'var(--text-dark)' }}>
                        New payment received: Digital Marketing
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                        1 day ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                    Quick Actions
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <button className="btn btn-primary" style={{ width: '100%' }}>
                      Add New Course
                    </button>
                    <button className="btn btn-outline" style={{ width: '100%' }}>
                      Manage Students
                    </button>
                    <button className="btn btn-outline" style={{ width: '100%' }}>
                      Upload Media
                    </button>
                    <button className="btn btn-outline" style={{ width: '100%' }}>
                      Generate Reports
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="courses-tab">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--primary-color)' }}>Course Management</h3>
                <button className="btn btn-accent">
                  Add New Course
                </button>
              </div>

              <div className="grid grid-2">
                {mockCourses.map((course) => (
                  <div key={course.id} className="card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                      <div>
                        <h4 style={{ color: 'var(--primary-color)', margin: 0 }}>
                          {course.title}
                        </h4>
                        <p style={{ color: 'var(--text-light)', margin: '0.5rem 0' }}>
                          Category: {course.category}
                        </p>
                      </div>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        backgroundColor: course.status === 'active' ? '#D4EDDA' : '#F8D7DA',
                        color: course.status === 'active' ? '#155724' : '#721C24'
                      }}>
                        {course.status}
                      </span>
                    </div>
                    
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ color: 'var(--text-light)' }}>Students Enrolled</span>
                        <span style={{ fontWeight: '600', color: 'var(--primary-color)' }}>
                          {course.students}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn btn-outline" style={{ flex: 1 }}>
                        Edit
                      </button>
                      <button className="btn btn-outline" style={{ flex: 1 }}>
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div className="students-tab">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--primary-color)' }}>Student Management</h3>
                <button className="btn btn-accent">
                  Add New Student
                </button>
              </div>

              <div className="card">
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--primary-color)' }}>Name</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--primary-color)' }}>Email</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--primary-color)' }}>Course</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--primary-color)' }}>Progress</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--primary-color)' }}>Join Date</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--primary-color)' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockStudents.map((student) => (
                        <tr key={student.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                          <td style={{ padding: '1rem' }}>{student.name}</td>
                          <td style={{ padding: '1rem' }}>{student.email}</td>
                          <td style={{ padding: '1rem' }}>{student.course}</td>
                          <td style={{ padding: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <div style={{
                                flex: 1,
                                height: '8px',
                                backgroundColor: 'var(--border-color)',
                                borderRadius: '4px',
                                overflow: 'hidden'
                              }}>
                                <div style={{
                                  width: `${student.progress}%`,
                                  height: '100%',
                                  backgroundColor: 'var(--accent-color)',
                                  borderRadius: '4px'
                                }}></div>
                              </div>
                              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                                {student.progress}%
                              </span>
                            </div>
                          </td>
                          <td style={{ padding: '1rem' }}>{student.joinDate}</td>
                          <td style={{ padding: '1rem' }}>
                            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="reports-tab">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>Reports & Analytics</h3>
              
              <div className="grid grid-2">
                <div className="card">
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                    Enrollment Statistics
                  </h4>
                  <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <div style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
                      📊
                    </div>
                    <p style={{ color: 'var(--text-light)' }}>
                      Monthly enrollment increased by 25%
                    </p>
                  </div>
                </div>

                <div className="card">
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                    Course Performance
                  </h4>
                  <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <div style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
                      📈
                    </div>
                    <p style={{ color: 'var(--text-light)' }}>
                      Average completion rate: 78%
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button className="btn btn-primary">
                  Generate Full Report
                </button>
              </div>
            </div>
          )}

          {activeTab === 'media' && (
            <div className="media-tab">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--primary-color)' }}>Media Management</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button className="btn btn-outline">
                    Upload Video
                  </button>
                  <button className="btn btn-outline">
                    Upload Image
                  </button>
                </div>
              </div>

              <div className="grid grid-3">
                <div className="card text-center">
                  <div style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                    📹
                  </div>
                  <h4 style={{ color: 'var(--primary-color)' }}>Videos</h4>
                  <p style={{ color: 'var(--text-light)' }}>12 videos uploaded</p>
                  <button className="btn btn-outline" style={{ marginTop: '1rem' }}>
                    Manage Videos
                  </button>
                </div>

                <div className="card text-center">
                  <div style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                    🖼️
                  </div>
                  <h4 style={{ color: 'var(--primary-color)' }}>Images</h4>
                  <p style={{ color: 'var(--text-light)' }}>48 images uploaded</p>
                  <button className="btn btn-outline" style={{ marginTop: '1rem' }}>
                    Manage Images
                  </button>
                </div>

                <div className="card text-center">
                  <div style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                    📱
                  </div>
                  <h4 style={{ color: 'var(--primary-color)' }}>Social Media</h4>
                  <p style={{ color: 'var(--text-light)' }}>Connect accounts</p>
                  <button className="btn btn-outline" style={{ marginTop: '1rem' }}>
                    Configure
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
