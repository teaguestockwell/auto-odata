import { create } from "./dist/index.module.js"
import {config} from 'dotenv';

const env = (() => {
  config()
  const azureOpenAiKey = process.env.AZURE_OPENAI_KEY
  const azureOpenAiEndpoint = process.env.AZURE_OPENAI_ENDPOINT
  return {azureOpenAiKey, azureOpenAiEndpoint}
})();

const main = async () => {
  const client = await create({...env, openApiUrl: "https://raw.githubusercontent.com/oasis-tcs/odata-openapi/main/examples/Northwind-V3.openapi3.json"})
  if (!client) throw 'no client'
  console.log(JSON.stringify(client, null, 2))
}

main().then(() => {
  process.exit(0)
}).catch(() => {
  process.exit(1)
})