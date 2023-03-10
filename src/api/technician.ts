import { CaseType, serialize } from "jsonapi-fractal"
import { TechnicianVisit } from "src/types/contentTypes"
import { Node } from "src/types/highLevelTypes"
import { jsonApi, jsonDeserialize } from "."

export const getTechnicianVisits = async (farmerId: string) => {
  const reponse = await jsonApi.get(`node/technician_visit`, {
    params: {
      "filter[field_for_farmer.id]" :farmerId,
      "page[limit]": 14,
      "sort": "-created", 
    },
  })
  return jsonDeserialize<Node<TechnicianVisit>[]>(reponse.data)
}

type PostTechnicianVisit = {
  farmerId: string,
  visit: TechnicianVisit,
}

export const getTechnicianVisitById = async (visitId: string) => {
  const reponse = await jsonApi.get(`node/technician_visit/${visitId}`)
  return jsonDeserialize<Node<TechnicianVisit>>(reponse.data)
}

export const postTechnicianVisit = async ({farmerId, visit}: PostTechnicianVisit) => {
  const postdata = {
    ...visit,
    // TODO: Generate descriptive title
    title: "Technician Journal",
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
