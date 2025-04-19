import React from 'react';
import { Shield, Github, Info } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-6 w-6 mr-2 text-blue-400" />
            <span className="text-lg font-semibold">FaceGuard AI</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <a href="#" className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
              <Github size={16} className="mr-2" />
              GitHub
            </a>
            <a href="#" className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
              <Info size={16} className="mr-2" />
              Kaggle Dataset
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} FaceGuard AI. All rights reserved.</p>
          <p className="mt-2">A demonstration of face anti-spoofing using computer vision and GAN architecture.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;