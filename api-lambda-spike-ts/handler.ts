// import { APIGatewayProxyHandler, APIGatewayEvent, Context, Callback } from 'aws-lambda';
import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

type Result = {
  statusCode: number, 
  body: string
}

export const hello: APIGatewayProxyHandler = async (
  // event: APIGatewayEvent,
  // context: Context,
  // callback: Callback,
): Promise<Result> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Live coding. Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
        // input: event,
        // context: context,
        // callback: callback,
      },
      null,
      2,
    ),
  };
};