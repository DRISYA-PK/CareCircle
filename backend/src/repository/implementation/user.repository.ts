import { IUserModel,UserModel } from "../../models/implements/user.model.js";
import { BaseRepository } from "../baseRepository.js";
import { IUserRepository } from "../interface/IUserRepository.js";

export class UserRepository extends BaseRepository<IUserModel> implements IUserRepository{
 constructor() {
    super(UserModel);
  }



  async findByEmail(email: string): Promise<IUserModel | null> {
    try {
      return await this.model.findOne({ email });
    } catch (error) {
      console.error(error);
      throw new Error("Error finding user by email");
    }
  }

}