import { useState } from 'react';
import { contactAPI } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess(false);

    try {
      await contactAPI.submit(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Have a question or want to work together? I'd love to hear from you!
        </p>

        {success && (
          <div className="card bg-green-50 border-green-200 text-green-700 mb-6">
            <p className="font-medium">Message sent successfully!</p>
            <p className="text-sm mt-1">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        )}

        {error && (
          <div className="card bg-red-50 border-red-200 text-red-600 mb-6">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="card">
          <div className="mb-6">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="input"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full disabled:opacity-50"
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="card text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">contact@example.com</p>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600">Your City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
