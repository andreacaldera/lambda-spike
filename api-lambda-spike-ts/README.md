# Lambda based API with Typescript

## Deploy to AWS

`serverless deploy -r eu-west-2`

## Run locally

### Invoke lambda directly

Invoke lambda directly
`serverless invoke local --function hello`

### Run locally with API gateway

`serverless offline -f hello --httpPort 4001 --websocketPort 4002 --lambdaPort 4003 --useDocker`
(Ports are optional)

## References

This project is build with this tutorial https://medium.com/better-programming/set-up-your-serverless-project-with-typescript-ready-to-deploy-to-aws-6cfd7b2e5263 as a starting point.
