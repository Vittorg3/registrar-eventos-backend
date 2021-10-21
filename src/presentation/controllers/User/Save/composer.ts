import UserSaveController from ".";
import UserUseCase from "../../../../domain/usecases/User/Save/User.usecase";

import { IUserRepository } from "../../../../domain/repositories/User.repository";
import { ICryptRepository } from "../../../../domain/repositories/Crypt.repository";
import { IValidatorUser } from "../../../../domain/DTO/validation/User";

export const controller = (database: IUserRepository, cryptService: ICryptRepository, validation: IValidatorUser) => {
    const userSaveUseCase = new UserUseCase(database, cryptService, validation);
    const userSaveController = new UserSaveController(userSaveUseCase);
    return userSaveController;
};