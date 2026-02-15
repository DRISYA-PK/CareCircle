import { IAuthService } from '../interface/IAuthService.js';
import { IUserRepository } from '../../repository/interface/IUserRepository.js';
import { IUserModel } from '../../models/implements/user.model.js';
import { createHttpError } from '../../utils/http-error.util.js';
import { HttpStatus } from '../../constant/status.constant.js';
import { HttpResponse } from '../../constant/response-message.constant.js';
export class AuthService implements IAuthService {
  constructor(private readonly userRepository: IUserRepository) {}
  async signUp(user: IUserModel): Promise<string> {
      const userExist=await this.userRepository.findByEmail(user.email)
      if(userExist)
      {
          createHttpError(HttpStatus.CONFLICT,HttpResponse.EMAIL_EXIST)
      }
      
  }
}
