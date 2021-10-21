import HttpResponse from "../../../../domain/entities/Http/HttpResponse";
import EventRemoveUseCase from "../../../../domain/usecases/Event/Remove/Event";

import { TypeHttpResponse } from "../../../../domain/types/Http";

export default class EventRemoveController {
    constructor (
        private eventRemoveUseCase: EventRemoveUseCase
    ) {} 

    async handle (request: EventRemoveControllerRequest.request): Promise<TypeHttpResponse> {
        const response = new HttpResponse();
        const data = request.query;

        try {
            const res = await this.eventRemoveUseCase.execute(data);
            return response.successResponse({res});

        } catch (error) {
            let err = (error as Error).message;
            return response.badRequest({err});
        }
    }
};

export namespace EventRemoveControllerRequest {
    export type request = {
        query: {
            event_id: string;
            who_edit_id: string;
        }
    }
};