import { useMemo } from "react"
import dayjs from "dayjs"
import { useQuery } from "@tanstack/react-query"
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react"
import { useAuth } from "src/auth"
import { getFarmerJournalLogs } from "src/api/farmer"

export const FarmerDataDisplay = () => {
  const auth = useAuth()
  const farmerId = auth.user?.uid

  const { data, isLoading, error } = useQuery(
    ["farmerJournals", farmerId],
    () => getFarmerJournalLogs(farmerId as string),
    {
      enabled: farmerId !== undefined,
    }
  )
  const eggCount = useMemo(
    () =>
      Math.round(
        (data
          ?.filter(
            (entry) => dayjs(entry.created) > dayjs().subtract(7, "days")
          )
          .reduce((eggRunningSum, entry) => {
            return (
              eggRunningSum +
              (entry.fieldSmallEggs || 0) +
              (entry.fieldMediumEggs || 0) +
              (entry.fieldLargeEggs || 0)
            )
          }, 0) || 0) / 7
      ),
    [data]
  )

  const lastEntry = data?.slice(-1).pop()
  const lastEntryDate = lastEntry?.created
  const lastEntryChickenCount = Number(lastEntry?.fieldInitialstock || 0)

  if (isLoading) return null
  if (error)
    throw `Something went wrong with fetching farmer journal data for user ${farmerId}`

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Data Summary</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonLabel>Average of {eggCount} eggs</IonLabel>
        <br />
        <IonLabel>
          <>
            Recorded {lastEntryChickenCount} chickens on{" "}
            {dayjs(lastEntryDate).format("MMM DD, YYYY")}
          </>
        </IonLabel>
      </IonCardContent>
    </IonCard>
  )
}
