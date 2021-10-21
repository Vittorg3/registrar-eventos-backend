import DatabaseTest from "../../../../domain/test/DatabaseTest";
import GroupRemoveUseCase from "../../../../domain/usecases/Group/Remove/Group.usecase";

import GroupRemoveController, { GroupRemoveControllerRequest } from ".";
import ValidationGroup from "../../../../domain/validation/Group";

describe('test GroupRemove controller', () => {
    test('should remove an group', async () => {
        const databaseTest = new DatabaseTest();
        const validatorDependencie = new ValidationGroup();

        const removeGroupUseCase = new GroupRemoveUseCase(databaseTest, validatorDependencie);
        const removeGroupController = new GroupRemoveController(removeGroupUseCase);

        const httpRequest: GroupRemoveControllerRequest.request = {
            query: {
                id_group: 'id do grupo que quer editar'
            }
        };

        const res = await removeGroupController.handle(httpRequest);
        expect(res.statusCode).toBe(200);
    });
});