import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User as SupabaseUser, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  profilePhoto?: string;
  cvFile?: File;
  selectedBrands: string[];
  selectedCategories: string[];
  accountType: 'member' | 'business';
  onboardingCompleted: boolean;
}

interface AppContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  updateUser: (updates: Partial<User>) => Promise<void>;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isAuthenticated: boolean;
  signUp: (email: string, password: string, userData: Partial<User>) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  logout: () => Promise<void>;
  enableTestMode: () => void;
  disableTestMode: () => void;
  isTestMode: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  // Test mode detection - check URL params or localStorage
  const isTestModeActive = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('test') === 'true' || localStorage.getItem('intro-test-mode') === 'true';
  };

  // Create test user and session
  const createTestSession = () => {
    const testUser: User = {
      id: '00000000-0000-0000-0000-000000000001',
      email: 'test@intro.dev',
      firstName: 'Test',
      lastName: 'User',
      dateOfBirth: new Date('1990-01-01'),
      selectedBrands: ['Nike', 'Apple', 'Google'],
      selectedCategories: ['Technology', 'Sports', 'Business'],
      accountType: 'member',
      onboardingCompleted: true
    };

    const testSession = {
      user: {
        id: '00000000-0000-0000-0000-000000000001',
        email: 'test@intro.dev'
      },
      access_token: 'test-token',
      refresh_token: 'test-refresh',
      expires_in: 3600,
      expires_at: Date.now() / 1000 + 3600,
      token_type: 'bearer'
    } as Session;

    return { testUser, testSession };
  };

  // Enable test mode
  const enableTestMode = () => {
    localStorage.setItem('intro-test-mode', 'true');
    const { testUser, testSession } = createTestSession();
    setUser(testUser);
    setSession(testSession);
  };

  // Disable test mode
  const disableTestMode = () => {
    localStorage.removeItem('intro-test-mode');
    setUser(null);
    setSession(null);
  };

  // Convert database profile to user format
  const profileToUser = (profile: any): User => ({
    id: profile.user_id,
    email: profile.email,
    firstName: profile.first_name || '',
    lastName: profile.last_name || '',
    dateOfBirth: profile.date_of_birth ? new Date(profile.date_of_birth) : undefined,
    profilePhoto: profile.profile_photo_url,
    selectedBrands: profile.selected_brands || [],
    selectedCategories: profile.selected_categories || [],
    accountType: (profile.user_type as 'member' | 'business') || 'member',
    onboardingCompleted: profile.onboarding_completed || false
  });

  // Fetch user profile from database
  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();
      
      if (error) throw error;
      
      if (data) {
        setUser(profileToUser(data));
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  // Update user profile in database and local state
  const updateUser = async (updates: Partial<User>): Promise<void> => {
    if (!session?.user) {
      // If no session, just update local state for onboarding
      if (user) {
        setUser({ ...user, ...updates });
      }
      return;
    }

    try {
      const profileUpdates: any = {};
      
      if (updates.firstName !== undefined) profileUpdates.first_name = updates.firstName;
      if (updates.lastName !== undefined) profileUpdates.last_name = updates.lastName;
      if (updates.dateOfBirth) profileUpdates.date_of_birth = updates.dateOfBirth.toISOString().split('T')[0];
      if (updates.profilePhoto !== undefined) profileUpdates.profile_photo_url = updates.profilePhoto;
      if (updates.selectedBrands) profileUpdates.selected_brands = updates.selectedBrands;
      if (updates.selectedCategories) profileUpdates.selected_categories = updates.selectedCategories;
      if (updates.accountType) profileUpdates.user_type = updates.accountType;
      if (updates.onboardingCompleted !== undefined) profileUpdates.onboarding_completed = updates.onboardingCompleted;

      const { data, error } = await supabase
        .from('profiles')
        .update(profileUpdates)
        .eq('user_id', session.user.id)
        .select()
        .single();

      if (error) throw error;

      if (data) {
        setUser(profileToUser(data));
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };

  // Sign up new user
  const signUp = async (email: string, password: string, userData: Partial<User>) => {
    try {
      const redirectUrl = `${window.location.origin}/`;
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            first_name: userData.firstName || '',
            last_name: userData.lastName || '',
            user_type: userData.accountType || 'member'
          }
        }
      });

      if (error) return { error };

      // Update the profile with additional data after signup
      if (data.user && !error) {
        const profileUpdates: any = {};
        
        if (userData.firstName) profileUpdates.first_name = userData.firstName;
        if (userData.lastName) profileUpdates.last_name = userData.lastName;
        if (userData.dateOfBirth) profileUpdates.date_of_birth = userData.dateOfBirth.toISOString().split('T')[0];
        if (userData.profilePhoto) profileUpdates.profile_photo_url = userData.profilePhoto;
        if (userData.selectedBrands) profileUpdates.selected_brands = userData.selectedBrands;
        if (userData.selectedCategories) profileUpdates.selected_categories = userData.selectedCategories;
        if (userData.accountType) profileUpdates.user_type = userData.accountType;
        if (userData.onboardingCompleted !== undefined) profileUpdates.onboarding_completed = userData.onboardingCompleted;

        await supabase
          .from('profiles')
          .update(profileUpdates)
          .eq('user_id', data.user.id);
      }

      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  // Sign in existing user
  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { error };
    } catch (error) {
      return { error };
    }
  };

  // Sign out user
  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setSession(null);
      setCurrentStep(1);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Initialize auth state
  useEffect(() => {
    // Check if in test mode first
    if (isTestModeActive()) {
      const { testUser, testSession } = createTestSession();
      setUser(testUser);
      setSession(testSession);
      setLoading(false);
      return;
    }

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setLoading(true);
        
        if (session?.user) {
          // Fetch profile data when user is authenticated
          setTimeout(() => {
            fetchProfile(session.user.id);
          }, 0);
        } else {
          setUser(null);
        }
        
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user) {
        fetchProfile(session.user.id);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const isAuthenticated = !!session && !!user;

  const value: AppContextType = {
    user,
    session,
    loading,
    setUser,
    updateUser,
    currentStep,
    setCurrentStep,
    isAuthenticated,
    signUp,
    signIn,
    logout,
    enableTestMode,
    disableTestMode,
    isTestMode: isTestModeActive()
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};