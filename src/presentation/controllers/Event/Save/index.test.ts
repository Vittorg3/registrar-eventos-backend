import DatabaseTest from "../../../../domain/test/DatabaseTest";
import EventUseCase from "../../../../domain/usecases/Event/Save/Event.usecase";

import EventSaveController, { EventSaveRequest } from ".";
import ValidatorEvent from "../../../../domain/validation/Event";

describe('test EventSave controller', () => {
    test('should save an event and return status 200', async () => {
        const databaseTest = new DatabaseTest();
        const validatorDependencie = new ValidatorEvent();

        const eventSaveUseCase = new EventUseCase(databaseTest, validatorDependencie);
        const eventSaveController = new EventSaveController(eventSaveUseCase);

        const httpRequest: EventSaveRequest.request = {
            body: {
                name: 'Nome do evento aqui',
                description: 'Evento para teste',
                date: new Date(),
                photo: 'url da photo aqui'
            }
        };

        const res = await eventSaveController.handle(httpRequest);
        expect(res.statusCode).toBe(200);
    });
});