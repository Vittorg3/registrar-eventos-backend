import EventEditUseCase from "./Event";

import DatabaseTest from "../../../test/DatabaseTest";
import ValidationEvent from "../../../validation/Event";

describe('test Event edit usecase', () => {
    test('should edit an event', async () => {
        const databaseTest = new DatabaseTest();
        const validatorDependencie = new ValidationEvent();

        const eventEditUseCase = new EventEditUseCase(databaseTest, validatorDependencie);

        const res = await eventEditUseCase.execute({event_id: 'id do evento aqui', who_edit_id: 'id de quem quer editar', name: 'nome qualquer'});
        expect(res).toBeTruthy();
    });
}); 