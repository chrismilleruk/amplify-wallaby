"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
exports.handler = handler;
