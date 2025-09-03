import { NavLink } from "react-router-dom";
import { Home, Users, DollarSign, User } from "lucide-react";

export const MemberNavigation = () => {
  const navItems = [
    { path: "/dashboard", icon: Home, label: "Home", exact: true },
    { path: "/dashboard/network", icon: Users, label: "Network" },
    { path: "/dashboard/earnings", icon: DollarSign, label: "Earnings" },
    { path: "/dashboard/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around h-16 px-4">
        {navItems.map(({ path, icon: Icon, label, exact }) => (
          <NavLink
            key={path}
            to={path}
            end={exact}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 py-2 px-1 rounded-lg transition-colors ${
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`
            }
          >
            <Icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};