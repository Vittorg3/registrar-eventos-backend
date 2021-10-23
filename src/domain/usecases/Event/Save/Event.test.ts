import Event from "../../../entities/Event/Event";
import EventUseCase from "./Event.usecase";

import DatabaseTest from "../../../test/DatabaseTest";
import ValidatorEvent from "../../../validation/Event";

describe('test Event use case', () => {
	test('should save an event', async () => {
		const database = new DatabaseTest();
		const validatorDependencie = new ValidatorEvent();

		const eventUseCase = new EventUseCase(database, validatorDependencie);

		const event = new Event('Nome do Evento', 'Descrição qualquer', 'empty', new Date());
		const res = await eventUseCase.execute({name: event.name, date: event.date, description: event.description, id: event.id, photo: event.photo, who_create_event: 'id de quem criou'});

		expect(res).toBe(true);
	});
});