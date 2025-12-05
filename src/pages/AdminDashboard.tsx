import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  Clock, 
  CheckCircle, 
  XCircle, 
  LogOut,
  Search,
  Filter,
  MoreVertical,
  Mail,
  UserCheck,
  UserX,
  Activity
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

// Mock data for UI demonstration
const mockLoginRequests = [
  { id: 1, email: "john.doe@company.com", timestamp: "2 mins ago", status: "pending", attempts: 1 },
  { id: 2, email: "jane.smith@company.com", timestamp: "5 mins ago", status: "pending", attempts: 1 },
  { id: 3, email: "mike.wilson@company.com", timestamp: "12 mins ago", status: "approved", attempts: 1 },
  { id: 4, email: "sarah.jones@company.com", timestamp: "1 hour ago", status: "rejected", attempts: 3 },
  { id: 5, email: "alex.brown@company.com", timestamp: "2 hours ago", status: "approved", attempts: 1 },
];

const stats = [
  { label: "Total Users", value: "1,284", icon: Users, change: "+12%", color: "text-primary" },
  { label: "Pending Requests", value: "8", icon: Clock, change: "-", color: "text-warning" },
  { label: "Approved Today", value: "42", icon: CheckCircle, change: "+8%", color: "text-green-600" },
  { label: "Rejected Today", value: "3", icon: XCircle, change: "-25%", color: "text-destructive" },
];

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("all");

  const filteredRequests = mockLoginRequests.filter((request) => {
    const matchesSearch = request.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || request.status === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/30">Pending</Badge>;
      case "approved":
        return <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30">Approved</Badge>;
      case "rejected":
        return <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/30">Rejected</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">SecureAuth</h1>
                <p className="text-xs text-muted-foreground">Admin Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">Live</span>
              </div>
              
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</p>
                    {stat.change !== "-" && (
                      <p className={`text-xs mt-1 ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                        {stat.change} from yesterday
                      </p>
                    )}
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Login Requests Section */}
        <Card className="border-0 shadow-elegant">
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-xl font-bold">Login Requests</CardTitle>
                <CardDescription>Manage and approve user login attempts</CardDescription>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-secondary/50 border-border"
                  />
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setFilter("all")}>All</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilter("pending")}>Pending</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilter("approved")}>Approved</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilter("rejected")}>Rejected</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-secondary/50 rounded-lg text-sm font-medium text-muted-foreground mb-2">
              <div className="col-span-4">User</div>
              <div className="col-span-2">Time</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Attempts</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>

            {/* Table Body */}
            <div className="space-y-2">
              {filteredRequests.map((request) => (
                <div 
                  key={request.id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  {/* User Info */}
                  <div className="md:col-span-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-foreground truncate">{request.email}</p>
                      <p className="text-xs text-muted-foreground md:hidden">{request.timestamp}</p>
                    </div>
                  </div>
                  
                  {/* Time */}
                  <div className="hidden md:flex md:col-span-2 items-center text-sm text-muted-foreground">
                    {request.timestamp}
                  </div>
                  
                  {/* Status */}
                  <div className="md:col-span-2 flex items-center">
                    {getStatusBadge(request.status)}
                  </div>
                  
                  {/* Attempts */}
                  <div className="hidden md:flex md:col-span-2 items-center">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Activity className="w-4 h-4" />
                      <span>{request.attempts} attempt{request.attempts !== 1 ? "s" : ""}</span>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="md:col-span-2 flex items-center justify-end gap-2">
                    {request.status === "pending" ? (
                      <>
                        <Button 
                          size="sm" 
                          className="gradient-primary text-white hover:opacity-90 h-8 px-3"
                        >
                          <UserCheck className="w-4 h-4 mr-1" />
                          Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="text-destructive border-destructive/30 hover:bg-destructive/10 h-8 px-3"
                        >
                          <UserX className="w-4 h-4 mr-1" />
                          Reject
                        </Button>
                      </>
                    ) : (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Resend OTP</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Block User</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredRequests.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-secondary mx-auto flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">No login requests found</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;