import React, { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const BRANDS = [
  { name: 'Nike', logo: '🏃‍♂️', color: 'bg-gray-900' },
  { name: 'LinkedIn', logo: '💼', color: 'bg-blue-600' },
  { name: 'WhatsApp', logo: '💬', color: 'bg-green-500' },
  { name: 'Apple', logo: '🍎', color: 'bg-gray-800' },
  { name: 'Google', logo: '🔍', color: 'bg-blue-500' },
  { name: 'Microsoft', logo: '🪟', color: 'bg-blue-700' },
  { name: 'Amazon', logo: '📦', color: 'bg-orange-500' },
  { name: 'Meta', logo: '👥', color: 'bg-blue-600' },
  { name: 'Tesla', logo: '⚡', color: 'bg-red-600' },
  { name: 'Netflix', logo: '🎬', color: 'bg-red-600' },
  { name: 'Spotify', logo: '🎵', color: 'bg-green-500' },
  { name: 'Uber', logo: '🚗', color: 'bg-black' },
];

export const BrandSelectionStep = () => {
  const { user, updateUser, setCurrentStep, currentStep } = useApp();
  const [selectedBrands, setSelectedBrands] = useState<string[]>(user?.selectedBrands || []);

  const toggleBrand = (brandName: string) => {
    setSelectedBrands(prev => 
      prev.includes(brandName)
        ? prev.filter(b => b !== brandName)
        : [...prev, brandName]
    );
  };

  const handleContinue = async () => {
    try {
      await updateUser({ selectedBrands });
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error('Error updating brands:', error);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Select brands you're interested in</h2>
        <p className="text-muted-foreground">
          This helps us show you relevant opportunities from companies you care about
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {BRANDS.map((brand) => (
            <Card
              key={brand.name}
              className={`p-4 cursor-pointer transition-all border-2 ${
                selectedBrands.includes(brand.name)
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => toggleBrand(brand.name)}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${brand.color}`}>
                  {brand.logo}
                </div>
                <span className="font-medium text-sm">{brand.name}</span>
                <Checkbox
                  checked={selectedBrands.includes(brand.name)}
                  onChange={() => toggleBrand(brand.name)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </Card>
          ))}
        </div>

        {selectedBrands.length > 0 && (
          <div className="text-center text-sm text-muted-foreground">
            {selectedBrands.length} brand{selectedBrands.length !== 1 ? 's' : ''} selected
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
            disabled={selectedBrands.length === 0}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};