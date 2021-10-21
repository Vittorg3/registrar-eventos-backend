import SigninController from ".";
import SigninUseCase from "../../../../domain/usecases/User/Signin/Signin";

import { IUserRepository } from "../../../../domain/repositories/User.repository";
import { IValidatorUser } from "../../../../domain/DTO/validation/User";

export const controller = (database: IUserRepository, validation: IValidatorUser) => {
    const signinUseCase = new SigninUseCase(database, validation);
    const controller = new SigninController(signinUseCase);
    return controller;
};