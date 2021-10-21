import EventRemoveController from ".";
import EventRemoveUseCase from "../../../../domain/usecases/Event/Remove/Event";

import { IUserRepository } from "../../../../domain/repositories/User.repository";
import { IValidatorEvent } from "../../../../domain/DTO/validation/Event";

export const controller = (database: IUserRepository, validator: IValidatorEvent) => {
    const eventRemoveUseCase = new EventRemoveUseCase(database, validator);
    const controller = new EventRemoveController(eventRemoveUseCase);
    return controller;
};