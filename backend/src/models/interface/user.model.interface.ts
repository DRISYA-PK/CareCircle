import { Types } from 'mongoose';

import { UserRole } from '../../constant/userRole.js';
import { Gender } from '../../constant/genter.js';


export interface IUser {
  _id?: Types.ObjectId;
  age?: number;
  email: string;
  name: string;
  phone?: number;
  password: string;
  googleId?: string;
  healthDetails?: string;
  isActive: boolean;
  medicalCertificate?: string;
  role: UserRole;
  gender?: Gender;
}
