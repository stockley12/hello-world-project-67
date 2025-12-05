import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ArrowLeft, RefreshCw, CheckCircle2 } from "lucide-react";

const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste
      const digits = value.slice(0, 6).split("");
      const newOtp = [...otp];
      digits.forEach((digit, i) => {
        if (index + i < 6) newOtp[index + i] = digit;
      });
      setOtp(newOtp);
      const nextIndex = Math.min(index + digits.length, 5);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call - will be replaced with actual logic
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to dashboard or show success
    }, 1500);
  };

  const handleResend = async () => {
    setIsResending(true);
    setTimeout(() => {
      setIsResending(false);
      setCountdown(60);
    }, 1000);
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <div className="min-h-screen flex items-center justify-center p-4 gradient-subtle">
      <div className="w-full max-w-md">
        {/* Back button */}
        <button 
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to login</span>
        </button>

        <Card className="border-0 shadow-elegant">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 shadow-glow">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">Verify Your Identity</CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
              We've sent a 6-digit verification code to your email.
              Please enter it below.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* OTP Input */}
              <div className="flex justify-center gap-2 sm:gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`
                      w-11 h-14 sm:w-12 sm:h-16 text-center text-xl sm:text-2xl font-bold 
                      rounded-xl border-2 transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-primary/20
                      ${digit 
                        ? "border-primary bg-primary/5 text-foreground" 
                        : "border-border bg-secondary/50 text-foreground"
                      }
                    `}
                  />
                ))}
              </div>

              {/* Status indicator */}
              {isComplete && (
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Code complete</span>
                </div>
              )}

              {/* Submit button */}
              <Button 
                type="submit" 
                className="w-full h-12 gradient-primary hover:opacity-90 transition-opacity text-base font-medium"
                disabled={!isComplete || isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Verifying...</span>
                  </div>
                ) : (
                  "Verify Code"
                )}
              </Button>

              {/* Resend option */}
              <div className="text-center">
                {countdown > 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Resend code in <span className="font-medium text-foreground">{countdown}s</span>
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={isResending}
                    className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                  >
                    <RefreshCw className={`w-4 h-4 ${isResending ? "animate-spin" : ""}`} />
                    <span>{isResending ? "Sending..." : "Resend code"}</span>
                  </button>
                )}
              </div>
            </form>

            {/* Help text */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="bg-secondary/50 rounded-xl p-4">
                <h4 className="text-sm font-medium text-foreground mb-1">
                  Waiting for admin approval
                </h4>
                <p className="text-xs text-muted-foreground">
                  Your login request is being reviewed by an administrator. 
                  Once approved, you'll receive the OTP code via email.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Didn't receive the code? Check your spam folder or contact support.
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;