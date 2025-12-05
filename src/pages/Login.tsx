import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, ArrowRight, Shield } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call - will be replaced with actual logic
    setTimeout(() => {
      setIsLoading(false);
      navigate("/otp");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white font-sora">SecureAuth</span>
            </div>
            
            <h1 className="text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Secure Access<br />
              <span className="text-white/80">Made Simple</span>
            </h1>
            
            <p className="text-white/70 text-lg max-w-md">
              Enterprise-grade security with two-factor authentication. 
              Your data is protected by industry-leading encryption standards.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</div>
              <span>Two-factor authentication</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</div>
              <span>Admin-controlled access</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</div>
              <span>Real-time monitoring</span>
            </div>
          </div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/10" />
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10" />
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8 justify-center">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">SecureAuth</span>
          </div>

          <Card className="border-0 shadow-elegant">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
              <CardDescription className="text-muted-foreground">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-11 h-12 bg-secondary/50 border-border focus:bg-background transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <button 
                      type="button"
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-11 h-12 bg-secondary/50 border-border focus:bg-background transition-colors"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 gradient-primary hover:opacity-90 transition-opacity text-base font-medium group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>Sign In</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center text-sm text-muted-foreground">
                  Protected by enterprise-grade security
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Need help? Contact your administrator
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;