import UserInviteToGroupUseCase from "./User";

import DatabaseTest from "../../../test/DatabaseTest";
import ValidationUser from "../../../validation/User";

describe('test User invite to group', () => {
    test('should invite an user to group', async () => {
        const databaseTest = new DatabaseTest();
        const validationDependencie = new ValidationUser();

        const userInviteGroupUseCase = new UserInviteToGroupUseCase(databaseTest, validationDependencie);

        const res = await userInviteGroupUseCase.execute({who_invite_id: 'id de quem convidou', who_invited_id: 'id do usuario convidado', group: 'nome do grupo aqui'});
        expect(res).toBeTruthy();
    });
});