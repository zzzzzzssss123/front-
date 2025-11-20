import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogAPI, commentsAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';

const BlogPost = () => {
  const { id } = useParams();
  const { isAuthenticated, user } = useAuth();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [commentBody, setCommentBody] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await blogAPI.getOne(id);
        setPost(response.data);
        setComments(response.data.comments || []);
      } catch (err) {
        setError('Failed to load blog post');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentBody.trim()) return;

    setSubmitting(true);
    try {
      const response = await commentsAPI.create(id, { body: commentBody });
      setComments([response.data, ...comments]);
      setCommentBody('');
    } catch (err) {
      alert('Failed to post comment');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
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
      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen">
        <div className="card bg-red-50 border-red-200 text-red-600 text-center">
          <p>{error || 'Post not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <article className="max-w-4xl mx-auto">
        <div className="card">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xl">
              {post.author?.username?.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-medium text-gray-800">{post.author?.username}</p>
              <p className="text-sm text-gray-500">{formatDate(post.createdAt)}</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
              {post.content}
            </p>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Comments ({comments.length})
          </h2>

          {isAuthenticated ? (
            <form onSubmit={handleCommentSubmit} className="card mb-8">
              <textarea
                value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}
                placeholder="Write a comment..."
                rows="4"
                className="input"
                required
              />
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary mt-4 disabled:opacity-50"
              >
                {submitting ? 'Posting...' : 'Post Comment'}
              </button>
            </form>
          ) : (
            <div className="card bg-primary-50 text-center mb-8">
              <p className="text-gray-700">Please log in to leave a comment</p>
            </div>
          )}

          <div className="space-y-4">
            {comments.length === 0 ? (
              <div className="card text-center text-gray-600">
                <p>No comments yet. Be the first to comment!</p>
              </div>
            ) : (
              comments.map((comment) => (
                <div key={comment._id} className="card">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {comment.author?.username?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-gray-800">
                          {comment.author?.username}
                        </span>
                        <span className="text-sm text-gray-500">
                          {formatDate(comment.createdAt)}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.body}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
