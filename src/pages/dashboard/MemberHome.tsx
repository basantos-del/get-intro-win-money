import { useApp } from "@/contexts/AppContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Plus
} from "lucide-react";

const MemberHome = () => {
  const { user } = useApp();

  // Mock data for demonstration
  const stats = {
    totalEarnings: 2450,
    pendingEarnings: 750,
    totalReferrals: 12,
    successfulMatches: 5,
    networkSize: 34
  };

  const recentOpportunities = [
    {
      id: 1,
      title: "Senior Product Manager",
      company: "TechCorp",
      type: "job_posting",
      payout: 500,
      location: "Remote",
      postedAt: "2 hours ago",
      requirements: ["5+ years experience", "Product strategy", "Team leadership"]
    },
    {
      id: 2,
      title: "Beta Tester for Mobile App",
      company: "StartupXYZ",
      type: "product_testing",
      payout: 100,
      location: "Online",
      postedAt: "5 hours ago",
      requirements: ["iOS device", "Available 10 hours/week"]
    },
    {
      id: 3,
      title: "New Customer Referral",
      company: "SaaS Solutions",
      type: "new_customer",
      payout: 200,
      location: "Any",
      postedAt: "1 day ago",
      requirements: ["B2B contacts", "Tech industry"]
    }
  ];

  const recentActivity = [
    { id: 1, type: "referral", text: "You referred Sarah Johnson for Product Manager role", time: "2 hours ago" },
    { id: 2, type: "match", text: "Your referral Mike Chen was selected! Earning $500", time: "1 day ago" },
    { id: 3, type: "connection", text: "Added Alex Kim to your network", time: "2 days ago" },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "job_posting": return "bg-primary/10 text-primary border-primary/20";
      case "product_testing": return "bg-accent/10 text-accent-foreground border-accent/20";
      case "new_customer": return "bg-secondary/10 text-secondary-foreground border-secondary/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const formatType = (type: string) => {
    return type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 py-6">
        <h1 className="text-2xl font-bold text-foreground">
          Welcome back, {user?.firstName}!
        </h1>
        <p className="text-muted-foreground mt-1">
          Here's what's happening in your network
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">${stats.totalEarnings}</p>
                  <p className="text-xs text-muted-foreground">Total Earned</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-2xl font-bold text-foreground">${stats.pendingEarnings}</p>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.successfulMatches}</p>
                  <p className="text-xs text-muted-foreground">Matches</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.networkSize}</p>
                  <p className="text-xs text-muted-foreground">Network</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Opportunities */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>New Opportunities</CardTitle>
                <CardDescription>Fresh referral opportunities for your network</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">{opportunity.title}</h3>
                    <p className="text-sm text-muted-foreground">{opportunity.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">${opportunity.payout}</p>
                    <Badge variant="outline" className={getTypeColor(opportunity.type)}>
                      {formatType(opportunity.type)}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center">                    
                    <Clock className="h-4 w-4 mr-1" />
                    {opportunity.postedAt}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {opportunity.requirements.map((req, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {req}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full" size="sm">
                  <Users className="mr-2 h-4 w-4" />
                  Refer Someone
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
            <CardContent className="p-6 text-center">
              <Plus className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold text-foreground mb-1">Add Connection</h3>
              <p className="text-sm text-muted-foreground">Grow your network</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold text-foreground mb-1">Browse All</h3>
              <p className="text-sm text-muted-foreground">Explore opportunities</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest referrals and earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{activity.text}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MemberHome;