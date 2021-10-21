import SigninUseCase from "./Signin";

import DatabaseTest from "../../../test/DatabaseTest";
import ValidationUser from "../../../validation/User";

describe('test Signin use case', () => {
    test('should signin user', async () => {
        const databaseTest = new DatabaseTest();
        const validationDependencie = new ValidationUser();

        const signinUseCase = new SigninUseCase(databaseTest, validationDependencie);

        const res = await signinUseCase.execute({email: 'email@email', password:'senha'});
        expect(res).toHaveProperty('user');
    });
});