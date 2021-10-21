import DatabaseTest from "../../../../domain/test/DatabaseTest";
import SigninUseCase from "../../../../domain/usecases/User/Signin/Signin";

import SigninController, { SigninControllerRequest } from ".";
import ValidationUser from "../../../../domain/validation/User";

describe('test Signin controller', () => {
    test('should return an token and data user and status 200', async () => {
        const databaseTest = new DatabaseTest();
        const validationDependencie = new ValidationUser();

        const signinUseCase = new SigninUseCase(databaseTest, validationDependencie);
        const signinController = new SigninController(signinUseCase);

        const httpRequest: SigninControllerRequest.request = {
            body: {
                email: 'email@qualquer.com',
                password: 'senha qualquer'
            }
        };

        const res = await signinController.handle(httpRequest);
        expect(res.statusCode).toBe(200);
    });
});