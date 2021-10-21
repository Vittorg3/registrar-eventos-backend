import EventRemoveUseCase from "./Event";

import DatabaseTest from "../../../test/DatabaseTest";
import ValidationEvent from "../../../validation/Event";

describe('test remove event usecase', () => {
    test('should remove an event', async () => {
        const databaseTest = new DatabaseTest();
        const validatorDependencie = new ValidationEvent();

        const eventRemoveUseCase = new EventRemoveUseCase(databaseTest, validatorDependencie);

        const removed = await eventRemoveUseCase.execute({event_id: 'id do evento aqui', who_edit_id: 'id de quem está deletando'});
        expect(removed).toBe(true);
    });
});