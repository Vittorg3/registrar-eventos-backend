import { IEventRemoveDTO } from "../../../DTO/usecases/EventDTO";
import { IValidatorEvent } from "../../../DTO/validation/Event";
import { IUserRepository } from "../../../repositories/User.repository";

export default class EventRemoveUseCase {
    constructor (
        private userRepository: IUserRepository,
        private validatorEvent: IValidatorEvent
    ) {}
    
    execute (data: IEventRemoveDTO) {
        this.validatorEvent.validFieldsRemove(data);
        return this.userRepository.removeEvent(data);
    }
}