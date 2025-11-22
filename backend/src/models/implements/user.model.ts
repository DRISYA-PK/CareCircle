import mongoose, { Document, Types } from 'mongoose';
import { IUser } from '../interface/user.model.interface.js';
import { UserRole } from '../../constant/userRole.js';
import { Gender } from '../../constant/genter.js';

export interface IUserModel
  extends Document<Types.ObjectId>,
    Omit<IUser, '_id'> {}

const BaseUsersSchema = new mongoose.Schema(
  {
    age: { type: Number },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    phone: { type: Number },
    password: { type: String },
    googleId: { type: String },
    healthDetails: { type: String },
    isActive: { type: Boolean, default: true },
    medicalCertificate: { type: String },
    role: {
      type: String,
      required: true,
      enum: Object.values(UserRole),
      default: UserRole.USER,
    },
    gender: {
      type: String,
      enum:Object.values(Gender),
      required: false,
    },
  },
  { timestamps: true },
);

export const UserModel = mongoose.model<IUserModel>('User', BaseUsersSchema);
