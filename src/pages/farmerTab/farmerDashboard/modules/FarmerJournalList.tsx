import { IonList, IonItem, IonText } from "@ionic/react"
import { useQuery } from "@tanstack/react-query"
import { getFarmerJournalLogs } from "src/api/farmer"
import { useAuth } from "src/auth"

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
    <IonList>
      {data?.map((journalEntry) => (
        <IonItem key={journalEntry.id} className="ion-margin-bottom">
          <IonText>{JSON.stringify(journalEntry)}</IonText>
        </IonItem>
      ))}
    </IonList>
  )
}
