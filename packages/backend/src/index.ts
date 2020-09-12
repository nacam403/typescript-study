import { Handler } from "aws-lambda";
import * as awsServerlessExpress from "aws-serverless-express";

import { createApp } from "./app";

const appPromise = createApp();

export const handler: Handler = async (event, context) => {
  const app = await appPromise;
  const server = awsServerlessExpress.createServer(app);
  awsServerlessExpress.proxy(server, event, context);
};
