import React, { useState, useRef } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Camera, Upload, User } from 'lucide-react';

export const ProfilePhotoStep = () => {
  const { user, updateUser, setCurrentStep, currentStep } = useApp();
  const [previewUrl, setPreviewUrl] = useState<string>(user?.profilePhoto || '');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isUsingCamera, setIsUsingCamera] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreviewUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' }
      });
      setStream(mediaStream);
      setIsUsingCamera(true);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      if (context) {
        context.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg', 0.8);
        setPreviewUrl(imageData);
        stopCamera();
      }
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsUsingCamera(false);
  };

  const handleContinue = () => {
    updateUser({ profilePhoto: previewUrl });
    setCurrentStep(currentStep + 1);
  };

  const handleSkip = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Add your profile photo</h2>
        <p className="text-muted-foreground">
          Help others recognize you by adding a profile picture
        </p>
      </div>

      <div className="space-y-6">
        {/* Photo Preview */}
        <div className="flex justify-center">
          <Avatar className="w-32 h-32">
            {previewUrl ? (
              <AvatarImage src={previewUrl} alt="Profile preview" />
            ) : (
              <AvatarFallback>
                <User className="w-16 h-16" />
              </AvatarFallback>
            )}
          </Avatar>
        </div>

        {/* Camera View */}
        {isUsingCamera && (
          <Card className="p-4">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full rounded-lg"
            />
            <div className="flex gap-4 mt-4">
              <Button onClick={takePhoto} className="flex-1">
                <Camera className="w-4 h-4 mr-2" />
                Take Photo
              </Button>
              <Button variant="outline" onClick={stopCamera} className="flex-1">
                Cancel
              </Button>
            </div>
          </Card>
        )}

        {/* Upload Options */}
        {!isUsingCamera && (
          <div className="space-y-4">
            <Button
              onClick={startCamera}
              variant="outline"
              className="w-full"
            >
              <Camera className="w-4 h-4 mr-2" />
              Take Photo with Camera
            </Button>

            <Button
              onClick={() => fileInputRef.current?.click()}
              variant="outline"
              className="w-full"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload from Device
            </Button>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />

        <canvas ref={canvasRef} className="hidden" />

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-4">
          <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
            Back
          </Button>
          <Button type="button" variant="ghost" onClick={handleSkip} className="flex-1">
            Skip
          </Button>
          <Button 
            onClick={handleContinue} 
            className="flex-1"
            disabled={!previewUrl}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};