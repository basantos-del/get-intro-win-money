import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, Users, Briefcase } from 'lucide-react';

export default function MemberHome() {
  return (
    <DashboardLayout userType="member">
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Welcome back, Member
          </h1>
          <p className="text-muted-foreground">
            Here are your latest opportunities and earnings
          </p>
        </div>

        {/* Earnings Summary */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Earnings</p>
                  <p className="text-xl font-bold text-foreground">$0.00</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-xl font-bold text-foreground">$0.00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Opportunities by Type */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5" />
              <span>Open Opportunities</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Placeholder for opportunities */}
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                No opportunities available at the moment.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Check back later for new opportunities!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-lg font-bold text-foreground">0</p>
              <p className="text-xs text-muted-foreground">Connections</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-lg font-bold text-foreground">0</p>
              <p className="text-xs text-muted-foreground">Referrals</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-lg font-bold text-foreground">0</p>
              <p className="text-xs text-muted-foreground">Matches</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}