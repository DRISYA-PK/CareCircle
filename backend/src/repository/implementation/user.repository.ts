import { IUserModel,UserModel } from "../../models/implements/user.model.js";
import { BaseRepository } from "../baseRepository.js";
import { IUserRepository } from "../interface/IuserRepository.js";

export class UserRepository extends BaseRepository<IUserModel> implements IUserRepository{
 constructor() {
    super(UserModel);
  }

  async findByGoogleId(googleId:string):Promise<IUserModel |null>
  {
    return await this.model.findOne({googleId})
  }
   // Find active users only
  async findActiveUsers(): Promise<IUserModel[]> {
    return await this.model.find({ isActive: true });
  }
  
  // Update user's active status
  async updateActiveStatus(
    userId: string, 
    isActive: boolean
  ): Promise<IUserModel | null> {
    return await this.updateById(userId, { isActive } as any);
  }
}