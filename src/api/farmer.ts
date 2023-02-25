import { CaseType, serialize } from "jsonapi-fractal";
import { FarmerJournal } from "src/types/contentTypes";
import { Node } from "src/types/highLevelTypes";
import { jsonApi, jsonDeserialize } from ".";

export const postFarmerJournal = async (journal: FarmerJournal) => {
  return jsonApi.post(
    `node/farmer_daily_journal`,
    serialize<FarmerJournal>(journal, "node--farmer_daily_journal", {
      changeCase: CaseType.snakeCase,
    }),
    {
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
    });
}

export const getFarmerJournalLogs = async (uid: string) => {
  const reponse = await jsonApi.get(
    `node/farmer_daily_journal?filter[uid.meta.drupal_internal__target_id]=${uid}`
  )
  return jsonDeserialize<Node<FarmerJournal>[]>(reponse.data)
}
