# Trev Solutions Website

High-performance web, design, and marketing — built with precision, delivered with purpose.

## 🌐 Live Demo

**Production Site**: [https://trevsol.com](https://trevsol.com)

**Status**: ✅ Live and Deployed via cPanel Git Auto-Deployment

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mustafa-Ashfaq81/trev.git
   cd trev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Start development server**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
trev/
├── src/
│   ├── Components/          # Reusable UI components
│   │   ├── home/           # Home page specific components
│   │   ├── ui/             # Base UI components (Button, Input, Sheet, etc.)
│   │   ├── ErrorBoundary.tsx
│   │   └── ImageWithFallback.tsx
│   ├── Pages/              # Main page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Contact.tsx
│   │   └── FAQ.tsx
│   ├── utils/              # Utility functions
│   │   ├── index.js        # General utilities
│   │   └── seo.js          # SEO utilities
│   ├── Layout.js           # Main layout wrapper with navigation
│   └── App.tsx             # Main app component with routing
├── public/                 # Static assets
├── build/                  # Production build files (committed for cPanel deployment)
├── .cpanel.yml            # cPanel Git deployment configuration
└── README.md
```

## ⚙️ Environment Variables

Copy `.env.example` to `.env` and configure:

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_CONTACT_EMAIL` | Primary contact email | info@trevsol.com |
| `REACT_APP_SITE_URL` | Site URL for SEO | https://trevsol.com |
| `REACT_APP_INSTAGRAM_HANDLE` | Instagram handle | @trevsol_ |
| `REACT_APP_LINKEDIN_COMPANY` | LinkedIn company name | Trev Solutions |

## 🛠️ Features

### ✅ Production Ready
- **Responsive Design** - Mobile-first approach with optimized navigation
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Accessibility** - WCAG compliant with ARIA labels
- **Performance** - Optimized images and code splitting
- **Error Handling** - Graceful error boundaries
- **Form Validation** - Real-time validation with error states

### ✅ Mobile Navigation
- **Full-screen mobile menu** - Immersive mobile experience
- **Smooth animations** - Left-to-right slide transitions
- **Touch-friendly** - Optimized for mobile interactions
- **Backdrop masking** - Complete content overlay
- **Accessible** - Proper ARIA labels and keyboard navigation

### ✅ Technical Stack
- **React 18** with TypeScript
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** for icons
- **Custom Sheet Component** for mobile navigation

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
- Mobile browsers (iOS Safari, Chrome Mobile)

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

### cPanel Git Auto-Deployment

This project is configured for **automatic deployment** via cPanel Git Version Control:

1. **Repository Setup**: Connected to GitHub repository
2. **Auto-Deployment**: Push to `production` branch triggers automatic deployment
3. **Build Files**: Production build files are committed to repository
4. **Fast Deployment**: ~30 seconds deployment time

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting provider

3. **Configure environment variables** on your hosting platform

### Deployment Configuration

- **`.cpanel.yml`**: cPanel deployment configuration
- **Production Branch**: Contains optimized build files
- **Auto-Deployment**: Enabled for seamless updates

## 🔄 Git Workflow

### Branches
- **`main`**: Development branch with source code
- **`production`**: Deployment branch with build files

### Deployment Process
1. Develop on `main` branch
2. Build project: `npm run build`
3. Commit build files to `production` branch
4. Push triggers automatic cPanel deployment

## 📞 Support

For questions or support, contact us at:
- **Email**: info@trevsol.com
- **Instagram**: @trevsol_
- **LinkedIn**: [Trev Solutions](https://www.linkedin.com/company/trev-solution/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with precision, delivered with purpose** ✨

*High-performance web, design, and marketing solutions from Switzerland*