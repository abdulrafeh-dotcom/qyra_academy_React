import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/config';
import '../../styles/DashboardComponents.css';

interface Video {
  id: string;
  title: string;
  url: string;
  description: string;
  createdAt: any;
}

const VideoManager: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: ''
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const q = query(collection(db, 'videos'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const videosData: Video[] = [];
      querySnapshot.forEach((doc) => {
        videosData.push({
          id: doc.id,
          title: doc.data().title || '',
          url: doc.data().url || '',
          description: doc.data().description || '',
          createdAt: doc.data().createdAt
        });
      });
      setVideos(videosData);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.url) {
      alert('Please fill in title and URL');
      return;
    }
    
    try {
      if (editingId) {
        const docRef = doc(db, 'videos', editingId);
        await updateDoc(docRef, {
          title: formData.title,
          url: formData.url,
          description: formData.description,
          updatedAt: new Date()
        });
      } else {
        await addDoc(collection(db, 'videos'), {
          title: formData.title,
          url: formData.url,
          description: formData.description,
          createdAt: new Date()
        });
      }
      
      setFormData({ title: '', url: '', description: '' });
      setEditingId(null);
      fetchVideos();
    } catch (error) {
      console.error('Error saving video:', error);
      alert('Error saving video');
    }
  };

  const handleEdit = (video: Video) => {
    setFormData({
      title: video.title,
      url: video.url,
      description: video.description
    });
    setEditingId(video.id);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this video?')) {
      try {
        await deleteDoc(doc(db, 'videos', id));
        fetchVideos();
      } catch (error) {
        console.error('Error deleting video:', error);
        alert('Error deleting video');
      }
    }
  };

  const handleCancel = () => {
    setFormData({ title: '', url: '', description: '' });
    setEditingId(null);
  };

  if (loading) {
    return <div className="loading">Loading videos...</div>;
  }

  return (
    <div className="content-manager">
      <div className="content-header">
        <h2>Video Management</h2>
        <p>Add, edit, or delete video content</p>
      </div>

      <div className="content-form">
        <h3>{editingId ? 'Edit Video' : 'Add New Video'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Video Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                placeholder="Enter video title"
              />
            </div>
            <div className="form-group">
              <label>Video URL</label>
              <input
                type="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                required
                placeholder="https://youtube.com/watch?v=..."
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              placeholder="Enter video description"
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-primary">
              {editingId ? 'Update Video' : 'Add Video'}
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
        <h3>Existing Videos ({videos.length})</h3>
        {videos.length === 0 ? (
          <p className="no-content">No videos found. Add your first video above!</p>
        ) : (
          <div className="items-grid">
            {videos.map((video) => (
              <div key={video.id} className="content-item">
                <div className="item-header">
                  <h4>{video.title}</h4>
                  <div className="item-actions">
                    <button onClick={() => handleEdit(video)} className="btn-edit">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(video.id)} className="btn-delete">
                      Delete
                    </button>
                  </div>
                </div>
                <p className="item-url">{video.url}</p>
                <p className="item-description">{video.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoManager;
