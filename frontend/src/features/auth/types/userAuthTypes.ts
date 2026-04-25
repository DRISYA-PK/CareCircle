/** Data we send to the server when the user signs up */
export interface SignUpPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface UserDto {
  id?: string;
  email?: string;
  role?: "admin" | "user" | "volunteer" |"guest"| string;
}
export interface AuthResponse {
  accessToken?: string;
  token?: string;
  sessionId?: string; // Needed for OTP flow
  message?: string;
  user?: UserDto;
}


export type OtpContext = "registration" | "login" | "forgot-password";

export interface OtpFlowData {
  email: string;
  sessionId: string | null;
  context: OtpContext;

  form?: {
    name?: string;
    phone?: string;
    password?: string;
  };
}



export interface UserRegisterVerifyDto {
  email: string;
  phone: string;
  otp: string;
  sessionId: string;
  name: string;
  password: string;
}