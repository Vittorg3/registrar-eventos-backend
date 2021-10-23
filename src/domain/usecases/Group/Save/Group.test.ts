import Group from "../../../entities/Group/Group.";
import DatabaseTest from "../../../test/DatabaseTest";
import ValidationGroup from "../../../validation/Group";
import GroupSaveUseCase from "./Group.usecase";

describe('Test GroupSave usecase', () => {
    test('should save an group', async () => {
        const databaseTest = new DatabaseTest();
        const validatorDependencie = new ValidationGroup();

        const groupSaveUseCase = new GroupSaveUseCase(databaseTest, validatorDependencie);

        const group = new Group('id de quem criou', 'Nome do grupo', 'descrição do grupo');

        const res = await groupSaveUseCase.execute(group);
        expect(res).toBeTruthy();
    });
});