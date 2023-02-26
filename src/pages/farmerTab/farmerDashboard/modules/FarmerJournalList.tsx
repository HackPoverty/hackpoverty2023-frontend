import {
  IonList,
  IonItem,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonLabel,
} from "@ionic/react"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
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
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Past Journal Entries</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          {data?.map((entry) => (
            <IonItem key={entry.id} className="ion-margin-bottom">
              <IonText>
                Date: {dayjs(entry.created).format("MM ddd, YYYY")}
                <br />
                Chickens: {Number(entry.fieldInitialstock) || "Not recorded"}
              </IonText>
            </IonItem>
          ))}
        </IonList>
      </IonCardContent>
    </IonCard>
  )
}
