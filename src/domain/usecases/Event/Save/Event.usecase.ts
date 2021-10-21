import { IValidatorEvent } from "../../../DTO/validation/Event";
import { IEventDTO } from "../../../DTO/usecases/EventDTO";

import Event from "../../../entities/Event/Event";

import { IUserRepository } from "../../../repositories/User.repository";

export default class EventUseCase {
	constructor (
		private userRepository: IUserRepository,
		private validatorEvent: IValidatorEvent
	) {}

	async execute (data: IEventDTO) {
		this.validatorEvent.validFieldsSave(data);

		const eventAlreadyExist = await this.userRepository.findEventByName(data.name);

		if(eventAlreadyExist) {
			throw new Error('Já existe um evento com esse nome.');
		}
		
		return this.userRepository.createEvent(new Event(data.name, data.description, data.photo as string, new Date(data.date), data.id));
	}
};