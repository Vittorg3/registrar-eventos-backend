import Group from "../../../entities/Group/Group.";

import { IGroupSaveDTO } from "../../../DTO/usecases/GroupDTO";
import { IUserRepository } from "../../../repositories/User.repository";
import { IValidationGroup } from "../../../DTO/validation/Group";

export default class GroupSaveUseCase {
    constructor (
        private userRepository: IUserRepository,
        private validatorGroup: IValidationGroup
    ) {}

    async execute (data: IGroupSaveDTO) {
        this.validatorGroup.validFieldsSave(data);
        
        const groupAlreadyExist = await this.userRepository.findGroupByName(data.name);

        if(groupAlreadyExist) {
            throw new Error('Já existe um grupo com esse nome.');
        }

        return this.userRepository.saveGroup(new Group(data.who_create_group, data.name, data.description, data.photo, data.subscribers, data.id));
    }
};