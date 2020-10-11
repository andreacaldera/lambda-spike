# Lambda based API with Typescript

## Prerequisite

Serverless: `npm i serverless -i`
Go
Install pep (deprecated, should come with go?)

## Deploy to AWS

`serverless deploy`

## Run locally

### Invoke lambda directly

Invoke lambda directly
`serverless invoke local --function hello`

### Run locally with API gateway

`serverless offline -f hello --httpPort 5001 --websocketPort 5002 --lambdaPort 5003 --useDocker`
(Ports are optional)

## References

This project is build with this tutorial https://www.serverless.com/blog/framework-example-golang-lambda-support as a starting point.
