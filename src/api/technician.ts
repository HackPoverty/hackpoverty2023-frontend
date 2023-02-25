import { TechnicianVisit } from "src/types/contentTypes"
import { jsonApi, jsonDeserialize } from "."

export const getTechnicianVisits = async (farmerId: string) => {
  const reponse = await jsonApi.get(`node/technician_visit?filter[field_for_farmer.id]=${farmerId}`)
  return jsonDeserialize<TechnicianVisit[]>(reponse.data)
}