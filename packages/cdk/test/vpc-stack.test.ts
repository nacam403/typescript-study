import assert from "assert";
import { SynthUtils } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";

import { env } from "../lib/config";
import { VpcStack } from "../lib/vpc-stack";

test("Vpc Stack", () => {
  const app = new cdk.App();
  const stack = new VpcStack(app, "TestVpcStack", { env });

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  assert.strictEqual(stack.vpc.publicSubnets.length, 2);
  assert.strictEqual(stack.vpc.privateSubnets.length, 2);
});
