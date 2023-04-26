import { IonList, IonItem, IonText } from "@ionic/react"
import { useQuery } from "@tanstack/react-query"
import { t } from "i18next"
import { getFarmerJournalLogs } from "src/api/farmer"
import { useAuth } from "src/auth"
import { FarmerJournal } from "src/types/contentTypes"

export const FarmerJournalList = () => {
  const auth = useAuth()
  const farmerId = auth.user?.uid

  const { data, isLoading, error } = useQuery(
    ["farmerJournals", farmerId],
    () => getFarmerJournalLogs(farmerId as string),
    {
      enabled: farmerId !== undefined,
    }
  )

  if (isLoading) return null
  if (error)
    throw `Something went wrong with fetching farmer journal data for user ${farmerId}`

  return (
    // todo: make this pretty
    <IonList style={{marginTop: '2em', padding: '1em 0'}}>
      {data?.map((journalEntry) => {
        const createdDate = new Date(journalEntry.created);
        return (
          <IonItem key={journalEntry.id} className="ion-margin-bottom">
            <IonText>{t('journal_of')} <strong>{createdDate.toLocaleDateString()}</strong> {createdDate.toLocaleTimeString()}</IonText>
          </IonItem>
        )
      })}
    </IonList>
  )
}
