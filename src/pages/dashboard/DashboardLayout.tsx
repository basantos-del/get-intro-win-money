import { Outlet } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { Navigate } from "react-router-dom";
import { MemberNavigation } from "@/components/MemberNavigation";

const DashboardLayout = () => {
  const { user, isAuthenticated } = useApp();

  // Redirect to onboarding if not authenticated or onboarding not completed
  if (!isAuthenticated || !user?.onboardingCompleted) {
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