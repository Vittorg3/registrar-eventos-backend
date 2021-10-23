import DatabaseTest from "../../../test/DatabaseTest";
import ValidationGroup from "../../../validation/Group";
import GroupRemoveUseCase from "./Group.usecase";

describe('test GroupRemove usecase', () => {
    test('should remove an group', async () => {
        const databaseTest = new DatabaseTest();
        const validatorDependencie = new ValidationGroup();

        const removeGroupUseCase = new GroupRemoveUseCase(databaseTest, validatorDependencie);

        const res = await removeGroupUseCase.execute({who_remove_group: "id de quem quer remover", id_group: 'id do group para remove-lo'});
        expect(res).toBeTruthy();
    });
});