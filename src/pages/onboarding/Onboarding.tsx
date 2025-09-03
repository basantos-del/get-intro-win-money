import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Progress } from '@/components/ui/progress';
import { WelcomeStep } from './steps/WelcomeStep';
import { ProfileInfoStep } from './steps/ProfileInfoStep';
import { ProfilePhotoStep } from './steps/ProfilePhotoStep';
import { CVUploadStep } from './steps/CVUploadStep';
import { BrandSelectionStep } from './steps/BrandSelectionStep';
import { CategorySelectionStep } from './steps/CategorySelectionStep';
import { CompletionStep } from './steps/CompletionStep';

const TOTAL_STEPS = 7;

const Onboarding = () => {
  const { currentStep } = useApp();

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <WelcomeStep />;
      case 2:
        return <ProfileInfoStep />;
      case 3:
        return <ProfilePhotoStep />;
      case 4:
        return <CVUploadStep />;
      case 5:
        return <BrandSelectionStep />;
      case 6:
        return <CategorySelectionStep />;
      case 7:
        return <CompletionStep />;
      default:
        return <WelcomeStep />;
    }
  };

  const progressValue = (currentStep / TOTAL_STEPS) * 100;

  return (
    <div className="min-h-screen bg-background text-foreground app-theme">
      {/* Progress Bar */}
      <div className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Step {currentStep} of {TOTAL_STEPS}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progressValue)}%
            </span>
          </div>
          <Progress value={progressValue} className="h-2" />
        </div>
      </div>

      {/* Step Content */}
      <div className="container mx-auto px-4 py-8">
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default Onboarding;