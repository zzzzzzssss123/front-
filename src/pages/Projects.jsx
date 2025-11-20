import { useState, useEffect } from 'react';
import { projectsAPI } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectsAPI.getAll();
        setProjects(response.data);
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen">
        <div className="card bg-red-50 border-red-200 text-red-600 text-center">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
        My Projects
      </h1>
      <p className="text-xl text-gray-600 text-center mb-12">
        Here are some of the projects I've worked on
      </p>

      {projects.length === 0 ? (
        <div className="card text-center text-gray-600">
          <p className="text-xl">No projects yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project._id} className="card group">
              {project.imageUrl && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex gap-3 flex-wrap">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium hover:from-primary-600 hover:to-secondary-600 transition-all"
                  >
                    Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border-2 border-primary-300 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-all"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
