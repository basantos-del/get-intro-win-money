import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AppProvider } from "@/contexts/AppContext";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import NewCustomers from "./pages/NewCustomers";
import Onboarding from "./pages/onboarding/Onboarding";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import MemberHome from "./pages/dashboard/MemberHome";
import MemberNetwork from "./pages/dashboard/MemberNetwork";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to scroll to top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top on route changes (not hash changes)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

const HashHandler = () => {
  useEffect(() => {
    const scrollToElement = (elementId: string, retries = 0) => {
      const element = document.getElementById(elementId);
      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        });
      } else if (retries < 10) {
        // Retry up to 10 times with increasing delay
        setTimeout(() => scrollToElement(elementId, retries + 1), 200 + retries * 100);
      } else {
        // Fallback: scroll to waitlist section if members-waitlist not found
        if (elementId === 'members-waitlist') {
          const waitlistSection = document.getElementById('waitlist');
          if (waitlistSection) {
            requestAnimationFrame(() => {
              waitlistSection.scrollIntoView({ behavior: 'smooth' });
            });
          }
        }
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        scrollToElement(elementId);
      }
    };

    // Handle initial hash on page load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <HashHandler />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/for-business/newcustomers" element={<NewCustomers />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<MemberHome />} />
              <Route path="network" element={<MemberNetwork />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
