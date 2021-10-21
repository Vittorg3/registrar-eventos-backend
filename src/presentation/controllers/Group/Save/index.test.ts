import DatabaseTest from "../../../../domain/test/DatabaseTest";
import GroupSaveUseCase from "../../../../domain/usecases/Group/Save/Group.usecase";

import GroupSaveController, { GroupSaveControllerRequest } from ".";
import ValidationGroup from "../../../../domain/validation/Group";

describe('test SaveGroup controller', () => {
    test('should save an Group', async () => {
        const databaseTest = new DatabaseTest();
        const validatorDependencie = new ValidationGroup();

        const saveGroupUseCase = new GroupSaveUseCase(databaseTest, validatorDependencie);
        const saveGroupController = new GroupSaveController(saveGroupUseCase);

        const httpRequest: GroupSaveControllerRequest.request = {
            body: {
                id: 'Caso queira passar um id definido para o grupo',
                name: 'Nome do grupo',
                description: 'Descrição do grupo',
                photo: 'url da capa do grupo',
                subscribers: ['array com os integrantes do grupo']
            }
        };

        const res = await saveGroupController.handle(httpRequest);
        expect(res.statusCode).toBe(200);
    });
});