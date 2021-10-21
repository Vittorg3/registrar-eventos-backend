import { IEventEditDTO } from "../../../DTO/usecases/EventDTO";
import { IValidatorEvent } from "../../../DTO/validation/Event";
import { IUserRepository } from "../../../repositories/User.repository";

export default class EventEditUseCase {
    constructor (
        private userRepository: IUserRepository,
        private validatorEvent: IValidatorEvent
    ) {}

    execute (data: IEventEditDTO) {
        this.validatorEvent.validFieldsEdit(data);
        return this.userRepository.editEvent(data);
    }
};