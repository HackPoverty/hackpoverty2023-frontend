import { FarmerJournal } from "src/types/contentTypes";
import { jsonApi } from ".";
import { serialize, CaseType } from "jsonapi-fractal";

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
