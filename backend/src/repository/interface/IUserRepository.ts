import { UserModel,IUserModel } from "../../models/implements/user.model.js"

export interface IUserRepository{
  create(user:IUserModel):Promise<IUserModel>
   findById(id: string): Promise<IUserModel | null>;
   findByEmail(email: string): Promise<IUserModel | null>;
   
}

