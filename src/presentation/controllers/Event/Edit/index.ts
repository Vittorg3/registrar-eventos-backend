import HttpResponse from "../../../../domain/entities/Http/HttpResponse";
import EventEditUseCase from "../../../../domain/usecases/Event/Edit/Event";

import { TypeHttpResponse } from "../../../../domain/types/Http";

export default class EventEditController {
    constructor (
        private eventEditUseCase: EventEditUseCase
    ) {} 

    async handle (request: EventEditControllerRequest.request): Promise<TypeHttpResponse> {
        const response = new HttpResponse();
        const data = request.body;

        try {
            const res = await this.eventEditUseCase.execute(data);
            return response.successResponse({res});

        } catch (error) {
            let err = (error as Error).message;
            return response.badRequest({err});
        }
    }
};

export namespace EventEditControllerRequest {
    export type request = {
        body: {
            event_id: string;
            who_edit_id: string;
            name?: string;
            description?: string;
            date?: Date;
            photo?: string;
        }
    }
};