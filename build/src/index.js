"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const requiredEnvironmentVariables = ["DATABASE_URL"];
for (let requiredVariable of requiredEnvironmentVariables) {
    if (!process.env[requiredVariable]) {
        console.error(`${requiredVariable} not specified in environment`);
        process.exit(1);
    }
}
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// import cookieParser from "cookie-parser";
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = __importDefault(require("./database/index"));
const notes_1 = __importDefault(require("./routes/notes"));
const url_1 = require("url");
function initServer() {
    console.log("HEREEE");
    const app = (0, express_1.default)();
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    // app.use(cookieParser());
    app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
    app.get("/", async (req, res) => {
        const parsedUrl = (0, url_1.parse)(req.url, true);
        const { query } = parsedUrl;
        console.log("INTROOOO");
        // nextApp.render(req, res, "/", query);
    });
    app.use("/notes", notes_1.default);
    // catch 40 and forward to error handler
    app.use((req, res, next) => {
        next(new Error("Not Found"));
    });
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
        console.log(`Listening on http://127.0.0.1:${port}`);
    });
}
process.on("unhandledRejection", (err) => {
    console.log(err);
});
(0, index_1.default)().then(initServer);
// .then(async () => {
//   await nextApp.prepare();
// })
// .then(initServer)
// .catch((e: Error) => {
//   console.error(e);
//   process.exit(1);
// });
//# sourceMappingURL=index.js.map