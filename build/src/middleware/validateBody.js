"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(schema) {
    return async function (req, res, next) {
        try {
            const values = await schema.validate(req.body);
            req.body = values;
            return next();
        }
        catch (error) {
            return res.status(400).json({
                status: false,
                error: error.errors,
            });
        }
    };
}
// "build": "tsc",
// "start": "node dist/server.js",
// "dev": "nodemon server.ts",
//# sourceMappingURL=validateBody.js.map