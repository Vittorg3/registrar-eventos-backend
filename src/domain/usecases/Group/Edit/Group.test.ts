import DatabaseTest from "../../../test/DatabaseTest";
import ValidationGroup from "../../../validation/Group";
import GroupEditUseCase from "./Group.usecase";

describe('test GroupEdit usecase', () => {
    test('should edit an group', async () => {
        const databaseTest = new DatabaseTest();

        const validationDependencie = new ValidationGroup();
        const editGroupUseCase = new GroupEditUseCase(databaseTest, validationDependencie);

        const res = await editGroupUseCase.execute({id_group: 'id do grupo para editar', name: 'nome qualquer'});
        expect(res).toBeTruthy();
    });
});