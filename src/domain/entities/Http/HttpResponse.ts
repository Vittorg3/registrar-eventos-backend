export default class HttpResponse {
    successResponse(body: {}) {
        return {
            body, 
            statusCode: 200
        }
    }

    badRequest(body: {}) {
        return {
            body,
            statusCode: 400
        }
    }
};