import type { Serverless } from "serverless/aws";

const serverlessConfiguration: Serverless = {
  service: {
    name: "lambda-sqs",
    // app and org for use with dashboard.serverless.com
    // app: your-app-name,
    // org: your-org-name,
  },
  frameworkVersion: "2",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },

    "serverless-offline-sqs": {
      apiVersion: "2012-11-05",
      endpoint: "http://0.0.0.0:4100",
      accessKeyId: "root",
      secretAccessKey: "root",
      skipCacheInvalidation: false,
    },
  },
  plugins: [
    "serverless-webpack",
    "serverless-offline-sqs",
    "serverless-offline",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs12.x",
    region: "eu-west-2",
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
  },
  functions: {
    myQueueHandler: {
      handler: "handler.myQueueHandler",
      events: [
        {
          sqs: {
            arn: {
              "Fn::GetAtt": ["MyQueue", "Arn"],
            },
          },
        },
      ],
    },
  },
  resources: {
    Resources: {
      MyQueue: {
        Type: "AWS::SQS::Queue",
        Properties: { QueueName: "MyQueue" },
      },
    },
  },
};

module.exports = serverlessConfiguration;
