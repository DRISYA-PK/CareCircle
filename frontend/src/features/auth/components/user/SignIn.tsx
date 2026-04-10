import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  const handleGoogleSignIn = () => {
    console.log('Initiating Google Sign-In');
    // Add your OAuth logic here
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-transparent">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/30">
        <div className="p-8 sm:p-10">
          
          {/* Logo & Header Section */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="mb-4">
              <img 
                src="/assets/icon.png" 
                alt="Care Circle Logo" 
                className="h-20 md:h-24 w-auto object-contain transition-transform hover:scale-105 duration-300" 
              />
            </div>
            <p className="text-gray-500 text-sm font-medium">
              Join us in making a difference today.
            </p>
          </div>

          {/* Google Sign-In Option */}
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-2xl border border-gray-200 transition-all duration-200 shadow-sm active:scale-[0.98] mb-6"
          >
            <img 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
              alt="Google" 
              className="w-5 h-5" 
            />
            Sign in with Google
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-gray-400 font-medium">Or continue with email</span>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-teal-900 uppercase tracking-wider mb-1.5 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-teal-600/50 group-focus-within:text-[#2d8a7d] transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-white/50 border border-teal-100 rounded-2xl text-gray-700 focus:ring-2 focus:ring-[#2d8a7d]/20 focus:border-[#2d8a7d] outline-none transition-all duration-200"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1.5 ml-1">
                <label className="block text-xs font-semibold text-teal-900 uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-xs font-medium text-[#2d8a7d] hover:underline transition-colors">
                  Forgot?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-teal-600/50 group-focus-within:text-[#2d8a7d] transition-colors" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-white/50 border border-teal-100 rounded-2xl text-gray-700 focus:ring-2 focus:ring-[#2d8a7d]/20 focus:border-[#2d8a7d] outline-none transition-all duration-200"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#2d8a7d] hover:bg-[#246e64] text-white font-bold py-3.5 px-6 rounded-2xl transition-all duration-300 shadow-lg shadow-teal-900/20 active:scale-[0.98]"
              >
                Sign In
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          <p className="text-center mt-6 text-sm text-gray-500">
            New to Care Circle?{' '}
            <a href="#" className="text-[#2d8a7d] font-bold hover:underline transition-colors">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};