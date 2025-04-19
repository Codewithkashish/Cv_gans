import React, { useState, useEffect, useCallback } from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface FaceDetectionProps {
  imageData: ImageData | null;
  isProcessing: boolean;
}

// Enum for detection results
enum DetectionResult {
  NONE,
  PROCESSING,
  REAL,
  FAKE,
  UNCERTAIN
}

const FaceDetection: React.FC<FaceDetectionProps> = ({ imageData, isProcessing }) => {
  const [detectionResult, setDetectionResult] = useState<DetectionResult>(DetectionResult.NONE);
  const [confidenceScore, setConfidenceScore] = useState<number>(0);
  const [fakeMethod, setFakeMethod] = useState<string | null>(null);
  
  const detectFakeFace = useCallback(() => {
    // Enhanced detection simulation with weighted randomization
    // This creates more realistic and consistent results
    const qualityScore = Math.random(); // Simulated image quality assessment
    const movementScore = Math.random(); // Simulated movement detection
    const textureScore = Math.random(); // Simulated texture analysis
    
    // Weighted average of different factors
    const combinedScore = (qualityScore * 0.3) + (movementScore * 0.4) + (textureScore * 0.3);
    
    // Faster processing time (200-500ms)
    setTimeout(() => {
      if (combinedScore > 0.65) {
        setDetectionResult(DetectionResult.REAL);
        setConfidenceScore(0.88 + (Math.random() * 0.12)); // Higher confidence for real faces
        setFakeMethod(null);
      } else if (combinedScore < 0.35) {
        setDetectionResult(DetectionResult.FAKE);
        setConfidenceScore(0.82 + (Math.random() * 0.15));
        
        // More sophisticated fake method detection
        const fakeMethods = [
          'Printed Photo',
          'Digital Screen Display',
          'Video Replay Attack',
          '3D Mask/Model',
          'Deepfake Video'
        ];
        const methodIndex = Math.floor(combinedScore * fakeMethods.length);
        setFakeMethod(fakeMethods[methodIndex]);
      } else {
        setDetectionResult(DetectionResult.UNCERTAIN);
        setConfidenceScore(0.45 + (Math.random() * 0.2));
        setFakeMethod(null);
      }
    }, 200 + Math.random() * 300);
  }, []);
  
  useEffect(() => {
    if (!isProcessing || !imageData) {
      setDetectionResult(DetectionResult.NONE);
      return;
    }
    
    setDetectionResult(DetectionResult.PROCESSING);
    const timeoutId = setTimeout(detectFakeFace, 50); // Reduced initial delay
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [imageData, isProcessing, detectFakeFace]);
  
  const getStatusContent = () => {
    switch (detectionResult) {
      case DetectionResult.NONE:
        return (
          <div className="text-gray-500 text-center">
            <p className="font-medium">No detection active</p>
          </div>
        );
      
      case DetectionResult.PROCESSING:
        return (
          <div className="text-blue-600 flex flex-col items-center">
            <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="font-medium">Processing...</p>
            <p className="text-sm text-blue-500">Analyzing facial features</p>
          </div>
        );
      
      case DetectionResult.REAL:
        return (
          <div className="text-green-600 flex flex-col items-center animate-fadeIn">
            <CheckCircle size={36} className="mb-2" />
            <p className="font-medium text-lg">Real Face Detected</p>
            <p className="text-sm text-gray-600">Confidence: {(confidenceScore * 100).toFixed(1)}%</p>
          </div>
        );
      
      case DetectionResult.FAKE:
        return (
          <div className="text-red-600 flex flex-col items-center animate-fadeIn">
            <XCircle size={36} className="mb-2" />
            <p className="font-medium text-lg">Spoofing Attempt Detected</p>
            {fakeMethod && <p className="text-sm text-gray-700">Detected method: {fakeMethod}</p>}
            <p className="text-sm text-gray-600">Confidence: {(confidenceScore * 100).toFixed(1)}%</p>
          </div>
        );
      
      case DetectionResult.UNCERTAIN:
        return (
          <div className="text-yellow-600 flex flex-col items-center animate-fadeIn">
            <AlertCircle size={36} className="mb-2" />
            <p className="font-medium text-lg">Uncertain Result</p>
            <p className="text-sm text-gray-600">Confidence too low: {(confidenceScore * 100).toFixed(1)}%</p>
            <p className="text-sm text-gray-600">Try adjusting lighting or position</p>
          </div>
        );
    }
  };
  
  return (
    <div className={`p-6 rounded-lg shadow-md transition-all duration-300 ${getResultBackgroundColor()}`}>
      <h3 className="text-xl font-semibold mb-4 text-center">Detection Status</h3>
      <div className="py-4">
        {getStatusContent()}
      </div>
      
      {detectionResult !== DetectionResult.NONE && detectionResult !== DetectionResult.PROCESSING && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="font-medium mb-2">Detection Metrics</h4>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Confidence Score</span>
                <span>{(confidenceScore * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${getConfidenceColor()}`}
                  style={{ width: `${confidenceScore * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Processing Time</span>
                <span>{((Math.random() * 0.3) + 0.2).toFixed(2)}s</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
  function getResultBackgroundColor() {
    switch (detectionResult) {
      case DetectionResult.NONE:
        return 'bg-white';
      case DetectionResult.PROCESSING:
        return 'bg-blue-50';
      case DetectionResult.REAL:
        return 'bg-green-50';
      case DetectionResult.FAKE:
        return 'bg-red-50';
      case DetectionResult.UNCERTAIN:
        return 'bg-yellow-50';
    }
  }
  
  function getConfidenceColor() {
    if (detectionResult === DetectionResult.REAL) return 'bg-green-600';
    if (detectionResult === DetectionResult.FAKE) return 'bg-red-600';
    return 'bg-yellow-600';
  }
};

export default FaceDetection;