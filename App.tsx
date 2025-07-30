import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import ErrorBoundary from './components/ErrorBoundary';

// Import all pages
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import FAQ from './Pages/FAQ';

// 404 Not Found component
const NotFound: React.FC = () => (
  <div className="min-h-screen bg-white flex items-center justify-center px-6">
    <div className="max-w-lg w-full text-center">
      <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-flex items-center px-6 py-3 bg-[var(--primary-purple)] text-white rounded-lg hover:bg-[var(--dark-purple)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)] focus:ring-offset-2"
      >
        Return Home
      </a>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            {/* Main routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* Legacy route redirects (if needed) */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            
            {/* 404 catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;