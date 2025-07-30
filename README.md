# Trev Solutions Website

High-performance web, design, and marketing — built with precision, delivered with purpose.

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your actual values
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
trev/
├── Components/          # Reusable UI components
│   ├── home/           # Home page specific components
│   ├── ui/             # Base UI components (Button, Input, etc.)
│   ├── ErrorBoundary.tsx
│   └── ImageWithFallback.tsx
├── Pages/              # Main page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Contact.tsx
│   └── FAQ.tsx
├── utils/              # Utility functions
│   ├── index.js        # General utilities
│   └── seo.js          # SEO utilities
├── Layout.js           # Main layout wrapper
├── App.tsx             # Main app component with routing
└── README.md
```

## ⚙️ Environment Variables

Copy `env.example` to `.env` and configure:

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_CONTACT_EMAIL` | Primary contact email | info@trevsol.com |
| `REACT_APP_SITE_URL` | Site URL for SEO | https://trevsol.com |
| `REACT_APP_INSTAGRAM_HANDLE` | Instagram handle | @trevsol_ |
| `REACT_APP_LINKEDIN_COMPANY` | LinkedIn company name | Trev Solutions |

## 🛠️ Features

### ✅ Production Ready
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Accessibility** - WCAG compliant with ARIA labels
- **Performance** - Optimized images and code splitting
- **Error Handling** - Graceful error boundaries
- **Form Validation** - Real-time validation with error states

### ✅ Technical Stack
- **React 18** with TypeScript
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** for icons

### ✅ Contact Forms
- Form validation with real-time error feedback
- Loading states and success/error messages
- Mailto fallback for immediate functionality
- Environment-based email configuration

### ✅ SEO & Meta Tags
- Dynamic meta tags per page
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Structured data ready

## 🎨 Design System

The project uses a consistent design system with CSS custom properties:

```css
:root {
  --primary-purple: #803eef;
  --primary-yellow: #f7d047;
  --dark-purple: #6a2fcc;
  --light-purple: #f3e8ff;
  --light-yellow: #fef9e7;
  --text-dark: #111827;
  --text-light: #f9fafb;
  --background-dark: #111827;
}
```

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run test` | Run tests |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run type-check` | Run TypeScript checks |

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting provider

3. **Configure environment variables** on your hosting platform

4. **Set up redirects** for client-side routing (if needed)

## 📞 Support

For questions or support, contact us at:
- **Email**: info@trevsol.com
- **Instagram**: @trevsol_
- **LinkedIn**: Trev Solutions

---

**Built with precision, delivered with purpose** ✨