# Go-based Lambda

## Prerequisite

- Serverless: `npm i serverless -i`
- Go
- Install pep (deprecated, should come with go?)

## Create new lambda

- `serverless create -t aws-go-dep -p lambda-go`
- `cd lambda-go`
- `make`
- Change default AWS region in serverless.yml (in our case eu-west-2)
- `npm i serverless-offline --sav-dev`
- Add `plugins: serverless-offline` to serverless.yml

## Deploy

`sls deploy`

## Run locally

### Invoke lambda directly

`sls invoke local --function hello`

### With API gateway

`sls offline -f hello --httpPort 5001 --websocketPort 5002 --lambdaPort 5003 --useDocker`
(Ports are optional)

## References

This project is build with this tutorial https://www.serverless.com/blog/framework-example-golang-lambda-support as a starting point.
