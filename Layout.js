
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const navigationItems = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "Services", path: createPageUrl("Services") },
    { name: "About", path: createPageUrl("About") },
    { name: "Portfolio", path: createPageUrl("Portfolio") },
    { name: "Contact", path: createPageUrl("Contact") },
    { name: "FAQ", path: createPageUrl("FAQ") },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <style>{`
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

        html {
            scroll-behavior: smooth;
        }
        
        .gradient-text {
          color: var(--primary-purple);
        }
        
        .gradient-bg {
          background-color: var(--primary-purple);
          color: var(--text-light);
        }
        
        .gradient-bg:hover {
          background-color: var(--dark-purple);
        }

        ::selection {
            background-color: var(--primary-yellow);
            color: var(--text-dark);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to={createPageUrl("Home")} 
              className="flex items-center space-x-2"
              aria-label="Trev Solutions - Return to homepage"
            >
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm" aria-hidden="true">T</span>
              </div>
              <span className="text-xl font-bold text-[var(--text-dark)]">Trev</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)] focus:ring-offset-2 rounded-md px-2 py-1 ${
                    location.pathname === item.path
                      ? "gradient-text"
                      : "text-gray-600 hover:text-[var(--text-dark)]"
                  }`}
                  aria-current={location.pathname === item.path ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className="gradient-bg transition-opacity"
                aria-label="Start your project with Trev Solutions"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    aria-label="Open navigation menu"
                    aria-expanded={isOpen}
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80" role="dialog" aria-label="Mobile navigation menu">
                  <div className="flex flex-col space-y-6 mt-8">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)] focus:ring-offset-2 rounded-md px-2 py-1 ${
                          location.pathname === item.path
                            ? "gradient-text"
                            : "text-gray-600 hover:text-[var(--text-dark)]"
                        }`}
                        aria-current={location.pathname === item.path ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Button 
                      className="gradient-bg transition-opacity w-full"
                      aria-label="Start your project with Trev Solutions"
                    >
                      Start Your Project
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[var(--background-dark)] text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-xl font-bold text-white">Trev</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                High-performance web, design, and marketing — built with precision, delivered with purpose.
              </p>
              <div className="flex space-x-4">
                <a 
                  href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL || 'info@trevsol.com'}`} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {process.env.REACT_APP_CONTACT_EMAIL || 'info@trevsol.com'}
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Branding & Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to={createPageUrl("About")} className="hover:text-white transition-colors">About</Link></li>
                <li><Link to={createPageUrl("Portfolio")} className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link to={createPageUrl("Contact")} className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Trev Solutions. Built for perfection, driven by results.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
