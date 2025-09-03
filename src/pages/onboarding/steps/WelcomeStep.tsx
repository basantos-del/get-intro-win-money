import React, { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const WelcomeStep = () => {
  const { setCurrentStep, signUp, setUser } = useApp();
  const { toast } = useToast();
  const [showSignUp, setShowSignUp] = useState(false);
  const [selectedType, setSelectedType] = useState<'member' | 'business'>('member');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAccountTypeSelection = (type: 'member' | 'business') => {
    setSelectedType(type);
    setShowSignUp(true);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);
    try {
      const { error } = await signUp(email, password, { 
        accountType: selectedType,
        firstName: '',
        lastName: '',
        selectedBrands: [],
        selectedCategories: [],
        onboardingCompleted: false
      });

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        // Create a temporary user object to proceed with onboarding
        setUser({
          id: 'temp-' + Date.now(),
          email,
          firstName: '',
          lastName: '',
          selectedBrands: [],
          selectedCategories: [],
          accountType: selectedType,
          onboardingCompleted: false
        });
        
        toast({
          title: "Success",
          description: "Account created! Complete your profile to get started.",
        });
        setCurrentStep(2);
      }
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (showSignUp) {
    return (
      <div className="max-w-md mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Create Your Account</h2>
          <p className="text-muted-foreground">
            Join as a {selectedType} and start your journey with Intro
          </p>
        </div>

        <Card className="p-6">
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                minLength={6}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowSignUp(false)}
                className="flex-1"
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={loading || !email || !password}
                className="flex-1"
              >
                {loading ? 'Creating...' : 'Create Account'}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    );
  }

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