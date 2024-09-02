import dotenv from "dotenv";
dotenv.config();
const requiredEnvironmentVariables = ["DATABASE_URL"];

for (let requiredVariable of requiredEnvironmentVariables) {
  if (!process.env[requiredVariable]) {
    console.error(`${requiredVariable} not specified in environment`);
    process.exit(1);
  }
}

import express, { RequestHandler } from "express";
import bodyParser from "body-parser";

import connectMongoose from "./database/index";

import notes from "./routes/notes";
import { parse } from "url";

function initServer() {
  const app = express();

  app.use(bodyParser.json() as RequestHandler);
  app.use(bodyParser.urlencoded({ extended: false }) as RequestHandler);

  app.get("/", async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { query } = parsedUrl;

    res.send({ status: "INTRO" });
  });

  app.use("/notes", notes);

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`Listening on http://127.0.0.1:${port}`);
  });
}
process.on("unhandledRejection", (err) => {
  console.log(err);
});
connectMongoose().then(initServer);
