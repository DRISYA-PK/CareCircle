import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { AuthResponse, OtpFlowData, SignUpPayload } from "../types/userAuthTypes";
import { usersignUpInitOtp } from "../api/user/userAuthRepository";
import { logger } from "../../../shared/utils/logger";


export function useAuthFlow() {
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState<string | null>(null);
  

  const handleSignUp = async (
    payload: SignUpPayload
  ): Promise<OtpFlowData |null> => {
    setApiError(null);
    setIsLoading(true);
    setInfo(null)
    try {
      const resp = await usersignUpInitOtp(payload);
      const data = resp as AuthResponse;

      const sessionId = data?.sessionId ?? null;
      const message = data?.message ?? "OTP sent. Please check your email.";
      setInfo(message)
      logger.info("OTP sent to", payload.email);

      const otpFlowData:OtpFlowData= {
        email: payload.email,
        sessionId,
        context: "registration" as const,
        form: {
          name: payload.name,
          phone: payload.phone,
          password: payload.password,
        },
      };

      // ✅ store session
      sessionStorage.setItem("otpFlowData", JSON.stringify(otpFlowData));

      // ✅ navigate (correct place)
      // navigate("/verify-otp", {
      //   state: { ...otpFlowData, message },
      // });
     return otpFlowData;

    } catch (error: unknown) {
      
      setApiError(
        extractErrorMessage(error, "Signup failed. Please try again.")
      );
       return null; // ✅ important
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSignUp,
    apiError,
    isLoading,
    info
  };
}

// ── Error extractor ─────────────────────────────────────

function extractErrorMessage(error: unknown, fallback: string): string {
  if (typeof error === "object" && error !== null && "response" in error) {
    const res = (
      error as { response?: { data?: { message?: string } | string } }
    ).response;

    if (typeof res?.data === "object" && res.data?.message)
      return res.data.message;

    if (typeof res?.data === "string") return res.data;
  }

  if (error instanceof Error) return error.message;

  return fallback;
}


