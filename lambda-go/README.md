# Go-based Lambda

## Prerequisite

- Serverless: `npm i serverless -i`
- Go
- Install pep (deprecated, should come with go?)
- AWS credential

## Create new lambda

- `sls create -t aws-go-dep -p lambda-go`
- `cd lambda-go`
- `make`
- *Optional* Change default AWS region in serverless.yml (in our case eu-west-2)

## Deploy

`make && sls deploy`

## Run locally

### Invoke lambda directly

`sls invoke local --function hello`

### With API gateway

- `npm i serverless-offline --sav-dev`
- Add `plugins: - serverless-offline` to serverless.yml

`sls offline -f hello --httpPort 6001 --websocketPort 6002 --lambdaPort 6003 --useDocker`
(Ports are optional)

## References

This project is build with this tutorial https://www.serverless.com/blog/framework-example-golang-lambda-support as a starting point.
