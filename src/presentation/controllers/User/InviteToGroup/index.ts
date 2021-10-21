import HttpResponse from "../../../../domain/entities/Http/HttpResponse";
import UserInviteToGroupUseCase from "../../../../domain/usecases/User/InviteToGroup/User";

import { TypeHttpResponse } from "../../../../domain/types/Http";

export default class UserInviteToGroupController {
    constructor (
        private userInviteToGroupUseCase: UserInviteToGroupUseCase
    ) {}

    async handle (request: UserInviteToGroupRequest.request): Promise<TypeHttpResponse> {
        const response = new HttpResponse();
        const data = request.body;

        try {
            const res = await this.userInviteToGroupUseCase.execute(data);
            return response.successResponse({res});

        } catch (error) {
            let err = (error as Error).message;
            return response.badRequest({err});
        }
    };
};

export namespace UserInviteToGroupRequest {
    export type request = {
        body: {
            who_invite_id: string;
            who_invited_id: string;
        }
    };
};