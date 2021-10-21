import DatabaseTest from "../../../../domain/test/DatabaseTest";
import UserInviteToGroupUseCase from "../../../../domain/usecases/User/InviteToGroup/User";

import UserInviteToGroupController, { UserInviteToGroupRequest } from ".";
import ValidationUser from "../../../../domain/validation/User";

describe('test UserInviteToGroup controller', () => {
    test('should invite an user to an group and return an status 200', async () => {
        const databaseTest = new DatabaseTest();
        const validationDependencie = new ValidationUser();

        const userInviteToGroupUseCase = new UserInviteToGroupUseCase(databaseTest, validationDependencie);
        const userInviteToGrouController = new UserInviteToGroupController(userInviteToGroupUseCase);

        const httpRequest: UserInviteToGroupRequest.request = {
            body: {
                who_invite_id: 'id de quem vai convidar',
                who_invited_id: 'id de quem vai ser convidado'
            }
        };

        const res = await userInviteToGrouController.handle(httpRequest);
        expect(res.statusCode).toBe(200);
    });
});