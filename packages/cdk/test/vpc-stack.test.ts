import { SynthUtils } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";

import { VpcStack } from "../lib/vpc-stack";

test("Vpc Stack", () => {
  const app = new cdk.App();
  const stack = new VpcStack(app, "TestVpcStack");
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
