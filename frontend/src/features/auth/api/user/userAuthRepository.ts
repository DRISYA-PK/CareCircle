
import { USERS_AUTH_ENDPOINTS } from "./endpoints";
import type {  SignUpPayload, AuthResponse ,UserRegisterVerifyDto} from "../../types/userAuthTypes";
import api from "../../../../lib/axiosClient";






// ── 1. Sign Up ─────────────────────────────────────────────────────────────


export const usersignUpInitOtp = async (
  payload: SignUpPayload
): Promise<AuthResponse> => {
  // const resp = await api.post(
  //   USERS_AUTH_ENDPOINTS.REGISTER_INIT_OTP,
  //   payload
  // );
  const data=  {
    accessToken: "accesstoken",
    token: "token",
    sessionId: "sessionid", // Needed for OTP flow
    message: "otp sent",
    user: {name:"drisya",phone:"12212120",email:"d@dd"},
  }
 // return resp.data;
 return data;
};

export const userRegisterVerifyOtp = async (
  payload: UserRegisterVerifyDto
): Promise<AuthResponse> => {
  const resp = await api.post(
    USERS_AUTH_ENDPOINTS.REGISTER_VERIFY_OTP,
    payload
  );
  return resp.data;
};


 