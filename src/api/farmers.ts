import { jsonApi, jsonDeserialize } from ".";

export type Farmer = {
  id: string;
  name: string;
  changed: Date;
}

export const getFarmers = async () => {
  const response = await jsonApi.get('user/user/?filter[roles.meta.drupal_internal__target_id]=ovo_farmer')
  return jsonDeserialize<Farmer[]>(response.data)
}