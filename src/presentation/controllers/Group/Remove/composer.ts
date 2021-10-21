import GroupRemoveController from ".";
import { IValidationGroup } from "../../../../domain/DTO/validation/Group";
import { IUserRepository } from "../../../../domain/repositories/User.repository";
import GroupRemoveUseCase from "../../../../domain/usecases/Group/Remove/Group.usecase";

export const controller = (database: IUserRepository, validator: IValidationGroup) => {
    const removeGroupUseCase = new GroupRemoveUseCase(database, validator);
    const controller = new GroupRemoveController(removeGroupUseCase);
    return controller;
};