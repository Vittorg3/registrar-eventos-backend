import User from "../../../entities/User/User";
import UserUseCase from "./User.usecase";

import DatabaseTest from "../../../test/DatabaseTest";
import CryptServiceTest from "../../../test/CryptServiceTest";
import ValidationUser from "../../../validation/User";

describe('test save User usecase', () => {
    test('should save an User', async () => {
        const databaseTest = new DatabaseTest();
        const cryptService = new CryptServiceTest();
        const validationDependencie = new ValidationUser();

        const userUseCase = new UserUseCase(databaseTest, cryptService, validationDependencie);

        const user = new User('Nome qualquer aqui', 23,'Nome do grupo qualquer aqui', 'email@email', 'senha');

        const saved = await userUseCase.execute({
            name: user.name,
            age: user.age,
            group: user.group,
            email: user.email,
            password: user.password,
            id: user.id
        });

        expect(saved).toBe(true);

    });
});