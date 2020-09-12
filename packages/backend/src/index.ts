import { Handler } from "aws-lambda";
import * as awsServerlessExpress from "aws-serverless-express";

import { createApp } from "./app";

let server: ReturnType<typeof awsServerlessExpress.createServer>;

export const handler: Handler = async (event, context) => {
  if (!server) {
    const app = await createApp();
    server = awsServerlessExpress.createServer(app);
  }
  return awsServerlessExpress.proxy(server, event, context, "PROMISE").promise;
};
