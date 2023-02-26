import { TechnicianJournalDetail } from "@/components/farmers/TechnicianVisitDetail"
import { useFormContext } from "react-hook-form"
import { TechnicianVisit } from "src/types/contentTypes"


export const FormConfirmation = () => {
  const { watch } = useFormContext<TechnicianVisit>()
  return <TechnicianJournalDetail visit={watch()} />
}