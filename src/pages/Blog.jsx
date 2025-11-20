import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogAPI } from '../services/api';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await blogAPI.getAll();
        setPosts(response.data);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
        Blog
      </h1>
      <p className="text-xl text-gray-600 text-center mb-12">
        Thoughts, tutorials, and insights on web development
      </p>

      {posts.length === 0 ? (
        <div className="card text-center text-gray-600">
          <p className="text-xl">No blog posts yet. Check back soon!</p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-8">
          {posts.map((post) => (
            <Link key={post._id} to={`/blog/${post._id}`} className="block">
              <article className="card group hover:border-primary-300">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors flex-1">
                    {post.title}
                  </h2>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.content}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                      {post.author?.username?.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium text-gray-700">
                      {post.author?.username}
                    </span>
                  </div>
                  <time>{formatDate(post.createdAt)}</time>
                </div>

                <div className="mt-4 inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                  Read more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
