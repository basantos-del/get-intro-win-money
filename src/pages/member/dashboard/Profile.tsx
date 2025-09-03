import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, Edit, Settings, FileText, Shield, HelpCircle } from 'lucide-react';

export default function MemberProfile() {
  return (
    <DashboardLayout userType="member">
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Your Profile
          </h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Profile Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src="" alt="Profile" />
                <AvatarFallback className="text-lg">M</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground">Member Name</h3>
                <p className="text-muted-foreground">member@example.com</p>
                <Badge variant="secondary" className="mt-2">Member</Badge>
              </div>
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Member since</p>
                <p className="font-medium text-foreground">January 2024</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total referrals</p>
                <p className="font-medium text-foreground">0</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Menu */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="w-5 h-5" />
              <span>Account Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { icon: User, label: 'Personal Information', description: 'Update your name, email, and date of birth' },
              { icon: FileText, label: 'Professional Profile', description: 'Manage your CV, brands, and categories' },
              { icon: Shield, label: 'Privacy & Security', description: 'Control your privacy settings' },
              { icon: HelpCircle, label: 'Help & Support', description: 'Get help or contact support' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Profile Completion */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Profile completeness</span>
                <span className="text-sm font-medium text-foreground">60%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-3/5"></div>
              </div>
              <p className="text-xs text-muted-foreground">
                Complete your profile to increase your referral success rate
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}