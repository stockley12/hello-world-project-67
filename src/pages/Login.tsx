import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, QrCode, ChevronDown } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/otp");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <svg className="h-8 w-8 mr-1" viewBox="0 0 40 40">
                <path fill="#C41230" d="M5 5 L20 35 L35 5 L25 5 L20 20 L15 5 Z"/>
                <path fill="#C41230" d="M18 5 L22 5 L22 15 L18 15 Z"/>
              </svg>
              <span className="text-xl font-semibold text-gray-800">Made-in-China</span>
            </div>
            <span className="hidden sm:block text-xs text-gray-500 ml-2">Connecting Buyers with Chinese Suppliers</span>
          </div>
          <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
            English
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A9BD9] via-[#5BA3DC] to-[#6BADE0]" />
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
            {/* Left Side - Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* 3D Illustration placeholder - using CSS shapes */}
              <div className="relative w-full max-w-lg mx-auto lg:mx-0 h-64 lg:h-80 mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Globe */}
                    <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 shadow-2xl" />
                    {/* Ship */}
                    <div className="absolute -bottom-4 -left-8 w-24 lg:w-32 h-12 lg:h-16 bg-[#D64545] rounded-t-lg shadow-lg" />
                    {/* Containers */}
                    <div className="absolute -bottom-2 right-0 flex gap-1">
                      <div className="w-6 lg:w-8 h-8 lg:h-12 bg-[#3B82F6] rounded-sm shadow" />
                      <div className="w-6 lg:w-8 h-10 lg:h-14 bg-[#3B82F6] rounded-sm shadow" />
                      <div className="w-6 lg:w-8 h-6 lg:h-10 bg-[#3B82F6] rounded-sm shadow" />
                    </div>
                    {/* Plane */}
                    <div className="absolute -top-4 lg:-top-8 left-0 w-16 lg:w-24 h-4 lg:h-6 bg-white rounded-full shadow-lg transform -rotate-12" />
                    {/* Shield */}
                    <div className="absolute top-1/4 right-1/4 w-8 lg:w-12 h-10 lg:h-14 bg-[#22C55E] rounded-t-lg rounded-b-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs lg:text-sm font-bold">$</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h1 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                Source & trade with trust
              </h1>
              <p className="text-white/90 text-base lg:text-lg">
                Sign in and easily connect with verified suppliers
              </p>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full max-w-md">
              <div className="bg-white rounded-lg shadow-xl p-6 lg:p-8">
                {/* QR Code Icon */}
                <div className="flex justify-end mb-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <QrCode className="w-8 h-8" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Account Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account
                    </label>
                    <Input
                      type="email"
                      placeholder="Please enter your email address."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-11 border-gray-300 focus:border-gray-400 focus:ring-0"
                      required
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <button 
                        type="button"
                        className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-11 border-gray-300 focus:border-gray-400 focus:ring-0 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Sign In Button */}
                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-[#E8604C] hover:bg-[#D64545] text-white font-medium rounded-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>

                  {/* Join Free Button */}
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full h-11 border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50"
                  >
                    Join Free
                  </Button>

                  {/* Sign in with Email Code */}
                  <div className="text-center">
                    <button 
                      type="button"
                      className="text-sm text-gray-600 hover:text-gray-800 underline"
                    >
                      Sign in with Email Code
                    </button>
                  </div>

                  {/* Social Login */}
                  <div className="pt-4">
                    <p className="text-center text-sm text-gray-500 mb-4">Sign in with</p>
                    <div className="flex justify-center gap-4">
                      {/* Google */}
                      <button type="button" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </button>
                      {/* Facebook */}
                      <button type="button" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </button>
                      {/* LinkedIn */}
                      <button type="button" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0A66C2">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </button>
                      {/* X (Twitter) */}
                      <button type="button" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Help Button */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
          <button className="bg-white shadow-lg rounded-l-lg px-3 py-4 flex flex-col items-center gap-1 text-gray-600 hover:text-gray-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs">Help</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F5F5F5] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Discover Products & Suppliers */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Discover Products & Suppliers</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Industry Sites</a></li>
                <li><a href="#" className="hover:text-gray-800">Regional Channels</a></li>
                <li><a href="#" className="hover:text-gray-800">Special Channel</a></li>
                <li><a href="#" className="hover:text-gray-800">Custom Products</a></li>
                <li><a href="#" className="hover:text-gray-800">Video Show</a></li>
                <li><a href="#" className="hover:text-gray-800">Secured Trading Service</a></li>
                <li><a href="#" className="hover:text-gray-800">Business Guide</a></li>
              </ul>
              <h3 className="font-semibold text-gray-800 mt-6 mb-4">Featured Service</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Star Buyer</a></li>
                <li><a href="#" className="hover:text-gray-800">Trade Resources</a></li>
                <li><a href="#" className="hover:text-gray-800">Logistics Partners</a></li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">About Us</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">About Made-in-China.com</a></li>
                <li><a href="#" className="hover:text-gray-800">Site Map</a></li>
                <li><a href="#" className="hover:text-gray-800">Trademark</a></li>
                <li><a href="#" className="hover:text-gray-800">Friendly Links</a></li>
              </ul>
              <h3 className="font-semibold text-gray-800 mt-6 mb-4">Help</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-800">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-800">加入高级会员</a></li>
                <li><a href="#" className="hover:text-gray-800">Submit a Complaint</a></li>
              </ul>
            </div>

            {/* Language Options */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Language Options</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Español</a></li>
                <li><a href="#" className="hover:text-gray-800">Português</a></li>
                <li><a href="#" className="hover:text-gray-800">Français</a></li>
                <li><a href="#" className="hover:text-gray-800">Русский язык</a></li>
                <li><a href="#" className="hover:text-gray-800">Italiano</a></li>
                <li><a href="#" className="hover:text-gray-800">Deutsch</a></li>
                <li><a href="#" className="hover:text-gray-800">Nederlands</a></li>
                <li><a href="#" className="hover:text-gray-800">العربية</a></li>
                <li><a href="#" className="hover:text-gray-800">한국어</a></li>
                <li><a href="#" className="hover:text-gray-800">日本語</a></li>
              </ul>
            </div>

            {/* Product Alert & Co-brands */}
            <div>
              <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700">Product Alert</span>
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4">Co-brands</p>
              <div className="space-y-2">
                <div className="bg-[#E8604C] text-white text-sm py-2 px-4 rounded flex items-center justify-center">
                  制造之美
                </div>
                <div className="bg-[#E8604C] text-white text-sm py-2 px-4 rounded flex items-center justify-center">
                  inQbrands
                </div>
                <div className="bg-gray-200 text-gray-600 text-sm py-2 px-4 rounded flex items-center justify-center font-semibold">
                  CROV
                </div>
                <div className="bg-gray-200 text-gray-600 text-sm py-2 px-4 rounded flex items-center justify-center font-semibold">
                  doba
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 bg-[#EBEBEB]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
            {/* App Downloads & Social */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Free App:</span>
                <button className="bg-black text-white text-xs px-3 py-1.5 rounded flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  App Store
                </button>
                <button className="bg-black text-white text-xs px-3 py-1.5 rounded flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
                  Google Play
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">TradeMessenger:</span>
                <div className="w-6 h-6 rounded-full bg-blue-500" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Follow Us:</span>
                <div className="flex gap-2">
                  {['facebook', 'tiktok', 'x', 'instagram', 'youtube', 'pinterest', 'linkedin'].map((social) => (
                    <button key={social} className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs">
                      {social[0].toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="text-center text-xs text-gray-500 space-y-2">
              <div className="flex flex-wrap justify-center gap-2">
                {['Hot Products', 'China Products', 'China Manufacturers/Suppliers', 'Wholesale Products', 'Wholesale Price', 'Continent Channel', 'Product Index', 'Insights'].map((link, i) => (
                  <span key={link}>
                    <a href="#" className="hover:text-gray-700">{link}</a>
                    {i < 7 && <span className="ml-2">|</span>}
                  </span>
                ))}
              </div>
              <div>
                Focus Technology: <a href="#" className="hover:text-gray-700">Made-in-China.com</a> | <a href="#" className="hover:text-gray-700">m.Made-in-China.com</a> | <a href="#" className="hover:text-gray-700">cn.Made-in-China.com</a>
              </div>
              <div>
                Copyright © 1998-2025 Focus Technology Co., Ltd. All Rights Reserved. | <a href="#" className="hover:text-gray-700">User Agreement</a> | <a href="#" className="hover:text-gray-700">Declaration</a> | <a href="#" className="hover:text-gray-700">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;