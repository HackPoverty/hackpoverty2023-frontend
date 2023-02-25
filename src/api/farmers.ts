import { jsonApi, jsonDeserialize } from "."

export type Farmer = {
  id: string,
  displayName: string,
  fieldFarmerLastVisited: Date,
}

export type TechnicianVisit = {
  id: string,
  title: string,
  created: Date,
}

export const getFarmers = async () => {
  const response = await jsonApi.get('user/user/?filter[roles.meta.drupal_internal__target_id]=ovo_farmer')
  return jsonDeserialize<Farmer[]>(response.data)
}

export const getFarmerById = async (farmerId: string) => {
  const response = await jsonApi.get(`user/user/${farmerId}`)
  return jsonDeserialize<Farmer>(response.data)
}

export const getTechnicianVisits = async (farmerId: string) => {
  const reponse = await jsonApi.get(`node/technician_visit?filter[field_for_farmer.id]=${farmerId}`)
  return jsonDeserialize<TechnicianVisit[]>(reponse.data)
}
