import { FarmerJournal } from "src/types/contentTypes"
import { jsonApi, jsonDeserialize } from "."

export const getFarmerJournalLogs = async (uid: string) => {
  const reponse = await jsonApi.get(
    `node/farmer_daily_journal?filter[uid.meta.drupal_internal__target_id]=${uid}`
  )
  return jsonDeserialize<FarmerJournal[]>(reponse.data)
}
