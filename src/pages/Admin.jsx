import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ProjectManager from '../components/ProjectManager';
import BlogManager from '../components/BlogManager';

const Admin = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">Welcome back, {user?.username}!</p>
      </div>

      {/* Tabs */}
      <div className="mb-8 border-b-2 border-gray-200">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'projects'
                ? 'text-primary-600 border-b-4 border-primary-600 -mb-0.5'
                : 'text-gray-600 hover:text-primary-600'
            }`}
          >
            Manage Projects
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'blog'
                ? 'text-primary-600 border-b-4 border-primary-600 -mb-0.5'
                : 'text-gray-600 hover:text-primary-600'
            }`}
          >
            Manage Blog
          </button>
        </div>
      </div>

      {/* Content */}
      <div>
        {activeTab === 'projects' && <ProjectManager />}
        {activeTab === 'blog' && <BlogManager />}
      </div>
    </div>
  );
};

export default Admin;
