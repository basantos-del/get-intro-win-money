import { Outlet } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { Navigate } from "react-router-dom";
import { MemberNavigation } from "@/components/MemberNavigation";

const DashboardLayout = () => {
  const { session, user, loading } = useApp();

  // Show loading while checking auth state
  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground app-theme flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to onboarding if not authenticated or onboarding not completed
  if (!session || !user?.onboardingCompleted) {
    return <Navigate to="/onboarding" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground app-theme">
      {/* Main Content */}
      <main className="pb-20">
        <Outlet />
      </main>
      
      {/* Bottom Navigation - Fixed */}
      <MemberNavigation />
    </div>
  );
};

export default DashboardLayout;