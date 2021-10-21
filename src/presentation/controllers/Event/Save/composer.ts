import EventSaveController from ".";
import { IValidatorEvent } from "../../../../domain/DTO/validation/Event";
import { IUserRepository } from "../../../../domain/repositories/User.repository";
import EventUseCase from "../../../../domain/usecases/Event/Save/Event.usecase";

export const controller = (database: IUserRepository, validator: IValidatorEvent) => {
    const eventSaveUseCase = new EventUseCase(database, validator);
    const controller = new EventSaveController(eventSaveUseCase); 
    return controller;
};