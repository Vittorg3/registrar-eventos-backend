import DatabaseTest from "../../../../domain/test/DatabaseTest";
import GroupEditUseCase from "../../../../domain/usecases/Group/Edit/Group.usecase";

import GroupEditController, { GroupEditControllerRequest } from ".";
import ValidationGroup from "../../../../domain/validation/Group";

describe('test GroupEdit controller', () => {
    test('should edit an group', async () => {
        const databaseTest = new DatabaseTest();
        const validationDependencie = new ValidationGroup();

        const editGroupUseCase = new GroupEditUseCase(databaseTest, validationDependencie);
        const editGroupController = new GroupEditController(editGroupUseCase);

        const httpRequest: GroupEditControllerRequest.request = {
            body: {
                id_group: 'id do grupo que quer editar',
                name: 'nome de grupo qualquer'
            }
        };

        const res = await editGroupController.handle(httpRequest);
        expect(res.statusCode).toBe(200);
    });
});