import HttpResponse from "../../../../domain/entities/Http/HttpResponse";
import GroupEditUseCase from "../../../../domain/usecases/Group/Edit/Group.usecase";

import { TypeHttpResponse } from "../../../../domain/types/Http";

export default class GroupEditController {
    constructor (
        private editGroupUseCase: GroupEditUseCase
    ) {}

    async handle (request: GroupEditControllerRequest.request): Promise<TypeHttpResponse> {
        const response = new HttpResponse();
        const data = request.body;

        try {
            const res = await this.editGroupUseCase.execute(data);
            return response.successResponse({res});

        } catch (error) {
            let err = (error as Error).message;
            return response.badRequest({err});
        }
    }
}

export namespace GroupEditControllerRequest {
    export type request = {
        body: {
            id_group: string;
            name?: string;
            description?: string;
            photo?: string;
            ssubscribers?: string[];
        }
    }
}