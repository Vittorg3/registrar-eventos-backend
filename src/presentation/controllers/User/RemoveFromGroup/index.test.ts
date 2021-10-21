import DatabaseTest from "../../../../domain/test/DatabaseTest";
import UserRemoveFromGroupUseCase from "../../../../domain/usecases/User/RemoveFromGroup/User";

import UserRemoveFromGroupController, { UserRemoveFromGroupRequest } from ".";
import ValidationUser from "../../../../domain/validation/User";

describe('test RemoveFromGroup use case', () => {
    test('should remove an user from group and return status 200', async () => {
        const databaseTest = new DatabaseTest();
        const validatorDependencie = new ValidationUser();

        const removeFromGUseCase = new UserRemoveFromGroupUseCase(databaseTest, validatorDependencie);
        const removeFromGController = new UserRemoveFromGroupController(removeFromGUseCase);

        const httpRequest: UserRemoveFromGroupRequest.request = {
            query: {
                who_remove_id: 'id de quem está removendo',
                who_removed_id: 'id de quem quer remover'
            }
        }

        const res = await removeFromGController.handle(httpRequest);
        expect(res.statusCode).toBe(200);
    });
});