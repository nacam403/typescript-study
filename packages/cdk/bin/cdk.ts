#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";

import { env } from "../lib/config";
import { VpcStack } from "../lib/vpc-stack";

const app = new cdk.App();

new VpcStack(app, "VpcStack", { env });
