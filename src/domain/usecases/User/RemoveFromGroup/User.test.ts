import UserRemoveFromGroupUseCase from "./User";

import DatabaseTest from "../../../test/DatabaseTest";
import ValidationUser from "../../../validation/User";

describe('test User remove from group usecase', () => {
    test('should remove an user from group', async () => {
        const databaseTest = new DatabaseTest();
        const validatorDependencie = new ValidationUser();

        const removeUserFromGroupUseCase = new UserRemoveFromGroupUseCase(databaseTest, validatorDependencie);

        const res = await removeUserFromGroupUseCase.execute({group: 'id do grupo', who_remove_id: 'id de quem vai remover', who_removed_id: 'id de quem vai ser removido'});
        expect(res).toBeTruthy();
    });
});