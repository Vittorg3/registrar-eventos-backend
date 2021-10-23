import HttpResponse from "../../../../domain/entities/Http/HttpResponse";
import GroupSaveUseCase from "../../../../domain/usecases/Group/Save/Group.usecase";

import { TypeHttpResponse } from "../../../../domain/types/Http";

export default class GroupSaveController {
    constructor (
        private saveGroupUseCase: GroupSaveUseCase
    ) {}

    async handle (request: GroupSaveControllerRequest.request): Promise<TypeHttpResponse> {
        const response = new HttpResponse();
        const data = request.body;

        try {
            const res = await this.saveGroupUseCase.execute(data);
            return response.successResponse({res});
            
        } catch (error) {
            let err = (error as Error).message;
            return response.badRequest({err});
        }
    };
}

export namespace GroupSaveControllerRequest {
    export type request = {
        body: {
            who_create_group: string;
            id?: string;
            name: string;
            description: string;
            photo?: string;
            subscribers?: string[]
        }
    }
}