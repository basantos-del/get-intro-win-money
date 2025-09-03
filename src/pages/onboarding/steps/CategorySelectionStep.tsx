import React, { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const CATEGORIES = [
  { name: 'Tech Professional', icon: '💻', description: 'Software, Engineering, IT' },
  { name: 'Creative', icon: '🎨', description: 'Design, Marketing, Content' },
  { name: 'Business Leader', icon: '💼', description: 'Management, Strategy, Operations' },
  { name: 'Sales Expert', icon: '📈', description: 'Sales, Business Development' },
  { name: 'Finance Pro', icon: '💰', description: 'Finance, Accounting, Investment' },
  { name: 'Healthcare Worker', icon: '🏥', description: 'Medical, Healthcare, Wellness' },
  { name: 'Educator', icon: '📚', description: 'Teaching, Training, Academia' },
  { name: 'Consultant', icon: '🎯', description: 'Strategy, Advisory, Freelance' },
  { name: 'Entrepreneur', icon: '🚀', description: 'Startups, Innovation, Ventures' },
  { name: 'Student', icon: '🎓', description: 'Learning, Internships, Entry-level' },
  { name: 'Other Professional', icon: '👤', description: 'Other professional roles' },
  { name: 'Personal Network', icon: '👥', description: 'Friends, Family, Personal connections' },
];

export const CategorySelectionStep = () => {
  const { user, updateUser, setCurrentStep, currentStep } = useApp();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(user?.selectedCategories || []);

  const toggleCategory = (categoryName: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleContinue = async () => {
    try {
      await updateUser({ selectedCategories });
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error('Error updating categories:', error);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Tell us who you are</h2>
        <p className="text-muted-foreground">
          Select the categories that best describe you and your network
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          {CATEGORIES.map((category) => (
            <Card
              key={category.name}
              className={`p-4 cursor-pointer transition-all border-2 ${
                selectedCategories.includes(category.name)
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => toggleCategory(category.name)}
            >
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{category.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </div>
                <Checkbox
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => toggleCategory(category.name)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </Card>
          ))}
        </div>

        {selectedCategories.length > 0 && (
          <div className="text-center text-sm text-muted-foreground">
            {selectedCategories.length} categor{selectedCategories.length !== 1 ? 'ies' : 'y'} selected
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-4">
          <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
            Back
          </Button>
          <Button 
            onClick={handleContinue} 
            className="flex-1"
            disabled={selectedCategories.length === 0}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};