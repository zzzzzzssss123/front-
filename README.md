# Personal Portfolio Website - Frontend

A modern personal portfolio website frontend built with React + Vite + Tailwind CSS, featuring blog publishing, project showcase, contact forms, and more.

## Live URLs

- **Frontend Website**: [https://client-262gfkfiu-asdosadkkoas-projects.vercel.app](https://client-262gfkfiu-asdosadkkoas-projects.vercel.app)
- **Backend API**: [https://your-backend-domain.vercel.app/api](https://your-backend-domain.vercel.app/api)
- **Backend Repository**: [https://github.com/zzzzzzssss123/backend-1](https://github.com/zzzzzzssss123/backend-1)

---

## Project Overview

This is a full-featured personal portfolio website frontend application with user authentication, blog management, project showcase, and contact form functionality. The website uses responsive design and adapts to various device screens.

### Key Features

- **User System**
  - User registration and login
  - JWT Token authentication
  - Protected admin pages

- **Blog Features**
  - Blog post list browsing
  - Article detail pages
  - Comment functionality (login required)
  - Blog post management (admin)

- **Project Showcase**
  - Project list display
  - Project detail viewing
  - Project management (admin)

- **Contact Form**
  - Visitor message submission
  - Message management (admin)

- **Admin Features**
  - Admin control panel
  - Content management interface

---

## Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Styling**: Tailwind CSS 4.1.17
- **Routing**: React Router DOM 7.9.6
- **HTTP Client**: Axios 1.13.2
- **State Management**: React Context API
- **Deployment Platform**: Vercel

---

## Local Development

### Prerequisites

Ensure your development environment has the following tools installed:
- Node.js (version 16.x or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/zzzzzzssss123/front-.git
   cd front-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

   **Environment Variable Description**:
   - `VITE_API_URL`: Backend API base URL
     - Local development: `http://localhost:5000/api`
     - Production: `https://your-backend-domain.vercel.app/api`

4. **Start development server**
   ```bash
   npm run dev
   ```

   The development server will start at `http://localhost:5173` (Vite default port)

5. **Open browser**

   Visit [http://localhost:5173](http://localhost:5173) to view the application

---

## How to Connect to Backend API

### Development Environment Configuration

1. **Ensure backend service is running**

   First, start the backend server. Clone and run the backend project:
   ```bash
   # In another terminal window
   git clone https://github.com/zzzzzzssss123/backend-1.git
   cd backend-1
   npm install
   npm start
   ```

   Backend runs on `http://localhost:5000` by default

2. **Configure frontend environment variables**

   Ensure the frontend `.env` file is configured correctly:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

3. **API Service Configuration**

   API requests in the project are managed centrally through the `src/services/api.js` file, which automatically reads `VITE_API_URL` from environment variables.

   ```javascript
   // src/services/api.js example
   import axios from 'axios';

   const api = axios.create({
     baseURL: import.meta.env.VITE_API_URL,
   });

   // Add request interceptor to automatically attach JWT Token
   api.interceptors.request.use((config) => {
     const token = localStorage.getItem('token');
     if (token) {
       config.headers.Authorization = `Bearer ${token}`;
     }
     return config;
   });
   ```

4. **Verify Connection**

   After starting both frontend and backend, verify the connection:
   - Open browser developer tools (F12)
   - Visit any page on the website
   - Check the Network tab
   - You should see requests being sent to `http://localhost:5000/api`

### Production Environment Configuration

When deploying to Vercel, configure environment variables:

1. Log in to Vercel Dashboard
2. Select your frontend project
3. Go to Settings → Environment Variables
4. Add environment variable:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://your-backend-domain.vercel.app/api`
5. Redeploy the project

---

## Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons, etc.
│   ├── components/     # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/        # React Context (state management)
│   │   └── AuthContext.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Admin.jsx
│   ├── services/       # API services
│   │   └── api.js
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main app component
│   ├── App.css         # App styles
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles
├── .env                # Environment variables (local)
├── .gitignore          # Git ignore file
├── index.html          # HTML template
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
├── vercel.json         # Vercel deployment config
└── tailwind.config.js  # Tailwind CSS configuration
```

---

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Starts the development server with Hot Module Replacement (HMR).

### `npm run build`

Builds the production version to the `dist` directory.

### `npm run preview`

Previews the production build.

### `npm run lint`

Runs ESLint to check code quality.

---

## Route Overview

The application uses React Router for client-side routing:

| Route Path | Component | Description | Access |
|-----------|-----------|-------------|--------|
| `/` | Home | Homepage | Public |
| `/projects` | Projects | Project showcase | Public |
| `/blog` | Blog | Blog list | Public |
| `/blog/:id` | BlogPost | Blog details | Public |
| `/contact` | Contact | Contact form | Public |
| `/login` | Login | Login page | Public |
| `/register` | Register | Registration | Public |
| `/admin` | Admin | Admin panel | Auth Required |

---

## Deploy to Vercel

### Automatic Deployment

The project is configured for automatic Vercel deployment:

1. Push code to GitHub
2. Vercel automatically detects updates and deploys
3. Access the generated URL after deployment

### Manual Deployment

Deploy using Vercel CLI:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy Project**
   ```bash
   vercel
   ```

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

---

## Vercel Configuration

The project includes a `vercel.json` configuration file to handle React Router client-side routing:

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

This configuration ensures all route requests are redirected to `index.html`, handled by React Router.

---

## Common Issues

### 1. API Request Failure (CORS Error)

**Issue**: Browser console shows CORS-related errors

**Solution**: Ensure backend has CORS properly configured to allow frontend domain access

### 2. Environment Variables Not Working

**Issue**: Changes to `.env` file have no effect

**Solution**:
- Vite environment variables must start with `VITE_`
- Restart development server after modifying `.env`
- Access using `import.meta.env.VITE_VARIABLE_NAME`

### 3. 404 Error (After Deployment)

**Issue**: 404 error when refreshing pages

**Solution**: Ensure `vercel.json` is configured correctly to redirect all routes to `index.html`

### 4. Token Expiration

**Issue**: Automatic logout after some time

**Solution**: JWT Token default validity is 30 days, re-login required after expiration

---

## Development Guide

### Adding New Pages

1. Create new component in `src/pages/`
2. Add route configuration in `src/App.jsx`
3. Add link to navigation bar (if needed)

### API Calls

```javascript
import api from '../services/api';

// GET request
const fetchData = async () => {
  try {
    const response = await api.get('/endpoint');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// POST request
const sendData = async (data) => {
  try {
    const response = await api.post('/endpoint', data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
```

### Using Auth Context

```javascript
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, login, logout } = useAuth();

  // Check if user is logged in
  if (user) {
    // User is logged in
  }
}
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## License

MIT License

---

## Related Links

- **Backend Repository**: [https://github.com/zzzzzzssss123/backend-1](https://github.com/zzzzzzssss123/backend-1)
- **Backend API Documentation**: See backend repository README.md
- **Live Demo**: [https://client-262gfkfiu-asdosadkkoas-projects.vercel.app](https://client-262gfkfiu-asdosadkkoas-projects.vercel.app)

---

## Contact

For questions or suggestions, contact via:
- GitHub Issues: [https://github.com/zzzzzzssss123/front-/issues](https://github.com/zzzzzzssss123/front-/issues)
- Use the website contact form

---

## Acknowledgements

Thanks to all open-source projects and contributors!
