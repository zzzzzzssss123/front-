import { useState, useEffect } from 'react';
import { projectsAPI } from '../services/api';

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    repoUrl: '',
    liveUrl: ''
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await projectsAPI.getAll();
      setProjects(response.data);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
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
      if (editingProject) {
        await projectsAPI.update(editingProject._id, formData);
      } else {
        await projectsAPI.create(formData);
      }

      fetchProjects();
      resetForm();
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to save project');
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl || '',
      repoUrl: project.repoUrl || '',
      liveUrl: project.liveUrl || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;

    try {
      await projectsAPI.delete(id);
      fetchProjects();
    } catch (error) {
      alert('Failed to delete project');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      repoUrl: '',
      liveUrl: ''
    });
    setEditingProject(null);
    setShowForm(false);
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
          {showForm ? 'Cancel' : '+ Add New Project'}
        </button>
      </div>

      {showForm && (
        <div className="card mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            {editingProject ? 'Edit Project' : 'Create New Project'}
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
              <label className="label">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="input"
              />
            </div>

            <div className="mb-4">
              <label className="label">Image URL (optional)</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="input"
              />
            </div>

            <div className="mb-4">
              <label className="label">Repository URL (optional)</label>
              <input
                type="url"
                name="repoUrl"
                value={formData.repoUrl}
                onChange={handleChange}
                className="input"
              />
            </div>

            <div className="mb-4">
              <label className="label">Live URL (optional)</label>
              <input
                type="url"
                name="liveUrl"
                value={formData.liveUrl}
                onChange={handleChange}
                className="input"
              />
            </div>

            <div className="flex gap-4">
              <button type="submit" className="btn-primary">
                {editingProject ? 'Update Project' : 'Create Project'}
              </button>
              <button type="button" onClick={resetForm} className="btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Projects List */}
      <div className="space-y-4">
        {projects.length === 0 ? (
          <div className="card text-center text-gray-600">
            <p>No projects yet. Create your first one!</p>
          </div>
        ) : (
          projects.map((project) => (
            <div key={project._id} className="card">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    {project.imageUrl && <span>📷 Image</span>}
                    {project.repoUrl && <span>💻 Repo</span>}
                    {project.liveUrl && <span>🔗 Live</span>}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(project)}
                    className="px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project._id)}
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

export default ProjectManager;
