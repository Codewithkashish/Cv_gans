import React, { useState, useEffect } from 'react';
import WebcamCapture from '../components/webcam/WebcamCapture';
import FaceDetection from '../components/detection/FaceDetection';
import { PlayCircle, PauseCircle, RefreshCw, HelpCircle, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentFrame, setCurrentFrame] = useState<ImageData | null>(null);
  const [instructions, setInstructions] = useState(true);
  
  // Auto-hide instructions after 10 seconds
  useEffect(() => {
    if (instructions) {
      const timer = setTimeout(() => {
        setInstructions(false);
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [instructions]);
  
  const handleFrameCapture = (frame: ImageData | null) => {
    setCurrentFrame(frame);
  };
  
  const toggleActive = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setInstructions(false);
    }
  };
  
  const resetDemo = () => {
    setIsActive(false);
    setCurrentFrame(null);
    setInstructions(true);
  };
  
  return (
    <div className="pt-20 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">Face Anti-Spoofing Demo</h1>
          <p className="text-center text-gray-600 mb-8">
            Test our real-time face anti-spoofing technology using your webcam
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="relative">
                <WebcamCapture onFrame={handleFrameCapture} isActive={isActive} />
                
                {instructions && (
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-lg">
                    <div className="text-white p-6 max-w-md text-center">
                      <HelpCircle size={36} className="mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">How to Use</h3>
                      <p className="mb-4">
                        Press "Start Detection" to begin the live demo. Position your face in the camera and the system will analyze whether it's a real face or a spoofing attempt.
                      </p>
                      <button 
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
                        onClick={() => setInstructions(false)}
                      >
                        Got it
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex justify-center space-x-4">
                <button
                  onClick={toggleActive}
                  className={`flex items-center py-2 px-6 rounded-lg font-medium transition-colors ${
                    isActive 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isActive ? (
                    <>
                      <PauseCircle size={20} className="mr-2" />
                      Stop Detection
                    </>
                  ) : (
                    <>
                      <PlayCircle size={20} className="mr-2" />
                      Start Detection
                    </>
                  )}
                </button>
                
                <button
                  onClick={resetDemo}
                  className="flex items-center py-2 px-6 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors text-gray-700"
                >
                  <RefreshCw size={20} className="mr-2" />
                  Reset
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              <FaceDetection 
                imageData={currentFrame}
                isProcessing={isActive}
              />
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Detection Guide</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full text-green-600 mr-3">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Real Face</h4>
                      <p className="text-sm text-gray-600">System detects natural facial features, movements, and texture patterns consistent with a live person.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full text-red-600 mr-3">
                      <XCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Spoofing Attempt</h4>
                      <p className="text-sm text-gray-600">May detect printed photos, digital screens, video replays, or 3D masks based on abnormal patterns.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-2 rounded-full text-yellow-600 mr-3">
                      <AlertCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Uncertain</h4>
                      <p className="text-sm text-gray-600">Low confidence detection. Try adjusting lighting, removing obstacles, or repositioning your face.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">How This Demo Works</h2>
            <p className="text-gray-700 mb-4">
              This interactive demo uses a simulated GAN-based (Generative Adversarial Network) model to detect face spoofing attempts. In a production environment, our system would use a fully trained deep learning model for accurate detection.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">1. Image Capture</h3>
                <p className="text-sm text-gray-600">
                  The webcam captures video frames that are processed in real-time for analysis.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">2. Feature Extraction</h3>
                <p className="text-sm text-gray-600">
                  The system extracts key facial features and texture patterns for authentication.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">3. GAN Analysis</h3>
                <p className="text-sm text-gray-600">
                  Our GAN model analyzes the extracted features to classify the face as real or fake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;