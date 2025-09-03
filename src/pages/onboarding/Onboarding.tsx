import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react';

const TOTAL_STEPS = 5;

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const progressPercentage = (currentStep / TOTAL_STEPS) * 100;

  return (
    <div className="min-h-screen bg-background px-4 py-6">
      {/* Header with Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {currentStep > 1 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          )}
          <span className="text-sm text-muted-foreground ml-auto">
            {currentStep} of {TOTAL_STEPS}
          </span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      {/* Content Area */}
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Welcome to intro
          </h1>
          <p className="text-muted-foreground">
            Let's set up your profile to get started
          </p>
        </div>

        {/* Step Content Placeholder */}
        <div className="intro-card p-6 mb-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-4">Step {currentStep}</h2>
            <p className="text-muted-foreground mb-6">
              This is step {currentStep} of the onboarding process. 
              Content will be implemented in Phase 2.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </Button>
          <Button
            className="flex-1 intro-button-primary"
            onClick={handleNext}
          >
            {currentStep === TOTAL_STEPS ? 'Complete' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}