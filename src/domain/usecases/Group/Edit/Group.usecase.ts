import { IGroupEditDTO } from "../../../DTO/usecases/GroupDTO";
import { IValidationGroup } from "../../../DTO/validation/Group";
import { IUserRepository } from "../../../repositories/User.repository";

export default class GroupEditUseCase {
    constructor (
        private userRepository: IUserRepository,
        private validation: IValidationGroup
    ) {}

    execute (data: IGroupEditDTO) {
        this.validation.validFieldsEdit(data);
        return this.userRepository.EditGroup(data); 
    }
};