import HttpResponse from "../../../../domain/entities/Http/HttpResponse";
import UserRemoveFromGroupUseCase from "../../../../domain/usecases/User/RemoveFromGroup/User";

import { TypeHttpResponse } from "../../../../domain/types/Http";

export default class UserRemoveFromGroupController {
    constructor (
        private userRemoveFromGroupUseCase: UserRemoveFromGroupUseCase
    ) {}

    async handle (request: UserRemoveFromGroupRequest.request): Promise<TypeHttpResponse> {
        const response = new HttpResponse();
        const data = request.query;

        try {
            const res = await this.userRemoveFromGroupUseCase.execute(data);
            return response.successResponse({res});

        } catch (error) {
            let err = (error as Error).message;
            return response.badRequest({err});
        }
    };
};

export namespace UserRemoveFromGroupRequest {
    export type request = {
        query: {
            who_remove_id: string;
            who_removed_id: string;
        }
    };
};