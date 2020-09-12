import { SynthUtils } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import { AssetCode } from "@aws-cdk/aws-lambda";

import { env } from "../lib/config";
import { VpcStack } from "../lib/vpc-stack";
import { BackendStack } from "../lib/backend-stack";

test("Backend Stack", () => {
  const app = new cdk.App();
  const vpcStack = new VpcStack(app, "TestVpcStack", { env });
  const assetCode = new AssetCode(`${__dirname}/../../backend/dist`);
  const backendStack = new BackendStack(app, "TestBackendStack", {
    env,
    vpc: vpcStack.vpc,
    assetCode,
  });

  expect(SynthUtils.toCloudFormation(backendStack)).toMatchSnapshot();
});
