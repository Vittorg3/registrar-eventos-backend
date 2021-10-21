import DatabaseTest from "../../../../domain/test/DatabaseTest";
import EventRemoveUseCase from "../../../../domain/usecases/Event/Remove/Event";

import EventRemoveController, { EventRemoveControllerRequest } from ".";
import ValidationEvent from "../../../../domain/validation/Event";

describe('test EventRemove controller', () => {
    test('should remove an event an return status 200', async () => {
        const databaseTest = new DatabaseTest();
        const validatorDependencie = new ValidationEvent();

        const eventRemoveUseCase = new EventRemoveUseCase(databaseTest, validatorDependencie);
        const eventRemoveController = new EventRemoveController(eventRemoveUseCase);

        const httpRequest: EventRemoveControllerRequest.request = {
            query: {
                event_id: 'id do evento aqui',
                who_edit_id: 'id de quem está removendo o evento'
            }
        };

        const res = await eventRemoveController.handle(httpRequest);
        expect(res.statusCode).toBe(200);
    });
});