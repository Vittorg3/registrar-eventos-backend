import UserInviteToGroupController from ".";
import UserInviteToGroupUseCase from "../../../../domain/usecases/User/InviteToGroup/User";

import { IUserRepository } from "../../../../domain/repositories/User.repository";
import { IValidatorUser } from "../../../../domain/DTO/validation/User";

export const controller = (database: IUserRepository, validation: IValidatorUser) => {
    const userInviteToGroupUseCase = new UserInviteToGroupUseCase(database, validation);
    const controller = new UserInviteToGroupController(userInviteToGroupUseCase);
    return controller;
};