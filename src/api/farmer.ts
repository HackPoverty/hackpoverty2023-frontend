import { CaseType, serialize } from "jsonapi-fractal";
import { FarmerJournal, FarmerJournalNode } from "src/types/contentTypes";
import { Node } from "src/types/highLevelTypes";
import { jsonApi, jsonDeserialize } from ".";


type PostFarmJournal = {
  journal: FarmerJournal,
}

export const postFarmerJournal = async ({journal} : PostFarmJournal) => {
  const now = new Date();
  const dateString = now.toLocaleDateString();

  const postdata : FarmerJournalNode = {
    ...journal,
    // TODO: Generate descriptive title
    title: `${dateString} Journal`,
  }

  const serialized = serialize<typeof postdata>(postdata, "node--technician_visit", {
    changeCase: CaseType.snakeCase,
    relationships: {
      uid: "user--user",
    },
  })

  return jsonApi.post(`node/farmer_daily_journal`, serialized, {
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
