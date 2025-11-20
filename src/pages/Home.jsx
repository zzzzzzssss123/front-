import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Full-Stack Developer | Creative Problem Solver | Tech Enthusiast
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/projects" className="btn-primary">
            View My Projects
          </Link>
          <Link to="/blog" className="btn-secondary">
            Read My Blog
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="card max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Hi! I'm a passionate full-stack developer with expertise in building modern web applications.
            I love creating elegant solutions to complex problems and sharing my knowledge with the community.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            This portfolio showcases my work, projects, and thoughts on web development and technology.
            Feel free to explore my projects and reach out if you'd like to collaborate!
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Front-End</h3>
            <p className="text-gray-600">React, JavaScript, Tailwind CSS, HTML5, CSS3</p>
          </div>

          <div className="card">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Back-End</h3>
            <p className="text-gray-600">Node.js, Express, MongoDB, RESTful APIs, JWT</p>
          </div>

          <div className="card">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Tools</h3>
            <p className="text-gray-600">Git, VS Code, Postman, npm, MongoDB Atlas</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="card bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together!</h2>
          <p className="text-lg mb-6 text-primary-50">
            I'm always open to new opportunities and collaborations.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-bold hover:bg-primary-50 transition-all">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
