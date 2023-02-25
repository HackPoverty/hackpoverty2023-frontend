import { TechnicianVisit } from "src/types/contentTypes"
import { jsonApi, jsonDeserialize } from "."
import { serialize, CaseType } from "jsonapi-fractal"

export const getTechnicianVisits = async (farmerId: string) => {
  const reponse = await jsonApi.get(`node/technician_visit?filter[field_for_farmer.id]=${farmerId}`)
  return jsonDeserialize<TechnicianVisit[]>(reponse.data)
}

export const postTechnicianVisit = async (farmerId: string, visit: TechnicianVisit) => {
  const postdata = {
    ...visit,
    fieldForFarmer: {
      id: farmerId,
    },
  }

  const serialized = serialize<typeof postdata>(postdata, "node--technician_visit", {
    changeCase: CaseType.snakeCase,
    relationships: {
      fieldForFarmer: "user--user",
    },
  })

  return jsonApi.post(`node/technician_visit`, serialized, {
    headers: {
      'Content-Type': 'application/vnd.api+json',
    },
  });
}
