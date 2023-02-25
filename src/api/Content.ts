import { FarmerJournal, TechnicianVisit } from "src/types/contentTypes";
import { jsonApi } from ".";

export const postFarmerJournal = async (journal: FarmerJournal) => {
  const postData = {
    data: {
      "type": "node--farmer_daily_journal",
      "attributes": journal,
    },
  }
  return jsonApi.post(`node/farmer_daily_journal`, postData, {
    headers: {
      'Content-Type': 'application/vnd.api+json',
    },
  });
}

export const postTechnicianVisit = async (visit: TechnicianVisit) => {
  const postData = {
    data: {
      "type": "node--technician_visit",
      "attributes": visit,
    },
  }
  return jsonApi.post(`node/technician_visit`, postData, {
    headers: {
      'Content-Type': 'application/vnd.api+json',
    },
  });
}
