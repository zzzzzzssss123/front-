# 个人作品集网站 - 前端

一个现代化的个人作品集网站前端项目，采用 React + Vite + Tailwind CSS 构建，提供博客发布、项目展示、联系表单等功能。

## 在线地址

- **前端网站**: [https://client-262gfkfiu-asdosadkkoas-projects.vercel.app](https://client-262gfkfiu-asdosadkkoas-projects.vercel.app)
- **后端 API**: [https://your-backend-domain.vercel.app/api](https://your-backend-domain.vercel.app/api)
- **后端仓库**: [https://github.com/zzzzzzssss123/backend-1](https://github.com/zzzzzzssss123/backend-1)

---

## 项目概述

这是一个功能完整的个人作品集网站前端应用，支持用户认证、博客管理、项目展示和联系表单等功能。网站采用响应式设计，适配各种设备屏幕。

### 主要功能

- **用户系统**
  - 用户注册和登录
  - JWT Token 身份验证
  - 受保护的管理员页面

- **博客功能**
  - 博客文章列表浏览
  - 文章详情页面
  - 评论功能（需登录）
  - 博客文章管理（管理员）

- **项目展示**
  - 项目列表展示
  - 项目详情查看
  - 项目管理（管理员）

- **联系表单**
  - 访客留言提交
  - 消息管理（管理员）

- **管理功能**
  - 管理员控制面板
  - 内容管理界面

---

## 技术栈

- **框架**: React 19.2.0
- **构建工具**: Vite 7.2.2
- **样式**: Tailwind CSS 4.1.17
- **路由**: React Router DOM 7.9.6
- **HTTP 客户端**: Axios 1.13.2
- **状态管理**: React Context API
- **部署平台**: Vercel

---

## 本地运行

### 前置要求

确保你的开发环境已安装以下工具：
- Node.js (版本 16.x 或更高)
- npm 或 yarn 包管理器
- Git

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/zzzzzzssss123/front-.git
   cd front-
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **配置环境变量**

   在项目根目录创建 `.env` 文件：
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

   **环境变量说明**：
   - `VITE_API_URL`: 后端 API 的基础 URL
     - 本地开发: `http://localhost:5000/api`
     - 生产环境: `https://your-backend-domain.vercel.app/api`

4. **启动开发服务器**
   ```bash
   npm run dev
   ```

   开发服务器将在 `http://localhost:5173` 启动（Vite 默认端口）

5. **打开浏览器**

   访问 [http://localhost:5173](http://localhost:5173) 查看应用

---

## 如何连接后端 API

### 开发环境配置

1. **确保后端服务正在运行**

   首先需要启动后端服务器。克隆并运行后端项目：
   ```bash
   # 在另一个终端窗口
   git clone https://github.com/zzzzzzssss123/backend-1.git
   cd backend-1
   npm install
   npm start
   ```

   后端默认运行在 `http://localhost:5000`

2. **配置前端环境变量**

   确保前端的 `.env` 文件配置正确：
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

3. **API 服务配置**

   项目中的 API 请求通过 `src/services/api.js` 文件统一管理。该文件会自动读取环境变量中的 `VITE_API_URL`。

   ```javascript
   // src/services/api.js 示例
   import axios from 'axios';

   const api = axios.create({
     baseURL: import.meta.env.VITE_API_URL,
   });

   // 添加请求拦截器，自动附加 JWT Token
   api.interceptors.request.use((config) => {
     const token = localStorage.getItem('token');
     if (token) {
       config.headers.Authorization = `Bearer ${token}`;
     }
     return config;
   });
   ```

4. **验证连接**

   启动前端和后端后，可以通过以下方式验证连接：
   - 打开浏览器开发者工具（F12）
   - 访问网站任意页面
   - 查看 Network 标签页
   - 应该能看到向 `http://localhost:5000/api` 发送的请求

### 生产环境配置

在 Vercel 部署时，需要配置环境变量：

1. 登录 Vercel Dashboard
2. 选择你的前端项目
3. 进入 Settings → Environment Variables
4. 添加环境变量：
   - **Key**: `VITE_API_URL`
   - **Value**: `https://your-backend-domain.vercel.app/api`
5. 重新部署项目

---

## 项目结构

```
client/
├── public/              # 静态资源
├── src/
│   ├── assets/         # 图片、图标等资源
│   ├── components/     # 可复用组件
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/        # React Context (状态管理)
│   │   └── AuthContext.jsx
│   ├── pages/          # 页面组件
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Admin.jsx
│   ├── services/       # API 服务
│   │   └── api.js
│   ├── utils/          # 工具函数
│   ├── App.jsx         # 主应用组件
│   ├── App.css         # 应用样式
│   ├── main.jsx        # 应用入口
│   └── index.css       # 全局样式
├── .env                # 环境变量（本地）
├── .gitignore          # Git 忽略文件
├── index.html          # HTML 模板
├── package.json        # 项目依赖
├── vite.config.js      # Vite 配置
├── vercel.json         # Vercel 部署配置
└── tailwind.config.js  # Tailwind CSS 配置
```

---

## 可用脚本

在项目目录中，你可以运行以下命令：

### `npm run dev`

启动开发服务器，支持热模块替换（HMR）。

### `npm run build`

构建生产版本到 `dist` 目录。

### `npm run preview`

预览生产构建版本。

### `npm run lint`

运行 ESLint 检查代码质量。

---

## 路由说明

应用使用 React Router 进行客户端路由管理：

| 路由路径 | 组件 | 说明 | 权限 |
|---------|------|------|------|
| `/` | Home | 首页 | 公开 |
| `/projects` | Projects | 项目展示 | 公开 |
| `/blog` | Blog | 博客列表 | 公开 |
| `/blog/:id` | BlogPost | 博客详情 | 公开 |
| `/contact` | Contact | 联系表单 | 公开 |
| `/login` | Login | 登录 | 公开 |
| `/register` | Register | 注册 | 公开 |
| `/admin` | Admin | 管理面板 | 需登录 |

---

## 部署到 Vercel

### 自动部署

项目已配置 Vercel 自动部署：

1. 将代码推送到 GitHub
2. Vercel 自动检测更新并部署
3. 部署完成后访问生成的 URL

### 手动部署

使用 Vercel CLI 进行部署：

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   vercel
   ```

4. **生产环境部署**
   ```bash
   vercel --prod
   ```

---

## Vercel 配置说明

项目包含 `vercel.json` 配置文件，用于处理 React Router 的客户端路由：

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

这个配置确保所有路由请求都重定向到 `index.html`，由 React Router 处理路由。

---

## 常见问题

### 1. API 请求失败 (CORS 错误)

**问题**: 浏览器控制台显示 CORS 相关错误

**解决方案**: 确保后端已正确配置 CORS，允许前端域名访问

### 2. 环境变量未生效

**问题**: 修改 `.env` 文件后没有效果

**解决方案**:
- Vite 环境变量必须以 `VITE_` 开头
- 修改 `.env` 后需要重启开发服务器
- 使用 `import.meta.env.VITE_变量名` 访问

### 3. 404 错误 (部署后)

**问题**: 刷新页面时出现 404 错误

**解决方案**: 确保 `vercel.json` 配置正确，所有路由重定向到 `index.html`

### 4. Token 过期

**问题**: 登录后一段时间自动退出

**解决方案**: JWT Token 默认有效期为 30 天，过期后需要重新登录

---

## 开发指南

### 添加新页面

1. 在 `src/pages/` 创建新组件
2. 在 `src/App.jsx` 添加路由配置
3. 在导航栏添加链接（如需要）

### 调用 API

```javascript
import api from '../services/api';

// GET 请求
const fetchData = async () => {
  try {
    const response = await api.get('/endpoint');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// POST 请求
const sendData = async (data) => {
  try {
    const response = await api.post('/endpoint', data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
```

### 使用认证上下文

```javascript
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, login, logout } = useAuth();

  // 检查用户是否登录
  if (user) {
    // 已登录
  }
}
```

---

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

---

## 许可证

MIT License

---

## 相关链接

- **后端仓库**: [https://github.com/zzzzzzssss123/backend-1](https://github.com/zzzzzzssss123/backend-1)
- **后端 API 文档**: 查看后端仓库的 README.md
- **在线演示**: [https://client-262gfkfiu-asdosadkkoas-projects.vercel.app](https://client-262gfkfiu-asdosadkkoas-projects.vercel.app)

---

## 联系方式

如有问题或建议，请通过以下方式联系：
- GitHub Issues: [https://github.com/zzzzzzssss123/front-/issues](https://github.com/zzzzzzssss123/front-/issues)
- 通过网站联系表单留言

---

## 致谢

感谢所有开源项目和贡献者！
