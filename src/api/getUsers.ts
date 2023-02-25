import { jsonApi, jsonDeserialize } from ".";
import { FARMER_ROLE_ID, Farmer, TECHNICIAN_ROLE_ID, Technician } from "./userTypes";

export const getFarmers = async () => {
  const response = await jsonApi.get(`user/user/?filter[roles.meta.drupal_internal__target_id]=${FARMER_ROLE_ID}`)
  return jsonDeserialize<Farmer[]>(response.data)
}

export const getTechnicians = async () => {
  const response = await jsonApi.get(`user/user/?filter[roles.meta.drupal_internal__target_id]=${TECHNICIAN_ROLE_ID}`)
  return jsonDeserialize<Technician[]>(response.data)
}