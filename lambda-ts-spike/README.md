# Typescript-based Lambda

## Prerequisite

- Serverless: `npm i serverless -i`
- AWS credential

## Create new lambda

- `mkdir lambda-ts`
- `cd lambda-ts`
- `sls create --template aws-nodejs-typescript`
- `npm i`
- `npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`
- Uncomment out ForkTsCheckerWebpackPlugin in webpack.config.js
- Change default AWS region in serverless.ts (in our case eu-west-2)
- `npm i serverless-offline --sav-dev`
- Add `serverless-offline` plugins to serverless.js

## Deploy

`make && sls deploy`

## Run locally

### Invoke lambda directly

`sls invoke local --function hello`

### With API gateway

`sls offline -f hello --httpPort 4001 --websocketPort 4002 --lambdaPort 4003`
(Ports are optional)

## References

This project is build with this tutorial https://medium.com/better-programming/set-up-your-serverless-project-with-typescript-ready-to-deploy-to-aws-6cfd7b2e5263 as a starting point.
