import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> by Goutham Reddy Chellapuram
            </p>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Goutham Reddy Chellapuram. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;