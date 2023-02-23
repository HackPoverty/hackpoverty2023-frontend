import axios from "axios"
import { CaseType, deserialize } from "jsonapi-fractal"
import { TOKEN_STORAGE_KEY } from "src/auth"

const BASE_URL = "http://chicken.albernihosting.ca" as const

const baseApi = axios.create({
  baseURL: BASE_URL,
})

const jsonApi = axios.create({
  baseURL: `${BASE_URL}/jsonapi_data`,
})

// Attach the storage key for every jsonApi request
jsonApi.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN_STORAGE_KEY) || ""}`
  return config
})

// This one smells
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function jsonDeserialize<Type>(data: any) {
  return deserialize<Type>(data, { changeCase: CaseType.camelCase }) as Type
}

export {
  baseApi,
  jsonApi,
  jsonDeserialize,
}


