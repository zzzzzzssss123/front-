import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-pink-100 rounded-full text-sm font-semibold text-gray-700">
            🎨 欢迎来到我的作品集
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">创造美好的数字体验</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          全栈开发者 <span className="accent-dot"></span> 创意问题解决者 <span className="accent-dot"></span> 技术爱好者
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <Link to="/projects" className="btn-primary">
            🚀 查看我的项目
          </Link>
          <Link to="/blog" className="btn-secondary">
            📝 阅读博客
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="card max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-pink-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-800">关于我</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            👋 你好！我是一名充满热情的全栈开发者，专注于构建现代化的Web应用程序。
            我热爱为复杂问题创造优雅的解决方案，并与社区分享我的知识。
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            这个作品集展示了我的工作、项目以及对Web开发和技术的思考。
            欢迎探索我的项目，如果你想合作，请随时联系我！
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium">React 专家</span>
            <span className="px-4 py-2 bg-pink-50 text-pink-700 rounded-lg text-sm font-medium">Node.js 开发</span>
            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium">UI/UX 设计</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">技能与技术</h2>
          <p className="text-gray-600">我精通的开发技术栈</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">前端开发</h3>
            <p className="text-gray-600 leading-relaxed">
              React, JavaScript, TypeScript, Tailwind CSS, HTML5, CSS3, Vite
            </p>
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-400 to-green-600 w-11/12 rounded-full"></div>
            </div>
          </div>

          <div className="card group">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">后端开发</h3>
            <p className="text-gray-600 leading-relaxed">
              Node.js, Express, MongoDB, PostgreSQL, RESTful APIs, JWT, GraphQL
            </p>
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-pink-400 to-pink-600 w-10/12 rounded-full"></div>
            </div>
          </div>

          <div className="card group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">工具与部署</h3>
            <p className="text-gray-600 leading-relaxed">
              Git, VS Code, Docker, Vercel, Netlify, AWS, CI/CD
            </p>
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-400 to-pink-400 w-9/12 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-pink-500 opacity-90"></div>
          <div className="relative card text-white text-center border-0 py-16">
            <h2 className="text-4xl font-bold mb-4">让我们一起创造精彩！</h2>
            <p className="text-xl mb-8 text-green-50 max-w-2xl mx-auto">
              我始终对新的机会和合作持开放态度。让我们一起打造令人惊叹的产品。
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-white text-green-600 rounded-xl font-bold hover:bg-green-50 transition-all transform hover:scale-105 shadow-xl"
            >
              💬 联系我
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
