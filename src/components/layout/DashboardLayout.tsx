import { ReactNode } from 'react';
import MemberNavigation from '@/components/navigation/MemberNavigation';
import BusinessNavigation from '@/components/navigation/BusinessNavigation';

interface DashboardLayoutProps {
  children: ReactNode;
  userType: 'member' | 'business';
}

export default function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-16">
        {children}
      </main>
      {userType === 'member' ? <MemberNavigation /> : <BusinessNavigation />}
    </div>
  );
}