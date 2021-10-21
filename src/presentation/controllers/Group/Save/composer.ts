import GroupSaveController from ".";
import GroupSaveUseCase from "../../../../domain/usecases/Group/Save/Group.usecase";

import { IUserRepository } from "../../../../domain/repositories/User.repository";
import { IValidationGroup } from "../../../../domain/DTO/validation/Group";

export const controller = (database: IUserRepository, validator: IValidationGroup) => {
    const saveGroupUseCase = new GroupSaveUseCase(database, validator);
    const controller = new GroupSaveController(saveGroupUseCase);
    return controller;
};