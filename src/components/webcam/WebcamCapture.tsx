import React, { useRef, useEffect, useState } from 'react';
import { Camera, AlertTriangle } from 'lucide-react';

interface WebcamCaptureProps {
  onFrame: (frame: ImageData | null) => void;
  isActive: boolean;
}

const WebcamCapture: React.FC<WebcamCaptureProps> = ({ onFrame, isActive }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [cameraActive, setCameraActive] = useState(false);

  useEffect(() => {
    let stream: MediaStream | null = null;
    
    const setupCamera = async () => {
      try {
        if (!isActive) {
          if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setCameraActive(false);
          }
          return;
        }
        
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: 'user'
          },
          audio: false
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setCameraActive(true);
          setError(null);
        }
      } catch (err) {
        setError('Camera access denied or not available');
        console.error('Error accessing webcam:', err);
      }
    };
    
    setupCamera();
    
    // Cleanup function
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isActive]);
  
  useEffect(() => {
    if (!isActive || !cameraActive) return;
    
    const captureFrame = () => {
      if (videoRef.current && canvasRef.current && cameraActive) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          const { videoWidth, videoHeight } = videoRef.current;
          
          if (videoWidth && videoHeight) {
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;
            
            ctx.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);
            const imageData = ctx.getImageData(0, 0, videoWidth, videoHeight);
            onFrame(imageData);
          }
        }
      }
    };
    
    const intervalId = setInterval(captureFrame, 100); // Capture 10 frames per second
    
    return () => {
      clearInterval(intervalId);
    };
  }, [onFrame, isActive, cameraActive]);
  
  return (
    <div className="relative">
      <div className={`relative overflow-hidden rounded-lg shadow-lg border-2 ${isActive ? 'border-blue-500' : 'border-gray-300'}`}>
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-center p-4">
            <AlertTriangle size={48} className="text-red-500 mb-4" />
            <p className="text-red-600 font-medium">{error}</p>
            <p className="text-gray-600 mt-2">Please ensure camera access is allowed in your browser settings.</p>
          </div>
        )}
        
        <video 
          ref={videoRef}
          className={`w-full h-auto ${!isActive ? 'opacity-70' : ''}`}
          autoPlay 
          playsInline 
          muted
        />
        
        {!isActive && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-center">
              <Camera size={48} className="mx-auto text-white mb-2" />
              <p className="text-white font-medium">Camera inactive</p>
            </div>
          </div>
        )}
      </div>
      
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default WebcamCapture;