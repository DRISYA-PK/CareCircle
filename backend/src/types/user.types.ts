import { Types } from 'mongoose';

export type userRole = 'user' | 'guest' | 'admin';

export interface IUser {
  _id: Types.ObjectId;
  age?: Number;
  email: String;
  name: String;
  phone?: Number;
  password: String;
  googleId?: String;
  healthDetails?: String;
  isActive: Boolean;
  medicalCertificate?: String;
  role: userRole;
}
