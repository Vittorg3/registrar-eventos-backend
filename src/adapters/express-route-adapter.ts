import { Controller } from "../domain/types/Controller";

import { Request, Response } from 'express';

export const adapterRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const request = {
            body: req.body || {},
            query: req.query || {},
            params: req.params || {}
        }

        const httpResponse = await controller.handle(request);
        return res.status(httpResponse.statusCode).json(httpResponse.body);
    }
};