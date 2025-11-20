import { useState, useEffect } from 'react';
import { blogAPI } from '../services/api';

const BlogManager = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await blogAPI.getAll();
      setPosts(response.data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingPost) {
        await blogAPI.update(editingPost._id, formData);
      } else {
        await blogAPI.create(formData);
      }

      fetchPosts();
      resetForm();
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to save post');
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      await blogAPI.delete(id);
      fetchPosts();
    } catch (error) {
      alert('Failed to delete post');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: ''
    });
    setEditingPost(null);
    setShowForm(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-primary"
        >
          {showForm ? 'Cancel' : '+ Add New Post'}
        </button>
      </div>

      {showForm && (
        <div className="card mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            {editingPost ? 'Edit Post' : 'Create New Post'}
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="input"
              />
            </div>

            <div className="mb-4">
              <label className="label">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows="12"
                className="input"
              />
            </div>

            <div className="flex gap-4">
              <button type="submit" className="btn-primary">
                {editingPost ? 'Update Post' : 'Create Post'}
              </button>
              <button type="button" onClick={resetForm} className="btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-4">
        {posts.length === 0 ? (
          <div className="card text-center text-gray-600">
            <p>No blog posts yet. Create your first one!</p>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="card">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h4>
                  <p className="text-gray-600 mb-3 line-clamp-2">{post.content}</p>
                  <div className="text-sm text-gray-500">
                    Published: {formatDate(post.createdAt)}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(post)}
                    className="px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogManager;
