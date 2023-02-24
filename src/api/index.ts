import axios from "axios"
import { CaseType, deserialize } from "jsonapi-fractal"
import { TOKEN_STORAGE_KEY } from "src/auth"

const baseApi = axios.create({
  baseURL: import.meta.env.BASE_URL,
})

const jsonApi = axios.create({
  baseURL: import.meta.env.VITE_JSON_API_URL,
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


