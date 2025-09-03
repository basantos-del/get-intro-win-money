import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { CheckCircle, User } from 'lucide-react';

export const CompletionStep = () => {
  const { user, session, updateUser } = useApp();
  const navigate = useNavigate();

  const handleGetStarted = async () => {
    console.log('CompletionStep - handleGetStarted called');
    console.log('Current user:', user);
    console.log('Current session:', session);
    
    try {
      await updateUser({ onboardingCompleted: true });
      console.log('User updated, navigating to dashboard...');
      // Small delay to ensure state is updated
      setTimeout(() => {
        navigate('/dashboard');
      }, 100);
    } catch (error) {
      console.error('Error completing onboarding:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <div className="mb-8">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-4">Welcome to Intro!</h2>
        <p className="text-muted-foreground">
          Your profile is all set up. You're ready to start exploring opportunities and connecting with your network.
        </p>
      </div>

      {/* Profile Summary */}
      <Card className="p-6 mb-8">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-16 h-16">
            {user?.profilePhoto ? (
              <AvatarImage src={user.profilePhoto} alt="Profile" />
            ) : (
              <AvatarFallback>
                <User className="w-8 h-8" />
              </AvatarFallback>
            )}
          </Avatar>
          
          <div>
            <h3 className="font-semibold">{user?.firstName} {user?.lastName}</h3>
            <p className="text-sm text-muted-foreground capitalize">{user?.accountType}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full text-xs text-muted-foreground">
            <div className="text-center">
              <div className="font-medium text-foreground">{user?.selectedBrands?.length || 0}</div>
              <div>Brands</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-foreground">{user?.selectedCategories?.length || 0}</div>
              <div>Categories</div>
            </div>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <Button onClick={handleGetStarted} className="w-full" size="lg">
          Get Started
        </Button>
        
        <p className="text-xs text-muted-foreground">
          You can always update your profile and preferences later in your settings.
        </p>
      </div>
    </div>
  );
};