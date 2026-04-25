import React, { useEffect, useState } from 'react';
import type { OtpFlowData } from '../types/userAuthTypes';
import * as  authRepo from '../api/user/userAuthRepository';

type OtpVerificationModalProps = {
  isOpen: boolean;
  OtpFlowState: OtpFlowData | null;
  onVerify: (otp: string) => void;
  onCancel: () => void;
  onResend: () => void;
};
const OTP_LENGTH = 6;
const OTP_EXPIRY_SECONDS = 120;

const STORAGE_KEY = 'otpFlowData';

export const OtpVerificationModal: React.FC<OtpVerificationModalProps> = ({
  isOpen,
  OtpFlowState,
  onCancel,
  onResend,
}) => {
  
  const [timer, setTimer] = useState(OTP_EXPIRY_SECONDS);
  const [error, setError] = useState<string | null>(null);
  const state = OtpFlowState;
  const storageRaw =
    typeof window !== 'undefined' ? sessionStorage.getItem(STORAGE_KEY) : null;
  const storageParsed = storageRaw
    ? (JSON.parse(storageRaw) as OtpFlowData)
    : null;

  const context = state?.context ?? storageParsed?.context ?? 'registration';
  const email = state?.email ?? storageParsed?.email ?? '';
  const [sessionId, setSessionId] = useState(state?.sessionId ?? storageParsed?.sessionId ?? '');
    const form = state?.form ?? storageParsed?.form ?? {};
  const nameFromState = form.name ?? "";
  const passwordFromState = form.password ?? "";
  const phoneFromState = form.phone ?? "";
  const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = ( value: string) => {
    if (!/^\d*$/.test(value)) return;
    setOtp(value)
 
  };






  const verifyOtp = async () => {
    const code = otp;
    if (code.length !== OTP_LENGTH) {
      setError('Please enter the complete OTP.');
      return;
    }

    try {
           setLoading(true);
      setError(null);

      if (context === "registration") {
        if (!nameFromState || !passwordFromState) {
          setError("Missing registration details. Please restart registration.");
          return;
        }

        
        const resp = await authRepo.userRegisterVerifyOtp({
          email,
          otp: code,
          sessionId,
          name: nameFromState,
          password: passwordFromState,
          phone: phoneFromState,
        });
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = resp as any;
        const access = data?.accessToken ?? data?.token;
        
      }
       

      
    } catch (error) {
      
    }
  };

  // ⏳ Timer logic
  useEffect(() => {
    if (!isOpen) return;

    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, isOpen]);

  // 🔁 Reset when modal opens
  useEffect(() => {
    if (isOpen) {
      setOtp('');
      setTimer(OTP_EXPIRY_SECONDS);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-sm text-center border border-[#bfe6df]">
        {/* Title */}
        <h2 className="text-xl font-semibold text-[#2d8c84] mb-2">
          Verify OTP 🔐
        </h2>

        {/* Email */}
        <p className="text-sm text-[#445160] mb-4">
          Enter OTP sent to{' '}
          <span className="font-semibold">{state?.email}</span>
        </p>

        {/* OTP Input */}
        <input
          type="text"
          maxLength={OTP_LENGTH}
          value={otp}
          onChange={(e) =>  handleChange(e.target.value)}
          placeholder="Enter 6-digit OTP"
          className="w-full text-center tracking-widest text-lg font-semibold px-4 py-2 rounded-xl border border-[#bfe6df] focus:outline-none focus:ring-2 focus:ring-[#2d8c84]/20 mb-4"
        />

        {/* Timer + Resend */}
        <div className="flex justify-between items-center text-sm mb-6">
          {timer > 0 ? (
            <span className="text-gray-500">Resend in {timer}s</span>
          ) : (
            <button
              onClick={() => {
                onResend();
                setTimer(OTP_EXPIRY_SECONDS);
              }}
              className="text-[#2d8c84] font-semibold hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          {/* Cancel */}
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-xl bg-[#f4f7f7] text-[#445160] font-medium hover:bg-[#E2B4A3] hover:text-white transition-all"
          >
            Cancel
          </button>

          {/* Verify */}
          <button
            onClick={() => verifyOtp(otp)}
            disabled={otp.length !== OTP_LENGTH}
            className="px-5 py-2 rounded-xl bg-[#2d8c84] text-white font-semibold shadow-md hover:bg-[#277972] transition-all disabled:opacity-50"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};
