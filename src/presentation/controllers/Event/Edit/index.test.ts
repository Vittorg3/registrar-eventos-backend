import DatabaseTest from "../../../../domain/test/DatabaseTest";
import EventEditUseCase from "../../../../domain/usecases/Event/Edit/Event";

import EventEditController, { EventEditControllerRequest } from ".";
import ValidationEvent from "../../../../domain/validation/Event";

describe('test EventEdit controller', () => {
    test('should edit an event and return status 200', async () => {
        const databaseTest = new DatabaseTest();
        const validatorDependencie = new ValidationEvent();

        const eventEditUseCase = new EventEditUseCase(databaseTest, validatorDependencie);
        const eventEditController = new EventEditController(eventEditUseCase);

        const httpRequest: EventEditControllerRequest.request = {
            body: {
                event_id: 'id do evento',
                who_edit_id: 'id de quem está editando',
                name: 'Nome qualquer para editar',
                
            }
        };

        const res = await eventEditController.handle(httpRequest);
        expect(res.statusCode).toBe(200);
    });
});