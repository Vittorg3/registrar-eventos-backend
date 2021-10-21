import EventEditController from ".";
import EventEditUseCase from "../../../../domain/usecases/Event/Edit/Event";

import { IUserRepository } from "../../../../domain/repositories/User.repository";
import { IValidatorEvent } from "../../../../domain/DTO/validation/Event";

export const controller = (database: IUserRepository, validator: IValidatorEvent) => {
    const eventEditUseCase = new EventEditUseCase(database, validator);
    const controller = new EventEditController(eventEditUseCase);
    return controller;
};