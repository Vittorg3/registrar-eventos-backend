import UserRemoveFromGroupController from ".";
import UserRemoveFromGroupUseCase from "../../../../domain/usecases/User/RemoveFromGroup/User";

import { IUserRepository } from "../../../../domain/repositories/User.repository";
import { IValidatorUser } from "../../../../domain/DTO/validation/User";

export const controller = (database: IUserRepository, validator: IValidatorUser) => {
    const userRemoveFromGUseCase = new UserRemoveFromGroupUseCase(database, validator);
    const controller = new UserRemoveFromGroupController(userRemoveFromGUseCase);
    return controller;
};