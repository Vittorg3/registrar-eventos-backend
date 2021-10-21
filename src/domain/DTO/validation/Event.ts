import { IEventDTO, IEventEditDTO, IEventRemoveDTO } from "../usecases/EventDTO";

export interface IValidatorEvent {
    validFieldsSave(fields: IEventDTO): boolean | Error;
    validFieldsEdit(fields: IEventEditDTO): boolean | Error;
    validFieldsRemove(fields: IEventRemoveDTO): boolean | Error;
};