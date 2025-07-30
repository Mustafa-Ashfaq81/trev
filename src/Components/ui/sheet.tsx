import React, { createContext, useContext, useEffect } from 'react';
import { X } from 'lucide-react';

interface SheetContextType {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SheetContext = createContext<SheetContextType | undefined>(undefined);

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({ open, onOpenChange, children }) => {
  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
};

interface SheetTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

export const SheetTrigger: React.FC<SheetTriggerProps> = ({ children }) => {
  const context = useContext(SheetContext);
  if (!context) throw new Error('SheetTrigger must be used within Sheet');
  
  return (
    <div onClick={() => context.onOpenChange(true)}>
      {children}
    </div>
  );
};

interface SheetContentProps {
  side?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
  children: React.ReactNode;
}

export const SheetContent: React.FC<SheetContentProps> = ({ 
  side = 'right', 
  className = '', 
  children 
}) => {
  const context = useContext(SheetContext);
  if (!context) throw new Error('SheetContent must be used within Sheet');
  
  useEffect(() => {
    if (context.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [context.open]);
  
  if (!context.open) return null;
  
  const sideClasses = {
    right: 'right-0 top-0 h-full',
    left: 'left-0 top-0 h-full',
    top: 'top-0 left-0 w-full',
    bottom: 'bottom-0 left-0 w-full'
  };
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => context.onOpenChange(false)}
      />
      
      {/* Sheet */}
      <div className={`fixed ${sideClasses[side]} bg-white shadow-lg z-50 ${className}`}>
        <div className="p-6">
          <button
            onClick={() => context.onOpenChange(false)}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};