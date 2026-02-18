import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/config';
import '../../styles/DashboardComponents.css';

interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  price: string;
  description: string;
  category: string;
  createdAt: any;
}

const CourseManager: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    instructor: '',
    duration: '',
    price: '',
    description: '',
    category: ''
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const q = query(collection(db, 'courses'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const coursesData: Course[] = [];
      querySnapshot.forEach((doc) => {
        coursesData.push({
          id: doc.id,
          title: doc.data().title || '',
          instructor: doc.data().instructor || '',
          duration: doc.data().duration || '',
          price: doc.data().price || '',
          description: doc.data().description || '',
          category: doc.data().category || '',
          createdAt: doc.data().createdAt
        });
      });
      setCourses(coursesData);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.instructor) {
      alert('Please fill in title and instructor');
      return;
    }
    
    try {
      if (editingId) {
        const docRef = doc(db, 'courses', editingId);
        await updateDoc(docRef, {
          title: formData.title,
          instructor: formData.instructor,
          duration: formData.duration,
          price: formData.price,
          description: formData.description,
          category: formData.category,
          updatedAt: new Date()
        });
      } else {
        await addDoc(collection(db, 'courses'), {
          title: formData.title,
          instructor: formData.instructor,
          duration: formData.duration,
          price: formData.price,
          description: formData.description,
          category: formData.category,
          createdAt: new Date()
        });
      }
      
      setFormData({ 
        title: '', 
        instructor: '', 
        duration: '', 
        price: '', 
        description: '', 
        category: '' 
      });
      setEditingId(null);
      fetchCourses();
    } catch (error) {
      console.error('Error saving course:', error);
      alert('Error saving course');
    }
  };

  const handleEdit = (course: Course) => {
    setFormData({
      title: course.title,
      instructor: course.instructor,
      duration: course.duration,
      price: course.price,
      description: course.description,
      category: course.category
    });
    setEditingId(course.id);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this course?')) {
      try {
        await deleteDoc(doc(db, 'courses', id));
        fetchCourses();
      } catch (error) {
        console.error('Error deleting course:', error);
        alert('Error deleting course');
      }
    }
  };

  const handleCancel = () => {
    setFormData({ 
      title: '', 
      instructor: '', 
      duration: '', 
      price: '', 
      description: '', 
      category: '' 
    });
    setEditingId(null);
  };

  if (loading) {
    return <div className="loading">Loading courses...</div>;
  }

  return (
    <div className="content-manager">
      <div className="content-header">
        <h2>Course Management</h2>
        <p>Add, edit, or delete course content</p>
      </div>

      <div className="content-form">
        <h3>{editingId ? 'Edit Course' : 'Add New Course'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Course Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                placeholder="Enter course title"
              />
            </div>
            <div className="form-group">
              <label>Instructor</label>
              <input
                type="text"
                value={formData.instructor}
                onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                required
                placeholder="Enter instructor name"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Duration</label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                placeholder="e.g., 6 weeks, 3 months"
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="e.g., $99, Free"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="">Select category</option>
              <option value="quran">Quran & Islamic Education</option>
              <option value="academic">Academic Subjects</option>
              <option value="professional">Professional Courses</option>
            </select>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              placeholder="Enter course description"
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-primary">
              {editingId ? 'Update Course' : 'Add Course'}
            </button>
            {editingId && (
              <button type="button" onClick={handleCancel} className="btn-secondary">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="content-list">
        <h3>Existing Courses ({courses.length})</h3>
        {courses.length === 0 ? (
          <p className="no-content">No courses found. Add your first course above!</p>
        ) : (
          <div className="items-grid">
            {courses.map((course) => (
              <div key={course.id} className="content-item">
                <div className="item-header">
                  <h4>{course.title}</h4>
                  <div className="item-actions">
                    <button onClick={() => handleEdit(course)} className="btn-edit">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(course.id)} className="btn-delete">
                      Delete
                    </button>
                  </div>
                </div>
                <div className="item-details">
                  <p><strong>Instructor:</strong> {course.instructor}</p>
                  <p><strong>Duration:</strong> {course.duration}</p>
                  <p><strong>Price:</strong> {course.price}</p>
                  <p><strong>Category:</strong> {course.category}</p>
                </div>
                <p className="item-description">{course.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseManager;
