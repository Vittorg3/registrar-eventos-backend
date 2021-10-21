import { IUserInviteToGroupDTO } from "../../../DTO/usecases/UserDTO";
import { IValidatorUser } from "../../../DTO/validation/User";
import { IUserRepository } from "../../../repositories/User.repository";

export default class UserInviteToGroupUseCase {
    constructor (
        private userRepository: IUserRepository,
        private validationUser: IValidatorUser
    ) {}

    execute (data: IUserInviteToGroupDTO) {
        this.validationUser.validFieldsInviteToGroup(data);
        return this.userRepository.inviteToGroup(data);
    }
};