import React, { useState } from 'react';
import '../styles/Global.css';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'teacher';
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
  const mockStudents: Student[] = [
    { id: '1', name: 'Ahmed Hassan', email: 'ahmed@email.com', course: 'Quran Reading', progress: 75, joinDate: '2024-01-15' },
    { id: '2', name: 'Fatima Al-Rashid', email: 'fatima@email.com', course: 'Digital Marketing', progress: 60, joinDate: '2024-01-20' },
    { id: '3', name: 'Mohammed Ali', email: 'mohammed@email.com', course: 'Mathematics', progress: 85, joinDate: '2024-01-10' },
    { id: '4', name: 'Aisha Khan', email: 'aisha@email.com', course: 'Graphic Design', progress: 45, joinDate: '2024-01-25' }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    if (loginForm.email === 'admin@qyra.com' && loginForm.password) {
      setIsLoggedIn(true);
      setCurrentUser({
        id: '1',
        name: 'Admin User',
        email: loginForm.email,
        role: 'admin'
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setLoginForm({ email: '', password: '' });
  };

  if (!isLoggedIn) {
    return (
      <section className="section dashboard-section">
        <div className="container">
          <div className="login-container" style={{ 
            maxWidth: '400px', 
            margin: '0 auto', 
            padding: '2rem',
            backgroundColor: 'var(--secondary-color)',
            borderRadius: '12px',
            boxShadow: '0 8px 32px var(--shadow-medium)'
          }}>
            <h2 style={{ 
              textAlign: 'center', 
              color: 'var(--primary-color)', 
              marginBottom: '2rem' 
            }}>
              Admin Login
            </h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
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
          {['overview', 'students', 'reports', 'media'].map((tab) => (
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
                  <h3 style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>8</h3>
                  <p style={{ color: 'var(--text-light)' }}>Instructors</p>
                </div>
                <div className="card text-center">
                  <h3 style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>95%</h3>
                  <p style={{ color: 'var(--text-light)' }}>Satisfaction Rate</p>
                </div>
                <div className="card text-center">
                  <h3 style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>24</h3>
                  <p style={{ color: 'var(--text-light)' }}>Media Files</p>
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

          {activeTab === 'students' && (
            <div className="students-tab">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>
                Student Management
              </h3>
              <div className="grid grid-2">
                {mockStudents.map((student) => (
                  <div key={student.id} className="card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                      <div>
                        <h4 style={{ color: 'var(--primary-color)', margin: 0 }}>
                          {student.name}
                        </h4>
                        <p style={{ color: 'var(--text-light)', margin: '0.5rem 0' }}>
                          {student.email}
                        </p>
                      </div>
                      <span style={{
                        backgroundColor: student.progress > 70 ? 'var(--accent-color)' : 'var(--primary-light)',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '500'
                      }}>
                        {student.progress}%
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div>
                        <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Course:</span>
                        <span style={{ color: 'var(--text-dark)', fontWeight: '500' }}>{student.course}</span>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Progress:</span>
                        <div style={{ 
                          backgroundColor: 'var(--border-color)', 
                          borderRadius: '4px', 
                          height: '8px',
                          marginTop: '0.25rem',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            backgroundColor: student.progress > 70 ? 'var(--accent-color)' : 'var(--primary-color)',
                            height: '100%',
                            width: `${student.progress}%`,
                            transition: 'width 0.3s ease'
                          }}></div>
                        </div>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Joined:</span>
                        <span style={{ color: 'var(--text-dark)', fontWeight: '500' }}>{student.joinDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="reports-tab">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>
                Reports & Analytics
              </h3>
              <div className="grid grid-2">
                <div className="card">
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                    Enrollment Statistics
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-light)' }}>This Month:</span>
                      <span style={{ color: 'var(--text-dark)', fontWeight: '500' }}>+23 Students</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-light)' }}>Last Month:</span>
                      <span style={{ color: 'var(--text-dark)', fontWeight: '500' }}>+18 Students</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-light)' }}>Total Active:</span>
                      <span style={{ color: 'var(--text-dark)', fontWeight: '500' }}>130 Students</span>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                    Revenue Overview
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-light)' }}>This Month:</span>
                      <span style={{ color: 'var(--accent-color)', fontWeight: '500' }}>$4,580</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-light)' }}>Last Month:</span>
                      <span style={{ color: 'var(--text-dark)', fontWeight: '500' }}>$3,920</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-light)' }}>Total Revenue:</span>
                      <span style={{ color: 'var(--primary-color)', fontWeight: '500' }}>$28,450</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'media' && (
            <div className="media-tab">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>
                Media Management
              </h3>
              <div className="card">
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                  Upload New Media
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                      Media Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter media title"
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Enter media description"
                      rows={4}
                      style={{ resize: 'vertical' }}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                      Media File
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      accept="video/*,image/*"
                    />
                  </div>
                  <button className="btn btn-primary">
                    Upload Media
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
