import DatabaseTest from "../../../../domain/test/DatabaseTest";
import UserUseCase from "../../../../domain/usecases/User/Save/User.usecase";

import UserSaveController, { UserSaveControllerRequest } from ".";
import CryptServiceTest from "../../../../domain/test/CryptServiceTest";
import ValidationUser from "../../../../domain/validation/User";

describe('test User save controller', () => {
    test('should save an user', async () => {
        const databaseTest = new DatabaseTest();
        const cryptService = new CryptServiceTest();
        const validationDependencie = new ValidationUser();

        const userSaveUseCase = new UserUseCase(databaseTest, cryptService, validationDependencie);
        const userSaveController = new UserSaveController(userSaveUseCase);

        const httpRequest: UserSaveControllerRequest.Request = {
            body: {
                name: 'Nome aqui',
                age: 23,
                group: 'Nome do grupo aqui',
                email: 'email@aqui.com',
                password: 'senha aqui'
            }
        };

        const res = await userSaveController.handle(httpRequest);
        expect(res.statusCode).toBe(200);
    });
});