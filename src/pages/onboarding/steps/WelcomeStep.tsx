import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, Building } from 'lucide-react';

export const WelcomeStep = () => {
  const { setCurrentStep, updateUser } = useApp();

  const handleAccountTypeSelection = (type: 'member' | 'business') => {
    updateUser({ accountType: type });
    setCurrentStep(2);
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Intro</h1>
        <p className="text-lg text-muted-foreground">
          Choose your account type to get started with our referral marketplace
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card 
          className="p-8 cursor-pointer hover:border-primary/50 transition-colors border-2"
          onClick={() => handleAccountTypeSelection('member')}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Join as Member</h3>
            <p className="text-muted-foreground">
              Connect with your network, refer friends for opportunities, and earn income from successful matches.
            </p>
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                handleAccountTypeSelection('member');
              }}
              className="w-full"
            >
              Continue as Member
            </Button>
          </div>
        </Card>

        <Card 
          className="p-8 cursor-pointer hover:border-primary/50 transition-colors border-2"
          onClick={() => handleAccountTypeSelection('business')}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Building className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Join as Business</h3>
            <p className="text-muted-foreground">
              Post opportunities, find the right talent through referrals, and grow your business with quality connections.
            </p>
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                handleAccountTypeSelection('business');
              }}
              variant="outline"
              className="w-full"
            >
              Continue as Business
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};