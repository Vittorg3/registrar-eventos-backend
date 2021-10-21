import HttpResponse from "../../../../domain/entities/Http/HttpResponse";
import GroupRemoveUseCase from "../../../../domain/usecases/Group/Remove/Group.usecase";

export default class GroupRemoveController {
    constructor (
        private removeGroupUseCase: GroupRemoveUseCase
    ) {}

    async handle (request: GroupRemoveControllerRequest.request) {
        const response = new HttpResponse();
        const data = request.query;

        try {
            const res = await this.removeGroupUseCase.execute(data);
            return response.successResponse({res});

        } catch (error) {
            let err = (error as Error).message;
            return response.badRequest({err});
        }
    }
}

export namespace GroupRemoveControllerRequest {
    export type request = {
        query: {
            id_group: string;
        }
    }
}