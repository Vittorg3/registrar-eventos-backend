import { IGroupRemoveDTO } from "../../../DTO/usecases/GroupDTO";
import { IValidationGroup } from "../../../DTO/validation/Group";
import { IUserRepository } from "../../../repositories/User.repository";

export default class GroupRemoveUseCase {
    constructor (
        private userRepository: IUserRepository,
        private validatorGroup: IValidationGroup
    ) {}

    execute (data: IGroupRemoveDTO) {
        this.validatorGroup.validFieldsRemove(data);
        return this.userRepository.RemoveGroup({who_remove_group: data.who_remove_group, id_group: data.id_group});
    }
};  