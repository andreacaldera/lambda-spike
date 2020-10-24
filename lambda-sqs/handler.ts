import { SQSHandler } from "aws-lambda";
import "source-map-support/register";

export const myQueueHandler: SQSHandler = async (event, _context) => {
  console.log("live coding - processing MyQueue sqs handler", event);
};
