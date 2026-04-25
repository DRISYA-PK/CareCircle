import { Mail, Lock, ArrowRight, User, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { logger } from '../../../../shared/utils/logger';
import { signUpSchema, type SignUpFormData } from '../../schemas/signup.schema';
import { useAuthFlow } from '../../hooks/useAuthFlow';
import { useNavigate } from 'react-router-dom';
import { OtpVerificationModal } from '../OtpSentModal';
import { useState } from 'react';
import type { OtpFlowData } from '../../types/userAuthTypes';
import { X } from 'lucide-react';


export const SignUp: React.FC = () => {
  const navigate=useNavigate();
  const [showModal, setShowModal] = useState(false);
 const [state, setState] = useState<OtpFlowData | null>(null);
   const { handleSignUp, apiError, isLoading,info } = useAuthFlow();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',           // ← validate when a field loses focus
    reValidateMode: 'onChange', // ← re-validate on blur after first submit too
  });

  const onSubmit = async (payload: SignUpFormData) => {
  
    //here signup calling
    logger.info("signup validation completed",JSON.stringify(payload, null, 2));
  //  const otpFlowData:OtpFlowData= await handleSignUp(payload);
  //  setState(otpFlowData)
  //  if (!apiError) {
  //   setShowModal(true);
  // }
   const otpFlowData = await handleSignUp(payload);

  // ❌ if (!apiError) ❌ remove this

  if (!otpFlowData) return; // ✅ API failed → stop

  // ✅ success case
  setState(otpFlowData);
  setShowModal(true);



    
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-transparent">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/30">
       <div className="p-8 sm:p-10 relative">

 
          {/* Logo & Header */}
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

          {/* Success Banner */}
          
          

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>

            {/* Name */}
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-[#1d6e69]">
                Name
              </label>
              <div className={`flex items-center rounded-xl border bg-white px-3 py-2.5 transition-all
                focus-within:ring-2 focus-within:ring-[#2d8c84]/20
                ${errors.name
                  ? 'border-red-400 focus-within:border-red-400'
                  : 'border-[#bfe6df] focus-within:border-[#2d8c84]'
                }`}>
                <User className="mr-3 flex-shrink-0 text-[#73c7c1]" size={18} />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent text-sm text-[#445160] outline-none placeholder:text-[#9ca3af]"
                  {...register('name')}
                />
              </div>
              {errors.name && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
                  </svg>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-[#1d6e69]">
                Email Address
              </label>
              <div className={`flex items-center rounded-xl border bg-white px-3 py-2.5 transition-all
                focus-within:ring-2 focus-within:ring-[#2d8c84]/20
                ${errors.email
                  ? 'border-red-400 focus-within:border-red-400'
                  : 'border-[#bfe6df] focus-within:border-[#2d8c84]'
                }`}>
                <Mail className="mr-3 flex-shrink-0 text-[#73c7c1]" size={18} />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-transparent text-sm text-[#445160] outline-none placeholder:text-[#9ca3af]"
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
                  </svg>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-[#1d6e69]">
                Phone Number
              </label>
              <div className={`flex items-center rounded-xl border bg-white px-3 py-2.5 transition-all
                focus-within:ring-2 focus-within:ring-[#2d8c84]/20
                ${errors.phone
                  ? 'border-red-400 focus-within:border-red-400'
                  : 'border-[#bfe6df] focus-within:border-[#2d8c84]'
                }`}>
                <Phone className="mr-3 flex-shrink-0 text-[#73c7c1]" size={18} />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full bg-transparent text-sm text-[#445160] outline-none placeholder:text-[#9ca3af]"
                  {...register('phone')}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
                  </svg>
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-[#1d6e69]">
                Password
              </label>
              <div className={`flex items-center rounded-xl border bg-white px-3 py-2.5 transition-all
                focus-within:ring-2 focus-within:ring-[#2d8c84]/20
                ${errors.password
                  ? 'border-red-400 focus-within:border-red-400'
                  : 'border-[#bfe6df] focus-within:border-[#2d8c84]'
                }`}>
                <Lock className="mr-3 flex-shrink-0 text-[#73c7c1]" size={18} />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm text-[#445160] outline-none placeholder:text-[#9ca3af]"
                  {...register('password')}
                />
              </div>
              {errors.password ? (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
                  </svg>
                  {errors.password.message}
                </p>
              ) : (
                <p className="mt-1 text-xs text-gray-400">
                  Min. 8 characters with a number and special character (e.g. @, #, !)
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-[#1d6e69]">
                Confirm Password
              </label>
              <div className={`flex items-center rounded-xl border bg-white px-3 py-2.5 transition-all
                focus-within:ring-2 focus-within:ring-[#2d8c84]/20
                ${errors.confirmPassword
                  ? 'border-red-400 focus-within:border-red-400'
                  : 'border-[#bfe6df] focus-within:border-[#2d8c84]'
                }`}>
                <Lock className="mr-3 flex-shrink-0 text-[#73c7c1]" size={18} />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm text-[#445160] outline-none placeholder:text-[#9ca3af]"
                  {...register('confirmPassword')}
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
                  </svg>
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-[#2d8c84] px-5 py-3 text-base font-bold text-white shadow-[0_10px_25px_rgba(45,140,132,0.35)] transition hover:bg-[#277972] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight size={24} />
                </>
              )}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-500">
            Already have an account?{' '}
            <a href="#" className="text-[#2d8a7d] font-bold hover:underline transition-colors">
              Sign In
            </a>
          </p>
        </div>
      </div>



 {/* ✅ 👉 ADD MODAL HERE */}
    {/* <OtpSentModal
      status={showModal ? info : null}
      message={"otp sent to the mail"}
      onConfirm={() => {
        setShowModal(false);
        navigate("/verify-otp");
      }}
      onCancel={() => {
        setShowModal(false);
      }}
    /> */}
    <OtpVerificationModal
    isOpen={showModal?true:false}
    OtpFlowState={state}
    onVerify={()=>{}}
    onCancel={() => setShowModal(false)}
    onResend={()=>{}}/>

    </div>
  );
};