import React from 'react';
import { Shield, AlertTriangle, Lock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800">About Face Anti-Spoofing</h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Understanding the technology that protects facial recognition systems
          </p>
          
          <div className="prose prose-lg max-w-none">
            <h2>What is Face Anti-Spoofing?</h2>
            <p>
              Face anti-spoofing is a technology designed to detect and prevent attempts to deceive facial recognition systems. As biometric authentication becomes more widespread, the need to protect these systems from various forms of presentation attacks has grown significantly.
            </p>
            
            <div className="my-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <div className="flex">
                <Shield className="text-blue-600 mr-3 flex-shrink-0" size={24} />
                <p className="text-blue-800 m-0">
                  <strong>Security Note:</strong> According to recent studies, up to 95% of traditional facial recognition systems are vulnerable to basic spoofing methods without anti-spoofing protection.
                </p>
              </div>
            </div>
            
            <h2>Common Spoofing Techniques</h2>
            <p>
              Attackers may attempt to defeat facial recognition systems using various methods:
            </p>
            
            <ul className="space-y-3">
              <li>
                <strong>Print Attacks:</strong> Using printed photographs of the authorized user
              </li>
              <li>
                <strong>Replay Attacks:</strong> Displaying a video or digital image on a screen
              </li>
              <li>
                <strong>Mask Attacks:</strong> Wearing 3D masks or models that resemble the authorized user
              </li>
              <li>
                <strong>Deepfake Attacks:</strong> Using sophisticated AI-generated facial animations
              </li>
            </ul>
            
            <div className="my-8 bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <div className="flex">
                <AlertTriangle className="text-red-600 mr-3 flex-shrink-0" size={24} />
                <p className="text-red-800 m-0">
                  <strong>Warning:</strong> The sophistication of spoofing attacks continues to evolve rapidly, making advanced detection methods increasingly necessary.
                </p>
              </div>
            </div>
            
            <h2>Our Approach to Anti-Spoofing</h2>
            <p>
              Our system combines multiple technologies to provide robust protection:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-700 mr-3">
                    <Lock size={20} />
                  </div>
                  GAN Technology
                </h3>
                <p className="text-gray-700">
                  We use Generative Adversarial Networks to analyze subtle differences between real faces and spoofing attempts, detecting features invisible to the human eye.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <div className="bg-green-100 p-2 rounded-full text-green-700 mr-3">
                    <Globe size={20} />
                  </div>
                  Depth Analysis
                </h3>
                <p className="text-gray-700">
                  Our system analyzes facial depth and structure to distinguish between flat images and three-dimensional faces, even with advanced masks.
                </p>
              </div>
            </div>
            
            <h2>Applications and Impact</h2>
            <p>
              Face anti-spoofing technology is vital in numerous sectors:
            </p>
            
            <ul className="space-y-3">
              <li>
                <strong>Financial Services:</strong> Securing mobile banking and payment authentication
              </li>
              <li>
                <strong>Access Control:</strong> Enhancing security for physical and digital entry points
              </li>
              <li>
                <strong>Government ID:</strong> Protecting verification processes for official identification
              </li>
              <li>
                <strong>Smartphones:</strong> Securing facial unlock features on mobile devices
              </li>
            </ul>
            
            <div className="mt-12 text-center">
              <h2>Experience Our Technology</h2>
              <p>
                Try our interactive demo to see how face anti-spoofing works in real-time and learn more about the technical details behind our approach.
              </p>
              <div className="flex justify-center space-x-6 mt-6">
                <Link 
                  to="/demo" 
                  className="bg-blue-800 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-colors"
                >
                  Try Live Demo
                </Link>
                <Link 
                  to="/technical" 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-8 rounded-lg font-medium transition-colors"
                >
                  Technical Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;