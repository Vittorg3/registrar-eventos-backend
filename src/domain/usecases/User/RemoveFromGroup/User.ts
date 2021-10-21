import { IUserRemoveFromGroupDTO } from "../../../DTO/usecases/UserDTO";
import { IValidatorUser } from "../../../DTO/validation/User";
import { IUserRepository } from "../../../repositories/User.repository";

export default class UserRemoveFromGroupUseCase {
    constructor (
        private userRepository: IUserRepository,
        private validatorUser: IValidatorUser
    ) {}

    execute (data: IUserRemoveFromGroupDTO) {
        this.validatorUser.validFieldsRemoveFromGroup(data);
        return this.userRepository.removeFromGroup(data);
    }
};