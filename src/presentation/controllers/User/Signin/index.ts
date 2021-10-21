import HttpResponse from "../../../../domain/entities/Http/HttpResponse";
import { TypeHttpResponse } from "../../../../domain/types/Http";
import SigninUseCase from "../../../../domain/usecases/User/Signin/Signin";

export default class SigninController {
    constructor ( 
        private userSigninUseCase: SigninUseCase
    ) {}

    async handle (request: SigninControllerRequest.request): Promise<TypeHttpResponse> {
        const response = new HttpResponse();
        const data = request.body;

        try {
            const res = await this.userSigninUseCase.execute(data);
            const user = {
                id: res.user.id,
                name: res.user.name,
                age: res.user.age,
                group: res.user.group,
                email: res.user.email
            };

            return response.successResponse({user, token: res.token});
            
        } catch (error) {
            let err = (error as Error).message;
            return response.badRequest({err});
        }
    }
};

export namespace SigninControllerRequest {
    export type request = {
        body: {
            email: string;
            password: string;
        }
    }
}