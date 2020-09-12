#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { AssetCode } from "@aws-cdk/aws-lambda";

import { env } from "../lib/config";
import { VpcStack } from "../lib/vpc-stack";
import { BackendStack } from "../lib/backend-stack";

const app = new cdk.App();

const vpcStack = new VpcStack(app, "VpcStack", { env });

const assetCode = new AssetCode(`${__dirname}/../../backend/dist`);
const backendStack = new BackendStack(app, "BackendStack", {
  env,
  vpc: vpcStack.vpc,
  assetCode,
});
