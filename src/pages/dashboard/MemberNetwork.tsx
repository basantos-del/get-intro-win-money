import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  UserPlus, 
  Search,
  Mail,
  Phone,
  MapPin,
  Edit,
  Heart,
  UserCheck,
  Briefcase,
  User
} from "lucide-react";

const MemberNetwork = () => {
  const { user } = useApp();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStrength, setSelectedStrength] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  // Mock network data
  const connections = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 234 567 8901",
      profession: "Product Manager",
      company: "TechCorp",
      location: "San Francisco, CA",
      connectionStrength: "best friend",
      avatar: "/api/placeholder/40/40",
      addedAt: "2024-01-15",
      lastContact: "2 days ago"
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      phone: "+1 234 567 8902",
      profession: "Software Engineer",
      company: "StartupXYZ",
      location: "Austin, TX",
      connectionStrength: "close friend",
      avatar: "/api/placeholder/40/40",
      addedAt: "2024-01-20",
      lastContact: "1 week ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.r@email.com",
      phone: "+1 234 567 8903",
      profession: "Marketing Director",
      company: "AdAgency Inc",
      location: "New York, NY",
      connectionStrength: "colleague",
      avatar: "/api/placeholder/40/40",
      addedAt: "2024-02-01",
      lastContact: "3 days ago"
    },
    {
      id: 4,
      name: "Alex Kim",
      email: "alex.kim@email.com",
      phone: "+1 234 567 8904",
      profession: "Data Scientist",
      company: "Analytics Pro",
      location: "Seattle, WA",
      connectionStrength: "relative",
      avatar: "/api/placeholder/40/40",
      addedAt: "2024-02-10",
      lastContact: "5 days ago"
    }
  ];

  const connectionStrengths = [
    { value: "best friend", label: "Best Friend", icon: Heart, color: "text-red-600" },
    { value: "close friend", label: "Close Friend", icon: UserCheck, color: "text-blue-600" },
    { value: "colleague", label: "Colleague", icon: Briefcase, color: "text-green-600" },
    { value: "relative", label: "Relative", icon: User, color: "text-purple-600" }
  ];

  const getStrengthConfig = (strength: string) => {
    return connectionStrengths.find(s => s.value === strength) || connectionStrengths[0];
  };

  const filteredConnections = connections.filter(connection => {
    const matchesSearch = connection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         connection.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         connection.profession.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStrength = selectedStrength === "all" || connection.connectionStrength === selectedStrength;
    return matchesSearch && matchesStrength;
  });

  const strengthCounts = connectionStrengths.reduce((acc, strength) => {
    acc[strength.value] = connections.filter(c => c.connectionStrength === strength.value).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Your Network</h1>
            <p className="text-muted-foreground mt-1">
              {connections.length} connections • Manage your referral network
            </p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Add Connection
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Connection</DialogTitle>
                <DialogDescription>
                  Add someone to your network to refer them for opportunities
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="profession">Profession</Label>
                    <Input id="profession" placeholder="Software Engineer" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="TechCorp" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="San Francisco, CA" />
                </div>
                <div>
                  <Label htmlFor="strength">Connection Strength</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How well do you know them?" />
                    </SelectTrigger>
                    <SelectContent>
                      {connectionStrengths.map((strength) => (
                        <SelectItem key={strength.value} value={strength.value}>
                          <div className="flex items-center">
                            <strength.icon className={`mr-2 h-4 w-4 ${strength.color}`} />
                            {strength.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsAddDialogOpen(false)}>
                    Add Connection
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Network Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {connectionStrengths.map((strength) => (
            <Card key={strength.value}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <strength.icon className={`h-5 w-5 ${strength.color}`} />
                  <div>
                    <p className="text-2xl font-bold text-foreground">{strengthCounts[strength.value] || 0}</p>
                    <p className="text-xs text-muted-foreground">{strength.label}s</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search connections..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedStrength} onValueChange={setSelectedStrength}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Connections</SelectItem>
                  {connectionStrengths.map((strength) => (
                    <SelectItem key={strength.value} value={strength.value}>
                      <div className="flex items-center">
                        <strength.icon className={`mr-2 h-4 w-4 ${strength.color}`} />
                        {strength.label}s
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Connections List */}
        <div className="space-y-4">
          {filteredConnections.map((connection) => {
            const strengthConfig = getStrengthConfig(connection.connectionStrength);
            return (
              <Card key={connection.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={connection.avatar} alt={connection.name} />
                      <AvatarFallback>
                        {connection.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{connection.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {connection.profession} at {connection.company}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="flex items-center">
                            <strengthConfig.icon className={`mr-1 h-3 w-3 ${strengthConfig.color}`} />
                            {strengthConfig.label}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Mail className="mr-1 h-4 w-4" />
                          {connection.email}
                        </div>
                        {connection.phone && (
                          <div className="flex items-center">
                            <Phone className="mr-1 h-4 w-4" />
                            {connection.phone}
                          </div>
                        )}
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          {connection.location}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">
                          Added {new Date(connection.addedAt).toLocaleDateString()} • Last contact: {connection.lastContact}
                        </p>
                        <Button size="sm">
                          <Users className="mr-2 h-4 w-4" />
                          Refer
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredConnections.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No connections found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm || selectedStrength !== "all" 
                  ? "Try adjusting your search or filter criteria."
                  : "Start building your network by adding your first connection."
                }
              </p>
              {!searchTerm && selectedStrength === "all" && (
                <Button onClick={() => setIsAddDialogOpen(true)}>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Your First Connection
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MemberNetwork;