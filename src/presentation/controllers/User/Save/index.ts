import HttpResponse from "../../../../domain/entities/Http/HttpResponse";
import UserUseCase from "../../../../domain/usecases/User/Save/User.usecase";

import { TypeHttpResponse } from "../../../../domain/types/Http";

export default class UserSaveController {
    constructor (
        private userSaveUseCase: UserUseCase
    ) {}

    async handle (request: UserSaveControllerRequest.Request): Promise<TypeHttpResponse> {
        const response = new HttpResponse();
        const data = request.body;

        try {
            const res = await this.userSaveUseCase.execute(data);
            return response.successResponse({res});

        } catch (error) {
            let err = (error as Error).message;
            return response.badRequest({err});
        }
    }
};

export namespace UserSaveControllerRequest {
    export type Request = {
        body: {
            id?: string;
            name: string;
            age: number;
            group: string;
            email: string;
            password: string;
        }
    }
  }