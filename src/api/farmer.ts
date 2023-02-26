import { serialize, CaseType } from "jsonapi-fractal"
import { jsonApi, jsonDeserialize } from "."
import { FarmerJournal } from "src/types/contentTypes"
import { Node } from "src/types/highLevelTypes"

export const getFarmerJournalLogs = async (uid: string) => {
  const reponse = await jsonApi.get(
    `node/farmer_daily_journal?filter[uid.meta.drupal_internal__target_id]=${uid}`
  )
  return jsonDeserialize<Node<FarmerJournal>[]>(reponse.data)
}

export const getFarmerJounalLogsById = async (farmer_id: string) => {
  const reponse = await jsonApi.get(
    `node/farmer_daily_journal?filter[uid.id]=${farmer_id}`
  )
  return jsonDeserialize<Node<FarmerJournal>[]>(reponse.data)
}

export const postFarmerJournal = async (journal: PostFarmerJournalInputs) => {
  return jsonApi.post(
    `node/farmer_daily_journal`,
    serialize<PostFarmerJournalInputs>(journal, "node--farmer_daily_journal", {
      changeCase: CaseType.snakeCase,
    }),
    {
      headers: {
        "Content-Type": "application/vnd.api+json",
      },
    }
  )
}

export type PostFarmerJournalInputs = Node<FarmerJournal>
