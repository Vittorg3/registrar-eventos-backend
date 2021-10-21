import { IUserSigninDTO } from "../../../DTO/usecases/UserDTO";
import { IValidatorUser } from "../../../DTO/validation/User";
import { IUserRepository } from "../../../repositories/User.repository";

export default class SigninUseCase {
    constructor (
        private userRepository: IUserRepository,
        private validationUser: IValidatorUser
    ) {}

    execute (data: IUserSigninDTO) {
        this.validationUser.validFieldsSignin(data);
        return this.userRepository.signin(data);
    }
};