import React, { createContext, useContext, useState, ReactNode } from 'react';

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
  setUser: (user: User | null) => void;
  updateUser: (updates: Partial<User>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
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
  const [currentStep, setCurrentStep] = useState(1);

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setCurrentStep(1);
  };

  const isAuthenticated = !!user;

  const value: AppContextType = {
    user,
    setUser,
    updateUser,
    currentStep,
    setCurrentStep,
    isAuthenticated,
    login,
    logout
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};