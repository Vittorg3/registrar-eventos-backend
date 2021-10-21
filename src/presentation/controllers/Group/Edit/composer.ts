import GroupEditController from ".";
import GroupEditUseCase from "../../../../domain/usecases/Group/Edit/Group.usecase";

import { IUserRepository } from "../../../../domain/repositories/User.repository";
import { IValidationGroup } from "../../../../domain/DTO/validation/Group";

export const controller = (database: IUserRepository, validation: IValidationGroup) => {
    const editControllerUseCase = new GroupEditUseCase(database, validation);
    const controller = new GroupEditController(editControllerUseCase);
    return controller;
};