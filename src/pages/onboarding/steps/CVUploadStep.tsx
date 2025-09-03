import React, { useState, useRef } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, FileText, X } from 'lucide-react';

export const CVUploadStep = () => {
  const { user, updateUser, setCurrentStep, currentStep } = useApp();
  const [selectedFile, setSelectedFile] = useState<File | null>(user?.cvFile || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (allowedTypes.includes(file.type)) {
        setSelectedFile(file);
      } else {
        alert('Please upload a PDF, DOC, or DOCX file.');
      }
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleContinue = async () => {
    try {
      if (selectedFile) {
        await updateUser({ cvFile: selectedFile });
      }
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error('Error updating CV:', error);
    }
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
        <h2 className="text-3xl font-bold mb-4">Upload your CV</h2>
        <p className="text-muted-foreground">
          Share your professional background to help with better matches
        </p>
      </div>

      <div className="space-y-6">
        {/* File Upload Area */}
        <Card 
          className="border-2 border-dashed p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          {selectedFile ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="font-medium">{selectedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {formatFileSize(selectedFile.size)}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
              >
                <X className="w-4 h-4 mr-2" />
                Remove
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="font-medium">Click to upload your CV</p>
                <p className="text-sm text-muted-foreground">
                  Supports PDF, DOC, and DOCX files
                </p>
              </div>
            </div>
          )}
        </Card>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFileUpload}
          className="hidden"
        />

        {/* Alternative Upload Button */}
        {!selectedFile && (
          <Button
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            className="w-full"
          >
            <Upload className="w-4 h-4 mr-2" />
            Browse Files
          </Button>
        )}

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
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};