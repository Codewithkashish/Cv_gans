import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Server, Cpu, ArrowRight } from 'lucide-react';

const TechnicalPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800">Technical Details</h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Understanding the technology behind our face anti-spoofing system
          </p>
          
          {/* GAN Architecture Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full text-purple-700 mr-4">
                <Cpu size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">GAN Architecture</h2>
                <p className="text-gray-700 mb-4">
                  Our face anti-spoofing system utilizes a sophisticated Generative Adversarial Network (GAN) architecture, consisting of two neural networks that work in opposition to each other:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-purple-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-purple-800">Generator Network</h3>
                    <p className="text-gray-700">
                      Creates synthetic samples of both real and fake faces, constantly improving to generate increasingly realistic spoof examples.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-blue-800">Discriminator Network</h3>
                    <p className="text-gray-700">
                      Learns to distinguish between real faces and the generator's spoofed examples, developing robust spoof detection capabilities.
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700">
                  Through this adversarial training process, the discriminator becomes increasingly skilled at detecting even subtle signs of spoofing attempts, while the generator helps by creating challenging examples.
                </p>
              </div>
            </div>
          </div>
          
          {/* Dataset Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full text-green-700 mr-4">
                <Database size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Kaggle Dataset</h2>
                <p className="text-gray-700 mb-4">
                  Our model is trained on a comprehensive dataset from Kaggle that contains thousands of real and fake facial images. The dataset includes:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                  <li>Real face captures in various lighting conditions and angles</li>
                  <li>Printed photo attacks (different quality levels and paper types)</li>
                  <li>Digital screen replay attacks (phones, tablets, monitors)</li>
                  <li>3D mask attacks with various materials and production qualities</li>
                  <li>Video replay attacks with different resolutions and frame rates</li>
                </ul>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Dataset Statistics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-700">10K+</p>
                      <p className="text-sm text-gray-600">Real Images</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-700">15K+</p>
                      <p className="text-sm text-gray-600">Spoof Images</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-700">1,000+</p>
                      <p className="text-sm text-gray-600">Subjects</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-700">25+</p>
                      <p className="text-sm text-gray-600">Spoof Types</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technical Features Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full text-blue-700 mr-4">
                <Code size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Technical Features</h2>
                <p className="text-gray-700 mb-4">
                  Our system employs multiple technical approaches to achieve high-accuracy spoofing detection:
                </p>
                
                <div className="space-y-6 mb-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Multi-spectral Analysis</h3>
                    <p className="text-gray-700">
                      Analyzes different color channels and spectral information to detect inconsistencies present in spoof attempts but not in real faces.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Texture Pattern Recognition</h3>
                    <p className="text-gray-700">
                      Detects micro-texture patterns unique to real skin versus printed or displayed images using advanced convolutional filters.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Temporal Analysis</h3>
                    <p className="text-gray-700">
                      Examines changes between video frames to detect natural facial movements versus the more rigid or repetitive patterns in replayed videos.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Depth Estimation</h3>
                    <p className="text-gray-700">
                      Uses neural networks to estimate 3D facial structure even from a single camera, helping distinguish flat images from real faces.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Performance Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">False Acceptance Rate (FAR)</p>
                      <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-600 rounded-full" style={{ width: '3%' }}></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Only 3% of spoof attempts incorrectly accepted</p>
                    </div>
                    <div>
                      <p className="font-medium">False Rejection Rate (FRR)</p>
                      <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '5%' }}></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Only 5% of real faces incorrectly rejected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Implementation Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full text-red-700 mr-4">
                <Server size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Implementation</h2>
                <p className="text-gray-700 mb-4">
                  Our face anti-spoofing system is designed for efficient implementation across various platforms:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg flex">
                    <div className="w-1/3 font-medium">Model Size</div>
                    <div className="w-2/3">Optimized to 25MB for edge deployment</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg flex">
                    <div className="w-1/3 font-medium">Inference Time</div>
                    <div className="w-2/3">~200ms on mid-range mobile devices</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg flex">
                    <div className="w-1/3 font-medium">Frameworks</div>
                    <div className="w-2/3">TensorFlow, PyTorch, TFLite for mobile</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg flex">
                    <div className="w-1/3 font-medium">API Integration</div>
                    <div className="w-2/3">REST API and WebSocket options for real-time analysis</div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-5 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-800">Demo Limitations</h3>
                  <p className="text-gray-700">
                    Please note that the live demo on this site uses a simulated version of our technology for educational purposes. The production version includes:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                    <li>Full model deployment with GPU acceleration</li>
                    <li>Multi-frame temporal analysis</li>
                    <li>Challenge-response liveness verification</li>
                    <li>Advanced 3D depth estimation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Experience the Technology</h2>
            <p className="text-gray-700 mb-6">
              Try our interactive demo to see a simplified version of our face anti-spoofing system in action.
            </p>
            <Link 
              to="/demo" 
              className="bg-blue-800 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-colors inline-flex items-center"
            >
              Launch Demo
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalPage;