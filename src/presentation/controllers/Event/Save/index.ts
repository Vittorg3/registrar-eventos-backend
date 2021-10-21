import HttpResponse from "../../../../domain/entities/Http/HttpResponse";
import EventUseCase from "../../../../domain/usecases/Event/Save/Event.usecase";

import { TypeHttpResponse } from "../../../../domain/types/Http";

export default class EventSaveController {
    constructor (
        private eventSaveUseCase: EventUseCase
    ) {}

    async handle (request: EventSaveRequest.request): Promise<TypeHttpResponse> {
        const response = new HttpResponse();
        const data = request.body;

        try {
            const res = await this.eventSaveUseCase.execute(data);
            return response.successResponse({res});

        } catch (error) {
            let err = (error as Error).message;
            return response.badRequest({err});
        }
    }
};

export namespace EventSaveRequest {
    export type request = {
        body: {
            id?: string;
            name: string;
            description: string;
            date: Date;
            photo?: string;
        }
    }
}