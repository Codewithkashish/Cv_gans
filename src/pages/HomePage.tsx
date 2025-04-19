import React from 'react';
import { Shield, Camera, Code, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Advanced Face Anti-Spoofing<br />
                <span className="text-blue-200">Powered by AI</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Detect and prevent facial recognition fraud with our cutting-edge GAN-based anti-spoofing technology.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/demo" 
                  className="bg-white text-blue-800 hover:bg-blue-50 transition-colors py-3 px-6 rounded-lg font-semibold flex items-center justify-center"
                >
                  Try Live Demo
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link 
                  to="/technical" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors py-3 px-6 rounded-lg font-semibold flex items-center justify-center"
                >
                  Learn How It Works
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
                alt="Facial Recognition Technology" 
                className="rounded-lg shadow-xl max-w-full h-auto"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:translate-y-[-5px]">
              <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Camera size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Real-time Detection</h3>
              <p className="text-gray-600">Instantly analyze live video to detect spoofing attempts as they happen.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:translate-y-[-5px]">
              <div className="bg-green-100 text-green-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">GAN Architecture</h3>
              <p className="text-gray-600">Utilizes advanced Generative Adversarial Networks for superior detection accuracy.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:translate-y-[-5px]">
              <div className="bg-purple-100 text-purple-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">CNN Integration</h3>
              <p className="text-gray-600">Combines Convolutional Neural Networks with GANs for enhanced performance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:translate-y-[-5px]">
              <div className="bg-red-100 text-red-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Kaggle Dataset</h3>
              <p className="text-gray-600">Trained on comprehensive dataset with diverse spoofing methods and face types.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Experience Our Anti-Spoofing Technology</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Try our live demo to see how our system can detect various spoofing attempts in real-time.
          </p>
          <Link 
            to="/demo" 
            className="bg-blue-800 text-white hover:bg-blue-700 transition-colors py-3 px-8 rounded-lg font-semibold inline-flex items-center"
          >
            Launch Demo
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;