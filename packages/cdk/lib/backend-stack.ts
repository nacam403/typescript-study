import * as cdk from "@aws-cdk/core";
import * as ec2 from "@aws-cdk/aws-ec2";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigateway from "@aws-cdk/aws-apigateway";

type BackendStackProps = {
  env: cdk.Environment;
  vpc: ec2.Vpc;
  assetCode: lambda.AssetCode;
} & cdk.StackProps;

export class BackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: BackendStackProps) {
    super(scope, id, props);

    const lambdaFunction = new lambda.Function(this, "MyFunction", {
      functionName: "my-function",
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: "index.handler",
      code: props.assetCode,
      vpc: props.vpc,
    });

    const lambdaIntegration = new apigateway.LambdaIntegration(lambdaFunction);

    const restApi = new apigateway.RestApi(this, "my-api");

    restApi.root.addProxy({
      defaultIntegration: lambdaIntegration,
    });
  }
}
