import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, UserPlus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function MemberNetwork() {
  return (
    <DashboardLayout userType="member">
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Your Network
            </h1>
            <p className="text-muted-foreground">
              Manage your connections and grow your network
            </p>
          </div>
          <Button className="intro-button-primary">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Connection
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search connections..."
            className="pl-10"
          />
        </div>

        {/* Connection Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Connections</p>
                  <p className="text-xl font-bold text-foreground">0</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <UserPlus className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-xl font-bold text-foreground">0</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Connection Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Connections by Relationship</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {['best friend', 'close friend', 'relative', 'colleague'].map((category) => (
              <div key={category} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="capitalize">
                    {category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">0 connections</span>
                </div>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Empty State */}
        <Card>
          <CardContent className="py-12">
            <div className="text-center">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No connections yet
              </h3>
              <p className="text-muted-foreground mb-4">
                Start building your network by adding connections
              </p>
              <Button className="intro-button-primary">
                <UserPlus className="w-4 h-4 mr-2" />
                Add Your First Connection
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}